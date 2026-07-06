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
            color: rgba(255, 255, 255, 0.62);
            font-size: 0.72rem;
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
            grid-template-columns: minmax(300px, 0.95fr) minmax(0, 1fr);
            min-height: 520px;
            overflow: hidden;
          }

          .research-usp__image {
            background:
              linear-gradient(90deg, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.18) 58%, var(--research-panel) 100%),
              url('/images/exoplanet_distribution.png') center / cover no-repeat;
            min-height: 100%;
          }

          .research-usp__body {
            align-self: center;
            padding: clamp(2rem, 5vw, 4.25rem);
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
            display: grid;
            gap: 1rem;
            grid-template-columns: minmax(280px, 0.92fr) minmax(0, 1fr);
            min-height: 360px;
            overflow: hidden;
          }

          .research-thread--reverse {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.92fr);
          }

          .research-thread--reverse .research-thread__media {
            order: 2;
          }

          .research-thread__body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: clamp(1.75rem, 4vw, 3.25rem);
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
            min-height: 320px;
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

            .research-usp__image {
              background:
                linear-gradient(90deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.20) 58%, var(--research-panel) 100%),
                url('/images/exoplanet_distribution.png') center / cover no-repeat;
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

          .dark .research-usp__image,
          [data-theme="dark"] .research-usp__image {
            background:
              linear-gradient(90deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.20) 58%, var(--research-panel) 100%),
              url('/images/exoplanet_distribution.png') center / cover no-repeat;
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
            .research-thread,
            .research-methods {
              grid-template-columns: 1fr;
            }

            .research-usp__image {
              background:
                linear-gradient(to bottom, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.12) 55%, var(--research-panel) 100%),
                url('/images/exoplanet_distribution.png') center / cover no-repeat;
              min-height: 300px;
            }

            .dark .research-usp__image,
            [data-theme="dark"] .research-usp__image {
              background:
                linear-gradient(to bottom, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.16) 55%, var(--research-panel) 100%),
                url('/images/exoplanet_distribution.png') center / cover no-repeat;
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
              <div class="research-usp__image" role="img" aria-label="Orbital period, planet radius, and equilibrium temperature of confirmed exoplanets"></div>
              <div class="research-usp__body">
                <div class="research-eyebrow">Ultra-short-period planets</div>
                <h2>Ultra-Short-Period Rocky Planets: From Temperate Worlds to Lava Worlds</h2>
                <p class="research-copy">Ultra-short-period rocky planets, with orbital periods of hours to days, are among the most favorable small planets for atmospheric characterization. They can be habitable-zone planets around white dwarfs, warm terrestrial planets around M stars such as TRAPPIST-1 b, or lava worlds around K or G stars such as 55 Cancri e and TOI-561 b.</p>
                <p class="research-copy">Many ultra-short-period rocky planets orbit so close to their host stars that they are likely tidally locked, with permanent daysides and nightsides. At the same time, their short orbital periods correspond to rapid synchronous rotation. Much of my PhD work focuses on modeling the atmospheres of these close-in, tidally locked rocky worlds. Read the blocks below to learn more.</p>
                <p class="research-caption">Orbital period, planet radius, and equilibrium temperature of confirmed exoplanets.</p>
              </div>
            </div>
          </section>

          <section class="research-band research-band--soft">
            <div class="research-wrap">
              <div class="research-eyebrow">Research threads</div>
              <h2>Growing research directions.</h2>
              <p class="research-branch-note">My current projects explore ultra-short-period rocky planets across a wide temperature range, from temperate worlds around white dwarfs to hot lava planets observed with JWST.</p>
              <div class="research-thread-grid">
                <article class="research-thread" id="wd-extension">
                  <div class="research-thread__media">
                    <img src="/images/4rotatorTS.png" alt="Surface temperature and zonal wind patterns for different rotation regimes">
                  </div>
                  <div class="research-thread__body">
                    <div class="research-thread__label">White dwarf habitable zones</div>
                    <h3>Habitable zones around "dead stars"?</h3>
                    <p>Ultra-short-period planets around white dwarfs can still receive temperate stellar flux. My simulations show that they can enter a bat-rotation regime, reshaping the inner edge of the habitable zone and their thermal phase-curve signatures.</p>
                    <a class="research-thread__link" href="/research/wd_hz/">Read more</a>
                  </div>
                </article>

                <article class="research-thread research-thread--reverse" id="hot-extension">
                  <div class="research-thread__body">
                    <div class="research-thread__label">Non-grey hot rocky planets</div>
                    <h3>Lava worlds, realistic radiation, and secondary atmospheres.</h3>
                    <p>Hot rocky planets such as 55 Cancri e require radiative transfer built for extreme temperatures. I use non-grey GCM simulations to connect atmospheric dynamics, emission spectra, and the survival of thin secondary atmospheres.</p>
                    <a class="research-thread__link" href="/research/hot_gcm/">Read more</a>
                  </div>
                  <div class="research-thread__media">
                    <img src="/images/line_profile.png" alt="Gaussian and Lorentz absorption line profiles">
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

        </div>
    design:
      columns: '1'
---
