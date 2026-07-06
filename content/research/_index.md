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
            --research-ink: #15161a;
            --research-muted: #5f6672;
            --research-line: rgba(21, 22, 26, 0.14);
            --research-panel: #ffffff;
            --research-panel-soft: #f5f7f9;
            --research-red: #a53c35;
            --research-teal: #0f766e;
            --research-gold: #b7791f;
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
              linear-gradient(90deg, rgba(7, 10, 15, 0.92) 0%, rgba(7, 10, 15, 0.70) 48%, rgba(7, 10, 15, 0.26) 100%),
              url('/images/exoplanet_distribution.png') center / cover no-repeat;
            color: #ffffff;
            display: grid;
            min-height: min(72svh, 720px);
            padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 6vw, 6rem) clamp(2rem, 5vw, 4rem);
          }

          .research-hero__inner {
            max-width: 850px;
          }

          .research-kicker {
            color: #7dd3c7;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }

          .research-hero h1 {
            color: #ffffff;
            font-size: clamp(3rem, 8vw, 7.5rem);
            letter-spacing: 0;
            line-height: 0.9;
            margin: 0 0 1.4rem;
            max-width: 780px;
          }

          .research-hero p {
            color: rgba(255, 255, 255, 0.88);
            font-size: clamp(1.05rem, 2vw, 1.35rem);
            line-height: 1.65;
            margin: 0;
            max-width: 760px;
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
            color: var(--research-teal);
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
            color: var(--research-red);
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
            color: var(--research-teal);
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
            border-left: 3px solid var(--research-gold);
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
              --research-ink: #eef2f7;
              --research-muted: #bac3cf;
              --research-line: rgba(255, 255, 255, 0.16);
              --research-panel: #181c22;
              --research-panel-soft: #0f1318;
            }

            .research-thread {
              background: #181c22;
            }
          }

          @media (max-width: 860px) {
            .research-hero {
              min-height: 68svh;
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
              <h1>Are we alone?</h1>
              <p>Even inside our own Solar System, Earth's closest rocky siblings, Venus and Mars, show that similar beginnings do not guarantee similar worlds. They are comparable to Earth in size and orbit and likely grew from the same protoplanetary disk, yet their present-day climates are radically different. Around other stars, small terrestrial planets occupy a much wider range of stellar, orbital, and thermal environments, so their atmospheres and surfaces may be even more diverse.</p>
            </div>
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
