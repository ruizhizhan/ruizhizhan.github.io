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
            --research-ink: #111827;
            --research-muted: #4b5563;
            --research-subtle: #64748b;
            --research-line: rgba(17, 24, 39, 0.12);
            --research-panel: #ffffff;
            --research-panel-soft: #f8fafc;
            --research-accent: #475569;
            color: var(--research-ink);
            font-family: inherit;
            margin-left: calc(50% - 50vw);
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
            padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 6vw, 6rem) clamp(3.5rem, 6vw, 5rem);
            position: relative;
          }

          .research-hero__inner {
            max-width: 960px;
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
            font-size: clamp(3rem, 7vw, 6.6rem);
            letter-spacing: 0;
            line-height: 0.95;
            margin: 0 0 1.4rem;
            max-width: 960px;
          }

          .research-hero p {
            color: rgba(255, 255, 255, 0.88);
            font-size: clamp(1.05rem, 2vw, 1.35rem);
            line-height: 1.65;
            margin: 0 0 1rem;
            max-width: 850px;
          }

          .research-hero p:last-of-type {
            margin-bottom: 0;
          }

          .research-hero__credit {
            bottom: 1rem;
            color: rgba(255, 255, 255, 0.62);
            font-size: 0.72rem;
            line-height: 1.4;
            position: absolute;
            right: clamp(1.25rem, 6vw, 6rem);
          }

          .research-hero__credit a {
            border-bottom: 1px solid rgba(255, 255, 255, 0.32);
            color: inherit;
            text-decoration: none;
          }

          .research-band {
            padding: clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 6vw, 6rem);
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

          .research-caption {
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.82rem;
            line-height: 1.5;
            margin: 0;
            padding: 0.9rem 1rem 1rem;
          }

          .research-thread-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1.15fr 0.85fr;
            margin-top: 2.3rem;
          }

          .research-thread-grid .research-thread:nth-child(3) {
            grid-column: 1 / -1;
          }

          .research-thread {
            background: var(--research-panel);
            border: 1px solid var(--research-line);
            border-radius: 8px;
            display: grid;
            gap: 1rem;
            grid-template-columns: minmax(0, 0.9fr) minmax(190px, 0.65fr);
            min-height: 280px;
            overflow: hidden;
          }

          .research-thread--text-only {
            grid-template-columns: 1fr;
            min-height: 0;
          }

          .research-thread__body {
            display: flex;
            flex-direction: column;
            padding: clamp(1.4rem, 3vw, 2rem);
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
            font-size: 0.95rem;
            font-weight: 700;
            margin-top: auto;
            padding-top: 1.4rem;
            text-decoration: none;
            width: fit-content;
          }

          .research-thread__media {
            background: #111827;
            min-height: 230px;
          }

          .research-thread__media img {
            display: block;
            height: 100%;
            object-fit: cover;
            width: 100%;
          }

          .research-methods {
            align-items: center;
            background: #15161a;
            color: #ffffff;
            display: grid;
            gap: clamp(1.5rem, 4vw, 3rem);
            grid-template-columns: minmax(0, 0.9fr) minmax(280px, 1fr);
            margin-top: 2.5rem;
            overflow: hidden;
          }

          .research-methods__copy {
            padding: clamp(1.5rem, 4vw, 3rem);
          }

          .research-methods h3 {
            color: #ffffff;
          }

          .research-methods p {
            color: rgba(255, 255, 255, 0.74);
            line-height: 1.65;
            margin: 0;
          }

          .research-methods img {
            display: block;
            height: 100%;
            object-fit: cover;
            width: 100%;
          }

          .research-observation {
            border-top: 1px solid var(--research-line);
            display: grid;
            gap: clamp(2rem, 4vw, 3rem);
            grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr);
            padding-top: clamp(2rem, 5vw, 4rem);
          }

          .research-observation__list {
            display: grid;
            gap: 1rem;
          }

          .research-observation__item {
            border-left: 3px solid var(--research-line);
            padding-left: 1rem;
          }

          .research-observation__item strong {
            color: var(--research-ink);
            display: block;
            margin-bottom: 0.25rem;
          }

          .research-observation__item span {
            color: var(--research-muted);
            line-height: 1.6;
          }

          @media (prefers-color-scheme: dark) {
            .research-redesign {
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

          @media (max-width: 860px) {
            .research-hero {
              min-height: 68svh;
            }

            .research-hero__credit {
              left: clamp(1.25rem, 6vw, 6rem);
              right: auto;
            }

            .research-two-col,
            .research-thread-grid,
            .research-thread,
            .research-methods,
            .research-observation {
              grid-template-columns: 1fr;
            }

            .research-thread-grid .research-thread:nth-child(3) {
              grid-column: auto;
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
              <div class="research-kicker">Small terrestrial worlds beyond the Solar System</div>
              <h1>What Are Rocky Exo-Worlds Like?</h1>
              <p>Even within our own Solar System, Earth’s closest rocky siblings, Venus and Mars, remind us that similar size, age, and origin do not lead to similar worlds. Around other stars, rocky planets occupy an even broader range of stellar irradiation, orbital and rotational states, thermal regimes, and chemical inventories. Some may retain thick atmospheres, while others may be stripped nearly bare. Their climates and surfaces are shaped by processes including atmospheric escape, interior–surface–atmosphere exchange, circulation, collapse, and chemistry.</p>
              <p>My research asks what these rocky exo-worlds are actually like. I use physical models, from coupled interior–atmosphere evolution models to three-dimensional general circulation models, to link planetary environments, atmospheric processes, and observable signatures.</p>
            </div>
            <div class="research-hero__credit">Image credit: <a href="https://d2pn8kiwq2w21t.cloudfront.net/images/poetry_slide13_PIA22093_vX7eMbL.width-640.jpg">NASA/JPL-Caltech</a></div>
          </section>

          <section class="research-band">
            <div class="research-wrap research-two-col">
              <div>
                <div class="research-eyebrow">Ultra-short-period planets</div>
                <h2>Fast orbits, permanent hemispheres, observable atmospheres.</h2>
                <p class="research-copy">Ultra-short-period rocky planets, with orbital periods of hours to days, are among the most favorable small planets for atmospheric characterization. They include possible habitable-zone planets around white dwarfs, warm terrestrial planets around M stars such as TRAPPIST-1 b, and lava worlds around K and G stars such as 55 Cancri e and TOI-561 b.</p>
                <p class="research-copy">Because they orbit within the tidal-locking radius, many likely keep permanent daysides and nightsides, like the Moon facing Earth. At the same time, their short orbital periods imply rapid rotation, raising new questions about atmospheric circulation, heat transport, escape, and long-term evolution.</p>
              </div>
              <figure class="research-image-panel">
                <img src="/images/transit_sketch.jpg" alt="Transit geometry for planets orbiting a G dwarf, M dwarf, and white dwarf">
                <figcaption class="research-caption">Small stars and compact remnants make terrestrial planets unusually accessible to transit and atmospheric observations.</figcaption>
              </figure>
            </div>
          </section>

          <section class="research-band research-band--soft">
            <div class="research-wrap">
              <div class="research-eyebrow">Research threads</div>
              <h2>How rocky planets keep, move, and lose atmospheres.</h2>
              <div class="research-thread-grid">
                <article class="research-thread">
                  <div class="research-thread__body">
                    <div class="research-thread__label">White dwarf habitable zones</div>
                    <h3>Habitable zones around "dead stars"?</h3>
                    <p>I use the ExoCAM general circulation model to study the inner edge of the habitable zone around white dwarfs. Ultra-short-period habitable planets can enter a bat-rotation regime, changing both climate stability and observability.</p>
                    <a class="research-thread__link" href="/research/wd_hz/">Read the white dwarf study</a>
                  </div>
                  <div class="research-thread__media">
                    <img src="/images/4rotatorTS.png" alt="Surface temperature and zonal wind patterns for different rotation regimes">
                  </div>
                </article>

                <article class="research-thread">
                  <div class="research-thread__body">
                    <div class="research-thread__label">Hot rocky planets</div>
                    <h3>Lava worlds and secondary atmospheres.</h3>
                    <p>I model hot, non-habitable rocky planets such as 55 Cancri e with non-grey radiative transfer to reinterpret JWST observations and test whether thin secondary atmospheres can survive.</p>
                    <a class="research-thread__link" href="/research/hot_gcm/">Read the hot rocky planet work</a>
                  </div>
                  <div class="research-thread__media">
                    <img src="/images/line_profile.png" alt="Gaussian and Lorentz absorption line profiles">
                  </div>
                </article>

                <article class="research-thread research-thread--text-only">
                  <div class="research-thread__body">
                    <div class="research-thread__label">Observations and evolution</div>
                    <h3>From JWST spectra to atmospheric histories.</h3>
                    <p>I am interested in connecting atmospheric models to observations and planetary evolution: how spectra and phase curves constrain present-day atmospheres, and how escape, chemistry, volatile exchange, and surface-interior coupling shape rocky planets over time. The JWST Rocky Worlds DDT program provides a timely observational context for this broader question.</p>
                  </div>
                </article>
              </div>

              <div class="research-methods">
                <div class="research-methods__copy">
                  <div class="research-kicker">Modeling pipeline</div>
                  <h3>Realistic radiation for extreme rocky atmospheres.</h3>
                  <p>The hot-planet work builds opacity tables from high-temperature molecular line lists, validates correlated-k coefficients against line-by-line calculations, and couples the results to three-dimensional general circulation models.</p>
                </div>
                <img src="/images/pipeline.png" alt="Pipeline for non-grey atmospheric modeling of hot rocky planets">
              </div>
            </div>
          </section>

          <section class="research-band">
            <div class="research-wrap research-observation">
              <div>
                <div class="research-eyebrow">What ties the projects together</div>
                <h2>Comparative climatology for small worlds.</h2>
              </div>
              <div class="research-observation__list">
                <div class="research-observation__item">
                  <strong>Atmospheric dynamics</strong>
                  <span>How tidal locking, rapid rotation, stellar spectra, and radiative timescales control heat transport between permanent daysides and nightsides.</span>
                </div>
                <div class="research-observation__item">
                  <strong>Atmospheric characterization</strong>
                  <span>How transit spectra, thermal emission, and phase curves can distinguish airless planets from worlds with secondary atmospheres.</span>
                </div>
                <div class="research-observation__item">
                  <strong>Planetary evolution</strong>
                  <span>How rocky planets and their atmospheres change over time through escape, chemistry, interior exchange, and changing stellar environments.</span>
                </div>
              </div>
            </div>
          </section>
        </div>
    design:
      columns: '1'
---
