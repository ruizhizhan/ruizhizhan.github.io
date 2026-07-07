---
title: Research
date: 2026-06-30
type: landing

cascade:
  - type: docs

design:
  spacing: '0rem'

sections:
  - block: markdown
    content:
      title: ""
      subtitle: ""
      text: |
        <style>
          .research-redesign {
            --research-bg: #ffffff;
            --research-ink: #111827;
            --research-muted: #4b5563;
            --research-subtle: #64748b;
            --research-line: rgba(17, 24, 39, 0.12);
            --research-panel: #ffffff;
            --research-panel-soft: #f8fafc;
            --research-accent: #475569;
            background: var(--research-bg);
            color: var(--research-ink);
            font-family: inherit;
            margin-left: calc(50% - 50vw);
            margin-top: -8rem;
            width: 100vw;
          }

          .research-redesign * {
            box-sizing: border-box;
          }

          .research-redesign a {
            color: inherit;
          }

          .research-hero {
            align-items: end;
            background:
              linear-gradient(90deg, rgba(5, 8, 13, 0.90) 0%, rgba(5, 8, 13, 0.72) 48%, rgba(5, 8, 13, 0.32) 100%),
              url('/images/trappist1-system.jpg') center / cover no-repeat;
            color: #ffffff;
            display: grid;
            min-height: min(72svh, 720px);
            padding: clamp(5rem, 10vw, 8rem) clamp(2rem, 7vw, 7rem) clamp(3.5rem, 6vw, 5rem);
            position: relative;
          }

          .research-hero::after {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--research-bg));
            bottom: 0;
            content: "";
            height: clamp(4rem, 9vw, 8rem);
            left: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            z-index: 0;
          }

          .research-hero__inner {
            max-width: 1040px;
            position: relative;
            z-index: 1;
          }

          .research-kicker {
            color: rgba(255, 255, 255, 0.76);
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }

          .research-hero h1 {
            color: #ffffff;
            font-size: clamp(2.5rem, 5.4vw, 5.4rem);
            letter-spacing: 0;
            line-height: 1.02;
            margin: 0 0 1.25rem;
            max-width: 1040px;
          }

          .research-hero p {
            color: rgba(255, 255, 255, 0.88);
            font-size: clamp(1rem, 1.45vw, 1.2rem);
            line-height: 1.7;
            margin: 0 0 1rem;
            max-width: 920px;
          }

          .research-hero p:last-of-type {
            margin-bottom: 0;
          }

          .research-hero__credit {
            bottom: 1rem;
            color: rgba(255, 255, 255, 0.74);
            font-size: 0.9rem;
            line-height: 1.4;
            position: absolute;
            right: clamp(2rem, 7vw, 7rem);
            z-index: 2;
          }

          .research-hero__credit a {
            border-bottom: 1px solid rgba(255, 255, 255, 0.32);
            color: inherit;
            text-decoration: none;
          }

          .research-band {
            background: var(--research-bg);
            color: var(--research-ink);
            padding: clamp(3.5rem, 7vw, 6rem) clamp(2rem, 7vw, 7rem);
          }

          .research-band--soft {
            background: var(--research-panel-soft);
          }

          .research-wrap {
            margin: 0 auto;
            max-width: 1180px;
          }

          .research-two-col {
            align-items: center;
            display: grid;
            gap: clamp(2rem, 5vw, 4rem);
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
          }

          .research-usp {
            background: var(--research-panel);
            border: 1px solid var(--research-line);
            border-radius: 8px;
            box-shadow: 0 24px 70px rgba(15, 23, 42, 0.10);
            display: grid;
            grid-template-columns: minmax(0, 0.84fr) minmax(360px, 1.16fr);
            grid-template-rows: auto 1fr;
            min-height: 480px;
            overflow: hidden;
          }

          .research-usp__header {
            grid-column: 1 / -1;
            padding: clamp(2rem, 4vw, 3.5rem) clamp(2rem, 5vw, 4.25rem) 0;
          }

          .research-usp__header h2 {
            margin-bottom: 0;
            max-width: 980px;
          }

          .research-usp__body {
            align-self: center;
            padding: clamp(1.25rem, 3vw, 2.35rem) clamp(1.75rem, 4vw, 3.6rem) clamp(2rem, 4vw, 3.5rem) clamp(2rem, 5vw, 4.25rem);
          }

          .research-usp__body .research-copy {
            max-width: 620px;
          }

          .research-usp__figure {
            align-self: stretch;
            background: transparent;
            color: var(--research-subtle);
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
            justify-content: center;
            margin: 0;
            min-height: 100%;
            padding: clamp(0.9rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 1.35rem) clamp(1rem, 2.3vw, 1.65rem);
          }

          .research-usp__figure img {
            display: block;
            filter: drop-shadow(0 18px 32px rgba(15, 23, 42, 0.16));
            height: auto;
            margin: 0 auto;
            mask-image: radial-gradient(ellipse at center, #000 70%, rgba(0, 0, 0, 0.9) 82%, rgba(0, 0, 0, 0.36) 94%, transparent 100%);
            max-height: clamp(320px, 40vw, 510px);
            object-fit: contain;
            -webkit-mask-image: radial-gradient(ellipse at center, #000 70%, rgba(0, 0, 0, 0.9) 82%, rgba(0, 0, 0, 0.36) 94%, transparent 100%);
            width: min(112%, 780px);
          }

          .research-usp__caption {
            color: var(--research-subtle);
            font-size: clamp(0.82rem, 0.9vw, 0.92rem);
            line-height: 1.5;
            margin: 0 auto;
            max-width: 740px;
            padding: 0 0.4rem;
            width: min(100%, 740px);
          }

          .research-eyebrow {
            color: var(--research-accent);
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
          }

          .research-band h2 {
            color: var(--research-ink);
            font-size: clamp(2rem, 4vw, 3.6rem);
            letter-spacing: 0;
            line-height: 1.05;
            margin: 0 0 1.2rem;
          }

          .research-band h3 {
            color: var(--research-ink);
            font-size: clamp(1.25rem, 2vw, 1.65rem);
            letter-spacing: 0;
            line-height: 1.2;
            margin: 0 0 0.75rem;
          }

          .research-copy {
            color: var(--research-muted);
            font-size: 1.02rem;
            line-height: 1.75;
            margin: 0 0 1rem;
          }

          .research-image-panel {
            background: #10131a;
            border-radius: 8px;
            box-shadow: 0 24px 70px rgba(17, 24, 39, 0.22);
            overflow: hidden;
          }

          .research-image-panel img {
            display: block;
            height: auto;
            width: 100%;
          }

          .research-thread-grid {
            display: grid;
            gap: 1.35rem;
            margin-top: 2rem;
          }

          .research-branch-note {
            border-left: 3px solid var(--research-line);
            color: var(--research-muted);
            line-height: 1.7;
            margin: 1.4rem 0 0;
            max-width: 860px;
            padding-left: 1rem;
          }

          .research-thread {
            background: var(--research-panel);
            border: 1px solid var(--research-line);
            border-radius: 8px;
            box-shadow: 0 22px 64px rgba(15, 23, 42, 0.12);
            display: grid;
            gap: 0;
            grid-template-columns: minmax(320px, 0.98fr) minmax(0, 1fr);
            min-height: 340px;
            overflow: hidden;
          }

          .research-thread--reverse {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.98fr);
          }

          .research-thread--reverse .research-thread__media {
            order: 2;
          }

          .research-thread__body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: clamp(1.6rem, 3.5vw, 2.9rem);
          }

          .research-thread__label {
            color: var(--research-subtle);
            font-size: 0.76rem;
            font-weight: 700;
            letter-spacing: 0.11em;
            margin-bottom: 0.8rem;
            text-transform: uppercase;
          }

          .research-thread p {
            color: var(--research-muted);
            line-height: 1.65;
            margin: 0;
          }

          .research-thread__link {
            border-bottom: 1px solid currentColor;
            color: var(--research-accent);
            display: inline-flex;
            font-size: 1.08rem;
            font-weight: 700;
            margin-top: auto;
            padding-top: 1.4rem;
            text-decoration: none;
            width: fit-content;
          }

          .research-thread__media {
            align-items: center;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.88));
            display: flex;
            justify-content: center;
            min-height: 300px;
            padding: clamp(1rem, 2.6vw, 2rem);
          }

          .research-thread__media img {
            display: block;
            height: auto;
            max-height: 330px;
            object-fit: contain;
            width: 100%;
          }

          #wd-extension .research-thread__media {
            padding: clamp(0.55rem, 1.5vw, 1.1rem);
          }

          #wd-extension .research-thread__media img {
            max-height: 385px;
          }

          .research-continuation {
            background: var(--research-panel);
            border: 1px solid var(--research-line);
            border-radius: 8px;
            box-shadow: 0 22px 64px rgba(15, 23, 42, 0.10);
            margin-top: 1.35rem;
            padding: clamp(1.75rem, 4vw, 3.25rem);
          }

          .research-continuation h3 {
            max-width: 760px;
          }

          .research-continuation p {
            color: var(--research-muted);
            line-height: 1.7;
            margin: 0;
            max-width: 900px;
          }

          @media (prefers-color-scheme: dark) {
            .research-redesign {
              --research-bg: #020617;
              --research-ink: #f8fafc;
              --research-muted: #cbd5e1;
              --research-subtle: #94a3b8;
              --research-line: rgba(248, 250, 252, 0.14);
              --research-panel: #111827;
              --research-panel-soft: #0f172a;
              --research-accent: #cbd5e1;
            }

            .research-thread {
              background: #181c22;
            }
          }

          .dark .research-redesign,
          [data-theme="dark"] .research-redesign {
            --research-bg: #020617;
            --research-ink: #f8fafc;
            --research-muted: #cbd5e1;
            --research-subtle: #94a3b8;
            --research-line: rgba(248, 250, 252, 0.14);
            --research-panel: #111827;
            --research-panel-soft: #0f172a;
            --research-accent: #cbd5e1;
          }

          .dark .research-thread,
          [data-theme="dark"] .research-thread {
            background: #181c22;
          }

          .light .research-redesign,
          [data-theme="light"] .research-redesign,
          [data-mode="light"] .research-redesign {
            --research-bg: #ffffff;
            --research-ink: #111827;
            --research-muted: #4b5563;
            --research-subtle: #64748b;
            --research-line: rgba(17, 24, 39, 0.12);
            --research-panel: #ffffff;
            --research-panel-soft: #f8fafc;
            --research-accent: #475569;
          }

          .light .research-thread,
          [data-theme="light"] .research-thread,
          [data-mode="light"] .research-thread {
            background: var(--research-panel);
          }

          @media (max-width: 860px) {
            .research-redesign {
              margin-top: -6rem;
            }

            .research-hero {
              min-height: 68svh;
              padding-left: clamp(1.5rem, 7vw, 2rem);
              padding-right: clamp(1.5rem, 7vw, 2rem);
            }

            .research-hero h1 {
              font-size: clamp(2.35rem, 11vw, 3.45rem);
              line-height: 1.04;
            }

            .research-hero p {
              font-size: 1rem;
              line-height: 1.62;
            }

            .research-hero__credit {
              left: clamp(1.5rem, 7vw, 2rem);
              right: auto;
            }

            .research-two-col,
            .research-usp,
            .research-thread-grid,
            .research-thread {
              grid-template-columns: 1fr;
            }

            .research-thread--reverse .research-thread__media {
              order: -1;
            }

            .research-thread__link {
              margin-top: 1.2rem;
            }

            .research-thread__media {
              min-height: 210px;
              order: -1;
            }
          }
        </style>

        <div class="research-redesign">
          <section class="research-hero">
            <div class="research-hero__inner">
              <div class="research-kicker">Terrestrial worlds beyond the Solar System</div>
              <h1>What Are Rocky Exo-Worlds Like?</h1>
              <p>Even within our own Solar System, Earth’s closest rocky siblings, Venus and Mars, remind us that similar size, age, and origin do not lead to similar worlds. Around other stars, rocky planets occupy an even broader range of stellar irradiation, orbital and rotational states, thermal regimes, and chemical inventories. Some may retain thick atmospheres, while others may be stripped nearly bare. Their climates and surfaces are shaped by processes including atmospheric escape, interior–surface–atmosphere exchange, circulation, collapse, and chemistry.</p>
              <p>My research asks what these rocky exo-worlds are actually like. I use physical models, from coupled interior–atmosphere evolution models to three-dimensional general circulation models, to link planetary environments, atmospheric processes, and observable signatures.</p>
            </div>
            <div class="research-hero__credit">Image credit: <a href="https://d2pn8kiwq2w21t.cloudfront.net/images/poetry_slide13_PIA22093_vX7eMbL.width-640.jpg">NASA/JPL-Caltech</a></div>
          </section>

          <section class="research-band">
            <div class="research-wrap research-usp">
              <div class="research-usp__header">
                <div class="research-eyebrow">Ultra-short-period planets</div>
                <h2>Ultra-Short-Period Rocky Planets: From Temperate Worlds to Lava Worlds</h2>
              </div>
              <div class="research-usp__body">
                <p class="research-copy">Ultra-short-period rocky planets, with orbital periods of hours to days, are among the most favorable small planets for atmospheric characterization. They can be habitable-zone planets around white dwarfs, warm terrestrial planets around M stars such as TRAPPIST-1 b, or lava worlds around K or G stars such as 55 Cancri e and TOI-561 b.</p>
                <p class="research-copy">Many ultra-short-period rocky planets orbit so close to their host stars that they are likely tidally locked, with permanent daysides and nightsides. At the same time, their short orbital periods correspond to rapid synchronous rotation. Much of my PhD work focuses on modeling the atmospheres of these close-in, tidally locked rocky worlds. Read the blocks below to learn more.</p>
              </div>
              <figure class="research-usp__figure">
                <img src="/images/exoplanet_distribution.png" alt="Orbital period, planet radius, and equilibrium temperature of confirmed exoplanets">
                <figcaption class="research-usp__caption">Orbital period, planet radius, and equilibrium temperature of confirmed exoplanets.</figcaption>
              </figure>
            </div>
          </section>

          <section class="research-band research-band--soft">
            <div class="research-wrap">
              <div class="research-thread-grid">
                <article class="research-thread" id="wd-extension">
                  <div class="research-thread__media">
                    <img src="/research/wd_hz/featured.jpg" alt="Featured image for the white dwarf habitable-zone study">
                  </div>
                  <div class="research-thread__body">
                    <div class="research-thread__label">White dwarf habitable zones</div>
                    <h3>Habitable zones around "dead stars"?</h3>
                    <p>White dwarfs offer a unique opportunity to search nearby stellar systems for signs of life. My simulations show that most white dwarf planets enter a bat-rotation atmospheric dynamical regime, reshaping the inner edge of the habitable zone and their thermal phase-curve signatures.</p>
                    <a class="research-thread__link" href="/research/wd_hz/">Read more</a>
                  </div>
                </article>
                <article class="research-thread research-thread--reverse" id="hot-extension">
                  <div class="research-thread__body">
                    <div class="research-thread__label">Case study: 55 Cancri e</div>
                    <h3>Utilizing 3D GCMs to reinterpret JWST observations of 55 Cancri e.</h3>
                    <p>This new research uses non-grey three-dimensional GCM simulations to test how realistic circulation, heat transport, and high-temperature radiation alter the interpretation of JWST thermal-emission observations of a lava world.</p>
                    <a class="research-thread__link" href="/research/hot_gcm/">Read more</a>
                  </div>
                  <div class="research-thread__media">
                    <img src="/research/hot_gcm/feature.jpg" alt="Featured image for the non-grey hot rocky planet modeling study">
                  </div>
                </article>
              </div>
              <div class="research-continuation">
                <div class="research-thread__label">Growing questions</div>
                <h3>Interesting science to be continued.</h3>
                <p>The next step is to connect individual case studies to broader questions about how hot rocky planets form, lose, retain, or regenerate atmospheres over time. Escape, chemistry, circulation, surface-atmosphere exchange, and interior evolution may all leave observable signatures.</p>
              </div>
            </div>
          </section>

        </div>
    design:
      columns: '1'
---
