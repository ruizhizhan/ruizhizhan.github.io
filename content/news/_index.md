---
title: News and Updates
date: 2026-03-17
type: landing

cascade:
  - target:
      path: '{/news/*/**}'
    type: post

sections:
  - block: markdown
    content:
      title: News and Updates
      text: |
        <style>
          .news-wrap {
            max-width: 880px;
            margin: 0 auto;
          }

          .news-lede {
            margin: 0 0 2rem;
            color: color-mix(in srgb, currentColor 72%, transparent);
            font-size: 1rem;
            line-height: 1.75;
          }

          .news-highlights {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin: 0 0 2.75rem;
          }

          .news-highlight {
            border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
            border-radius: 8px;
            padding: 1rem 1.05rem;
            background: color-mix(in srgb, currentColor 4%, transparent);
          }

          .news-highlight time {
            display: block;
            margin-bottom: .45rem;
            font-size: .78rem;
            font-weight: 700;
            letter-spacing: .04em;
            text-transform: uppercase;
            color: color-mix(in srgb, currentColor 58%, transparent);
          }

          .news-highlight p {
            margin: 0;
            line-height: 1.55;
          }

          .news-year {
            display: grid;
            grid-template-columns: 5.5rem minmax(0, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .news-year h2 {
            margin: .15rem 0 0;
            font-size: 1.2rem;
            line-height: 1;
          }

          .news-items {
            border-left: 1px solid color-mix(in srgb, currentColor 18%, transparent);
            padding-left: 1.25rem;
          }

          .news-item {
            position: relative;
            padding: 0 0 1.35rem;
          }

          .news-item:last-child {
            padding-bottom: 0;
          }

          .news-item::before {
            content: "";
            position: absolute;
            left: -1.55rem;
            top: .38rem;
            width: .55rem;
            height: .55rem;
            border-radius: 50%;
            background: currentColor;
            box-shadow: 0 0 0 .28rem color-mix(in srgb, currentColor 8%, transparent);
          }

          .news-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: .45rem;
            margin-bottom: .25rem;
          }

          .news-date {
            font-size: .88rem;
            font-weight: 700;
          }

          .news-tag {
            border: 1px solid color-mix(in srgb, currentColor 16%, transparent);
            border-radius: 999px;
            padding: .08rem .5rem;
            font-size: .72rem;
            line-height: 1.4;
            color: color-mix(in srgb, currentColor 68%, transparent);
          }

          .news-item p {
            margin: 0;
            color: color-mix(in srgb, currentColor 82%, transparent);
            line-height: 1.65;
          }

          .news-archive {
            margin-top: 2.5rem;
            padding-top: 1.25rem;
            border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent);
            color: color-mix(in srgb, currentColor 62%, transparent);
            font-size: .95rem;
          }

          @media (max-width: 760px) {
            .news-highlights {
              grid-template-columns: 1fr;
            }

            .news-year {
              grid-template-columns: 1fr;
              gap: .75rem;
            }

            .news-year h2 {
              font-size: 1.1rem;
            }
          }
        </style>

        <div class="news-wrap">
          <p class="news-lede">
            Recent visits, talks, conferences, and research milestones.
          </p>

          <div class="news-highlights" aria-label="Recent highlights">
            <article class="news-highlight">
              <time>May 2026</time>
              <p>I started a research visit at the Institute of Astronomy, University of Cambridge.</p>
            </article>
            <article class="news-highlight">
              <time>January 2026</time>
              <p>I attended Rocky Worlds 4 Conference and gave an oral presentation.</p>
            </article>
            <article class="news-highlight">
              <time>December 2025</time>
              <p>I attended ICEPF conference in Shanghai and presented two posters.</p>
            </article>
          </div>

          <section class="news-year" aria-labelledby="news-2026">
            <h2 id="news-2026">2026</h2>
            <div class="news-items">
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">May</span>
                  <span class="news-tag">Visit</span>
                </div>
                <p>I started a research visit at the Institute of Astronomy, University of Cambridge.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">January</span>
                  <span class="news-tag">Conference</span>
                  <span class="news-tag">Talk</span>
                </div>
                <p>I attended Rocky Worlds 4 Conference and gave an oral presentation.</p>
              </article>
            </div>
          </section>

          <section class="news-year" aria-labelledby="news-2025">
            <h2 id="news-2025">2025</h2>
            <div class="news-items">
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">December</span>
                  <span class="news-tag">Conference</span>
                  <span class="news-tag">Poster</span>
                </div>
                <p>I attended ICEPF conference in Shanghai and presented two posters.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">April</span>
                  <span class="news-tag">Conference</span>
                  <span class="news-tag">Talk</span>
                </div>
                <p>I attended EGU and gave an <a href="https://doi.org/10.5194/egusphere-egu25-4751">oral presentation</a> titled "Modeling the Atmosphere of 55 Cancri e with a Non-grey General Circulation Model".</p>
              </article>
            </div>
          </section>

          <section class="news-year" aria-labelledby="news-2024">
            <h2 id="news-2024">2024</h2>
            <div class="news-items">
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">December</span>
                  <span class="news-tag">Conference</span>
                  <span class="news-tag">Talk</span>
                </div>
                <p>I attended AGU and gave an <a href="https://ui.adsabs.harvard.edu/abs/2024AGUFMP23F...04Z/abstract">oral presentation</a>.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">August</span>
                  <span class="news-tag">Publication</span>
                </div>
                <p>My first paper, <strong>Novel Atmospheric Dynamics shape Inner Edge of Habitable Zone around White Dwarfs</strong>, was published in the Astrophysical Journal. <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ad54c1">Read the paper</a>.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">March</span>
                  <span class="news-tag">Talk</span>
                </div>
                <p>I gave a talk at Wuhan University.</p>
              </article>
            </div>
          </section>

          <section class="news-year" aria-labelledby="news-2023">
            <h2 id="news-2023">2023</h2>
            <div class="news-items">
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">December</span>
                  <span class="news-tag">Workshop</span>
                  <span class="news-tag">Poster</span>
                </div>
                <p>I attended the Exoplanet and Planet Formation Workshop and presented a poster.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">June</span>
                  <span class="news-tag">Conference</span>
                  <span class="news-tag">Poster</span>
                </div>
                <p>I attended ExoSLAM and Exoclimes VI in the U.K. and presented a poster on white dwarf habitable zones. <a href="https://exoclimes.org/posters_2.pdf">View abstract</a>.</p>
              </article>
            </div>
          </section>

          <section class="news-year" aria-labelledby="news-2022">
            <h2 id="news-2022">2022</h2>
            <div class="news-items">
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">September</span>
                  <span class="news-tag">Milestone</span>
                </div>
                <p>I started my PhD at Peking University.</p>
              </article>
              <article class="news-item">
                <div class="news-meta">
                  <span class="news-date">June</span>
                  <span class="news-tag">Milestone</span>
                </div>
                <p>I graduated from Wuhan University.</p>
              </article>
            </div>
          </section>

          <p class="news-archive">November 2000: Hello world!</p>
        </div>
    design:
      columns: '1'
---
