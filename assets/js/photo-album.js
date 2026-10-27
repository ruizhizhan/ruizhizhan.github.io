(() => {
  const root = document.querySelector('[data-photo-album]');
  const library = document.getElementById('photo-library');
  if (!root || !library) return;
  const photos = JSON.parse(library.textContent);
  if (!photos.length) return;

  const perPage = 2;
  const perSpread = perPage * 2;
  const totalPages = Math.ceil(photos.length / perPage);
  const totalSpreads = Math.ceil(photos.length / perSpread);
  const spread = document.getElementById('album-spread');
  const leftPage = spread.querySelector('[data-page="left"]');
  const rightPage = spread.querySelector('[data-page="right"]');
  const previous = document.getElementById('album-prev');
  const next = document.getElementById('album-next');
  const jump = document.getElementById('album-jump');
  const status = document.getElementById('album-page-status');
  const dialog = document.getElementById('photo-dialog');
  const rotator = document.getElementById('photo-rotator');
  const front = rotator.querySelector('.photo-face--front');
  const back = document.getElementById('photo-back');
  const photoImage = document.getElementById('photo-image');
  const photoTitle = document.getElementById('photo-title');
  const photoDate = document.getElementById('photo-date');
  const photoStory = document.getElementById('photo-story');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let currentSpread = 0;
  let currentPhoto = 0;
  let takenPhotoIndex = null;
  let turning = false;
  let flipped = false;
  let lastOpener = null;
  let previousOverflow = '';
  let pointerStart = null;
  let lastSwipe = -Infinity;
  let lastWheelEvent = -Infinity;
  let wheelDistance = 0;
  let wheelGestureUsed = false;
  let extractionAnimations = [];
  let extractionSheet = null;
  let returning = false;
  const thumbnailLoads = new Map();

  function applyTakenState(button) {
    const taken = Number(button.dataset.photoIndex) === takenPhotoIndex;
    button.classList.toggle('is-taken', taken);
    button.inert = taken;
    if (taken) button.setAttribute('aria-hidden', 'true');
    else button.removeAttribute('aria-hidden');
  }

  function setTakenPhoto(index) {
    takenPhotoIndex = index;
    spread.querySelectorAll('[data-photo-index]').forEach(applyTakenState);
  }

  function makePhoto(index) {
    const photo = photos[index];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'album-photo';
    button.style.setProperty('--print-ratio', photo.width / photo.height);
    button.dataset.photoIndex = index;
    applyTakenState(button);
    button.setAttribute('aria-label', `View ${photo.title}, ${photo.dateLabel}`);
    const mount = document.createElement('span');
    mount.className = 'album-photo-image';
    const image = document.createElement('img');
    image.src = photo.thumbnail;
    image.alt = photo.title;
    image.width = photo.width;
    image.height = photo.height;
    image.decoding = 'async';
    image.draggable = false;
    mount.append(image);
    const caption = document.createElement('span');
    caption.className = 'album-photo-caption';
    const title = document.createElement('span');
    title.className = 'album-photo-title';
    title.textContent = photo.title;
    const date = document.createElement('span');
    date.className = 'album-photo-date';
    date.textContent = photo.dateLabel;
    caption.append(title, date);
    button.append(mount, caption);
    return button;
  }

  function fillPage(page, pageIndex) {
    const children = [];
    for (let slot = 0; slot < perPage; slot++) {
      // Read each spread across the top row, then across the bottom row.
      // This keeps consecutive portrait photographs side by side.
      const index = Math.floor(pageIndex / 2) * perSpread + slot * 2 + pageIndex % 2;
      if (index < photos.length) {
        children.push(makePhoto(index));
      } else {
        const empty = document.createElement('div');
        empty.className = 'album-empty-slot';
        empty.setAttribute('aria-hidden', 'true');
        children.push(empty);
      }
    }
    const number = document.createElement('span');
    number.className = 'album-page-number';
    number.textContent = pageIndex < totalPages ? pageIndex + 1 : '';
    children.push(number);
    page.replaceChildren(...children);
    page.setAttribute('aria-label', `Page ${pageIndex + 1}`);
  }

  function updateControls() {
    previous.disabled = turning || currentSpread === 0;
    next.disabled = turning || currentSpread === totalSpreads - 1;
    jump.disabled = turning;
    jump.value = currentSpread;
    const first = currentSpread * 2 + 1;
    const last = Math.min(first + 1, totalPages);
    status.textContent = `Pages ${first}–${last} of ${totalPages}`;
  }

  function renderSpread() {
    fillPage(leftPage, currentSpread * 2);
    fillPage(rightPage, currentSpread * 2 + 1);
    updateControls();
    // Decode neighbouring thumbnails, so both sides of a turning sheet are ready.
    preloadSpread(currentSpread - 1);
    preloadSpread(currentSpread + 1);
  }

  function preloadSpread(index) {
    if (index < 0 || index >= totalSpreads) return Promise.resolve();
    return Promise.all(photos.slice(index * perSpread, (index + 1) * perSpread).map(photo => {
      if (!thumbnailLoads.has(photo.thumbnail)) {
        const image = new Image();
        const loaded = new Promise(resolve => {
          image.onload = image.onerror = resolve;
        });
        image.src = photo.thumbnail;
        thumbnailLoads.set(photo.thumbnail, image.decode ? image.decode().catch(() => {}) : loaded);
      }
      return thumbnailLoads.get(photo.thumbnail);
    }));
  }

  function makeTurnFace(pageIndex, side, isBack) {
    const face = document.createElement('div');
    face.className = `album-turn-face${isBack ? ' album-turn-face--back' : ''}`;
    const page = document.createElement('div');
    page.className = `album-page album-page--${side}`;
    fillPage(page, pageIndex);
    face.append(page);
    return face;
  }

  async function turnTo(target) {
    if (turning || target < 0 || target >= totalSpreads || target === currentSpread) return;
    turning = true;
    updateControls();
    await preloadSpread(target);
    if (reducedMotion.matches || !spread.animate) {
      currentSpread = target;
      turning = false;
      renderSpread();
      return;
    }
    spread.classList.add('is-turning');
    const forward = target > currentSpread;
    const sheet = document.createElement('div');
    sheet.className = `album-flipper${forward ? '' : ' album-flipper--backward'}`;
    sheet.setAttribute('aria-hidden', 'true');
    sheet.inert = true;
    if (forward) {
      sheet.append(makeTurnFace(currentSpread * 2 + 1, 'right', false), makeTurnFace(target * 2, 'left', true));
      fillPage(rightPage, target * 2 + 1);
    } else {
      sheet.append(makeTurnFace(currentSpread * 2, 'left', false), makeTurnFace(target * 2 + 1, 'right', true));
      fillPage(leftPage, target * 2);
    }
    spread.append(sheet);
    // A filter on this 3D parent flattens its faces and hides the reverse side.
    // Keep shading on the individual faces; animate only the sheet's transform.
    const animation = sheet.animate([
      { transform: 'rotateY(0deg)' },
      { transform: `rotateY(${forward ? -90 : 90}deg)`, offset: 0.5 },
      { transform: `rotateY(${forward ? -180 : 180}deg)` }
    ], { duration: 850, easing: 'cubic-bezier(.42, 0, .2, 1)', fill: 'forwards' });
    try { await animation.finished; } catch (_) { /* Finish in a consistent spread if interrupted. */ }
    currentSpread = target;
    turning = false;
    renderSpread();
    sheet.remove();
    spread.classList.remove('is-turning');
  }

  function setFlipped(value) {
    flipped = value;
    rotator.classList.toggle('is-flipped', value);
    rotator.setAttribute('aria-pressed', value);
    rotator.setAttribute('aria-label', value ? 'Show photograph' : 'Turn photograph over to read its story');
    front.inert = value;
    back.inert = !value;
    front.setAttribute('aria-hidden', value);
    back.setAttribute('aria-hidden', !value);
  }

  function stopExtraction() {
    extractionAnimations.forEach(animation => animation.cancel());
    extractionAnimations = [];
    extractionSheet?.remove();
    extractionSheet = null;
    dialog.classList.remove('is-extracting');
  }

  function printBounds(opener) {
    const image = opener?.querySelector('img');
    if (!image) return null;
    const rect = image.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(opener).paddingLeft) || 0;
    return { left: rect.left - padding, top: rect.top - padding,
      width: rect.width + padding * 2, height: rect.height + padding * 2 };
  }

  async function transferPrint(source, target, photo, puttingBack = false) {
    if (!source || !target || !source.width || !target.width || reducedMotion.matches || !rotator.animate) return;
    const carrier = document.createElement('div');
    carrier.className = 'photo-transfer';
    carrier.setAttribute('aria-hidden', 'true');
    Object.assign(carrier.style, {
      left: `${source.left}px`, top: `${source.top}px`,
      width: `${source.width}px`, height: `${source.height}px`
    });
    const print = document.createElement('div');
    print.className = 'photo-lift';
    const image = document.createElement('img');
    image.src = puttingBack ? photo.image : photo.thumbnail;
    image.alt = '';
    image.draggable = false;
    print.append(image);
    carrier.append(print);
    dialog.classList.add('is-extracting');
    dialog.append(carrier);
    extractionSheet = carrier;
    const sx = target.width / source.width;
    const sy = target.height / source.height;
    const dx = target.left + target.width / 2 - source.left - source.width / 2;
    const dy = target.top + target.height / 2 - source.top - source.height / 2;
    const end = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;
    const duration = puttingBack ? 540 : 1000;
    // Lift an edge at the original print's size before moving it into the hand.
    // Keep the empty mount's dimensions while its photograph is in hand.
    const path = puttingBack ? [
      { transform: 'translate3d(0, 0, 0) scale(1)' },
      { transform: `translate3d(${dx}px, ${dy - 18}px, 0) scale(${sx}, ${sy})`, offset: 0.78 },
      { transform: end }
    ] : [
      { transform: 'translate3d(0, 0, 0) scale(1)' },
      { transform: 'translate3d(-6px, -20px, 0) scale(1)', offset: 0.3 },
      { transform: end }
    ];
    const tilt = puttingBack ? [
      { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)', boxShadow: '0 22px 45px #0006', borderWidth: '6px' },
      { transform: 'rotateX(20deg) rotateY(-8deg) rotateZ(-4deg)', boxShadow: '0 12px 18px #0004', borderWidth: `${6 / sx}px`, offset: 0.65 },
      { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(-0.6deg)', boxShadow: '0 2px 5px #0003', borderWidth: `${6 / sx}px` }
    ] : [
      { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(-0.6deg)', boxShadow: '0 2px 5px #0003', borderWidth: '6px' },
      { transform: 'rotateX(28deg) rotateY(-10deg) rotateZ(-5deg)', boxShadow: '0 20px 28px #0005', borderWidth: '6px', offset: 0.3 },
      { transform: 'rotateX(-8deg) rotateY(6deg) rotateZ(3deg)', boxShadow: '0 30px 45px #0006', borderWidth: `${6 / sx}px`, offset: 0.68 },
      { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)', boxShadow: '0 22px 45px #0006', borderWidth: `${6 / sx}px` }
    ];
    const options = { duration, easing: 'cubic-bezier(.3, .1, .2, 1)', fill: 'forwards' };
    extractionAnimations = [carrier.animate(path, options), print.animate(tilt, options)];
    try { await Promise.all(extractionAnimations.map(animation => animation.finished)); }
    catch (_) { /* Closing or changing photographs cancels the transfer. */ }
    if (extractionSheet === carrier) {
      stopExtraction();
      if (!puttingBack && dialog.open) rotator.focus({ preventScroll: true });
    }
  }

  async function closePhoto() {
    if (!dialog.open || returning) return;
    if (extractionSheet) {
      stopExtraction();
      dialog.close();
      return;
    }
    returning = true;
    const mounted = spread.querySelector(`[data-photo-index="${currentPhoto}"]`);
    const target = printBounds(mounted);
    const source = rotator.getBoundingClientRect();
    setFlipped(false);
    await transferPrint(source, target, photos[currentPhoto], true);
    if (dialog.open) dialog.close();
    returning = false;
  }

  function showPhoto(index, opener) {
    if (returning || index < 0 || index >= photos.length) return;
    const opening = !dialog.open;
    const sourceRect = opening ? printBounds(opener) : null;
    stopExtraction();
    currentPhoto = index;
    setTakenPhoto(index);
    const photo = photos[index];
    setFlipped(false);
    // A fresh photograph should not animate in from the previous one's back.
    rotator.style.transition = 'none';
    rotator.style.setProperty('--photo-ratio', photo.width / photo.height);
    photoImage.src = photo.image;
    photoImage.alt = photo.title;
    photoTitle.textContent = photo.title;
    photoDate.textContent = photo.dateLabel;
    // Story HTML is generated by Hugo from the owner's local Markdown metadata.
    photoStory.innerHTML = photo.story;
    dialog.setAttribute('aria-label', `Photograph: ${photo.title}`);
    const targetSpread = Math.floor(index / perSpread);
    if (targetSpread !== currentSpread) {
      currentSpread = targetSpread;
      renderSpread();
    }
    if (opening) {
      lastOpener = opener || null;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      transferPrint(sourceRect, rotator.getBoundingClientRect(), photo);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => { rotator.style.transition = ''; }));
    const url = new URL(location.href);
    url.searchParams.set('photo', photo.id);
    history.replaceState(null, '', url);
  }

  previous.addEventListener('click', () => turnTo(currentSpread - 1));
  next.addEventListener('click', () => turnTo(currentSpread + 1));
  jump.addEventListener('change', () => turnTo(Number(jump.value)));
  for (let index = 0; index < totalSpreads; index++) {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${index + 1} / ${totalSpreads}`;
    jump.append(option);
  }
  spread.addEventListener('click', event => {
    if (turning || performance.now() - lastSwipe < 350) return;
    const button = event.target.closest('[data-photo-index]');
    if (button) showPhoto(Number(button.dataset.photoIndex), button);
  });
  function endDrag() {
    const pointerId = pointerStart?.id;
    pointerStart = null;
    spread.classList.remove('is-dragging');
    if (pointerId !== undefined && spread.hasPointerCapture(pointerId)) spread.releasePointerCapture(pointerId);
  }
  spread.addEventListener('pointerdown', event => {
    if (turning || !event.isPrimary || event.button !== 0) return;
    pointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY, dragging: false };
  });
  spread.addEventListener('pointermove', event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    if (!pointerStart.dragging && Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      pointerStart.dragging = true;
      spread.setPointerCapture(event.pointerId);
      spread.classList.add('is-dragging');
    }
    if (pointerStart.dragging && event.cancelable) event.preventDefault();
  });
  spread.addEventListener('pointerup', event => {
    if (!pointerStart) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    const dragged = pointerStart.dragging;
    endDrag();
    // Suppress the click after a drag, including a short drag that stays on a page.
    if (dragged) lastSwipe = performance.now();
    const threshold = Math.max(35, Math.min(70, spread.clientWidth * 0.09));
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.3) {
      lastSwipe = performance.now();
      turnTo(currentSpread + (dx < 0 ? 1 : -1));
    }
  });
  spread.addEventListener('pointercancel', endDrag);
  spread.addEventListener('lostpointercapture', endDrag);
  spread.addEventListener('dragstart', event => event.preventDefault());
  spread.addEventListener('wheel', event => {
    if (event.ctrlKey) return;
    const horizontal = event.shiftKey && !event.deltaX ? event.deltaY : event.deltaX;
    if (!event.shiftKey && Math.abs(horizontal) <= Math.abs(event.deltaY) * 1.2) return;
    if (event.cancelable) event.preventDefault();
    const now = performance.now();
    if (now - lastWheelEvent > 180) {
      wheelDistance = 0;
      wheelGestureUsed = false;
    }
    lastWheelEvent = now;
    if (turning || wheelGestureUsed) return;
    const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? spread.clientWidth : 1;
    wheelDistance += horizontal * multiplier;
    if (Math.abs(wheelDistance) >= 60) {
      wheelGestureUsed = true;
      lastSwipe = now;
      turnTo(currentSpread + (wheelDistance > 0 ? 1 : -1));
    }
  }, { passive: false });
  dialog.addEventListener('click', event => {
    if (!event.target.closest('#photo-rotator')) closePhoto();
  });
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closePhoto();
  });
  dialog.addEventListener('close', () => {
    stopExtraction();
    setTakenPhoto(null);
    document.body.style.overflow = previousOverflow;
    setFlipped(false);
    const url = new URL(location.href);
    url.searchParams.delete('photo');
    history.replaceState(null, '', url);
    // Rendering or changing photographs may have replaced the original button.
    const target = lastOpener?.isConnected ? lastOpener : spread.querySelector(`[data-photo-index="${currentPhoto}"]`);
    target?.focus({ preventScroll: true });
  });
  rotator.addEventListener('click', event => {
    if (returning || extractionSheet || event.target.closest('a')) return;
    event.stopPropagation();
    setFlipped(!flipped);
  });
  rotator.addEventListener('keydown', event => {
    if (event.target !== rotator || returning || extractionSheet) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setFlipped(!flipped);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, select, textarea, [contenteditable]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const offset = event.key === 'ArrowRight' ? 1 : -1;
      if (dialog.open) showPhoto(currentPhoto + offset);
      else turnTo(currentSpread + offset);
    } else if (dialog.open && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      setFlipped(!flipped);
    }
  });
  renderSpread();
  const requested = new URL(location.href).searchParams.get('photo');
  if (requested) {
    const index = photos.findIndex(photo => photo.id === requested);
    if (index >= 0) showPhoto(index);
  }
})();
