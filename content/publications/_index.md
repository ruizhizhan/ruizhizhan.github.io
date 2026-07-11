---
title: Publications
date: 2024-01-01
type: landing

design:
  spacing: '5rem'

sections:
  - block: markdown
    content:
      title: "Publications"
      subtitle: ""
      text: |
        <style>
          .publications-wrap {
            max-width: 880px;
            margin: 0 auto;
          }

          .publications-intro {
            max-width: 680px;
            margin: -.5rem 0 2.5rem;
            color: color-mix(in srgb, currentColor 68%, transparent);
            font-size: 1.02rem;
            line-height: 1.7;
          }

          .publication-list {
            display: grid;
            gap: 1rem;
          }

          .publication-item {
            display: grid;
            grid-template-columns: 3.25rem minmax(0, 1fr);
            gap: 1.25rem;
            padding: 1.5rem;
            border: 1px solid color-mix(in srgb, currentColor 12%, transparent);
            border-radius: 1rem;
            background: color-mix(in srgb, currentColor 2.5%, transparent);
            transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
          }

          .publication-item:hover {
            transform: translateY(-2px);
            border-color: color-mix(in srgb, currentColor 24%, transparent);
            box-shadow: 0 .75rem 2rem color-mix(in srgb, currentColor 7%, transparent);
          }

          .publication-number {
            display: grid;
            place-items: center;
            width: 3.25rem;
            height: 3.25rem;
            border-radius: 50%;
            background: color-mix(in srgb, currentColor 8%, transparent);
            font-size: .82rem;
            font-weight: 800;
            letter-spacing: .04em;
          }

          .publication-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: .5rem;
            margin-bottom: .65rem;
          }

          .publication-year {
            font-size: .82rem;
            font-weight: 750;
          }

          .publication-status {
            padding: .12rem .55rem;
            border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
            border-radius: 999px;
            color: color-mix(in srgb, currentColor 66%, transparent);
            font-size: .7rem;
            font-weight: 650;
            line-height: 1.4;
            letter-spacing: .02em;
          }

          .publication-item h2 {
            margin: 0 0 .65rem;
            font-size: clamp(1.1rem, 2vw, 1.28rem);
            line-height: 1.38;
            letter-spacing: -.01em;
          }

          .publication-authors,
          .publication-venue {
            margin: 0;
            color: color-mix(in srgb, currentColor 72%, transparent);
            font-size: .92rem;
            line-height: 1.6;
          }

          .publication-venue {
            margin-top: .15rem;
            color: color-mix(in srgb, currentColor 58%, transparent);
          }

          .publication-links {
            display: flex;
            flex-wrap: wrap;
            gap: .55rem;
            margin-top: 1rem;
          }

          .publication-links a {
            display: inline-flex;
            align-items: center;
            padding: .34rem .72rem;
            border: 1px solid color-mix(in srgb, currentColor 17%, transparent);
            border-radius: .45rem;
            color: inherit;
            font-size: .78rem;
            font-weight: 700;
            line-height: 1.35;
            text-decoration: none;
            transition: background-color .2s ease, border-color .2s ease;
          }

          .publication-links a:hover {
            background: color-mix(in srgb, currentColor 8%, transparent);
            border-color: color-mix(in srgb, currentColor 28%, transparent);
          }

          @media (max-width: 640px) {
            .publication-item {
              grid-template-columns: 1fr;
              gap: 1rem;
              padding: 1.25rem;
            }

            .publication-number {
              width: 2.6rem;
              height: 2.6rem;
            }
          }
        </style>

        <div class="publications-wrap">
          <p class="publications-intro"></p>
          <div class="publication-list">
            <article class="publication-item">
              <div class="publication-number">01</div>
              <div>
                <div class="publication-meta">
                  <span class="publication-year">2026</span>
                  <span class="publication-status">Accepted</span>
                </div>
                <h2>Reinterpreting the JWST Observations of 55 Cancri e with a Nongrey General Circulation Model</h2>
                <p class="publication-authors"><strong>Zhan R.</strong> and D. D. B. Koll</p>
                <p class="publication-venue">Accepted at <em>The Astrophysical Journal</em></p>
                <div class="publication-links">
                  <a href="https://arxiv.org/abs/2606.12116">arXiv</a>
                </div>
              </div>
            </article>
            <article class="publication-item">
              <div class="publication-number">02</div>
              <div>
                <div class="publication-meta">
                  <span class="publication-year">2024</span>
                  <span class="publication-status">Journal article</span>
                </div>
                <h2>Novel Atmospheric Dynamics Shape the Inner Edge of the Habitable Zone around White Dwarfs</h2>
                <p class="publication-authors"><strong>Zhan R.</strong>, D. D. B. Koll, and F. Ding</p>
                <p class="publication-venue"><em>The Astrophysical Journal</em>, 971, 125</p>
                <div class="publication-links">
                  <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ad54c1">Journal</a>
                  <a href="https://arxiv.org/abs/2406.03189">arXiv</a>
                </div>
              </div>
            </article>
            <article class="publication-item">
              <div class="publication-number">03</div>
              <div>
                <div class="publication-meta">
                  <span class="publication-status">In preparation</span>
                </div>
                <h2>Collapse of Thin Secondary Atmospheres on Hot Rocky Exoplanets</h2>
                <p class="publication-authors"><strong>Zhan R.</strong> and D. D. B. Koll</p>
              </div>
            </article>
          </div>
        </div>

    design:
      columns: '1'
---
