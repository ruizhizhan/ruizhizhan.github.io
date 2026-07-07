---
title: Utilizing 3D GCMs to reinterpret JWST observations of 55 Cancri e.
type: page
# Summary for the homepage list view
summary: Investigating atmospheric circulation of hot rocky exoplanets using non-grey GCM simulations with custom correlated-k coefficients.

tags:
  - Exoplanets
  - GCM
  - Radiative Transfer
  - 55 Cancri e

date: "2025-05-20T00:00:00Z"

# 1. Featured setting
featured: true

# 2. Featured Image (Thumbnails)
# Ensure 'exoplanet_distribution.png' is in static/images/
image:
  caption: 'Non-grey General Circulation Model'
  focal_point: Smart
  preview_only: false # Set to true if you don't want the image at the top of this article

# 3. Tool/Resource Buttons (Optional)
links:
  - name: Modeling Pipeline
    url: /research/hot_gcm/
    icon: code-branch
    icon_pack: fas
  - name: ExoMol
    url: https://www.exomol.com/
    icon: database
    icon_pack: fas
  - name: Isca GCM
    url: https://execlim.github.io/Isca/
    icon: code
    icon_pack: fas
toc: false
---

55 Cancri e is a benchmark ultra-short-period rocky planet for testing whether hot lava worlds can retain secondary atmospheres. Its intense irradiation, short orbital period, and existing JWST thermal-emission measurements make it an ideal case study for connecting atmospheric dynamics to observable spectra.

We apply our [non-grey GCM modeling pipeline](/research/hot_gcm/) to reinterpret JWST observations of 55 Cancri e, including the thermal-emission constraints reported by [Hu et al. 2024](https://doi.org/10.1038/s41586-024-07432-x). The goal is to test whether realistic three-dimensional circulation, non-grey radiative transfer, and thin secondary atmospheres can change how we infer atmospheric survival from thermal-emission observations.

Recent observations of 55 Cancri e suggest an atmosphere rich in CO or CO<sub>2</sub>. We perform cloudfree GCM simulations of 55 Cancri e using custom correlated-k coefficients developed from the [ExoMol](https://www.exomol.com/) database. Our best-fit simulations match the JWST spectra well, favoring an atmosphere that is both thick (≥ 10 bar) and CO<sub>2</sub>-rich (> 1% CO<sub>2</sub> volume mixing ratio).

## Interesting Science to Be Continued

Beyond a single planet, this framework connects directly to current observing efforts such as the JWST Rocky Worlds DDT program. Observations can tell us whether a planet has an atmosphere today, while evolution models are needed to understand how that atmosphere formed, changed, or disappeared over time. The next questions are how escape, chemistry, circulation, magma-atmosphere exchange, and interior evolution jointly shape the observable diversity of hot rocky exoplanets.

<div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 3rem;">
  <a href="/research/#hot-extension" style="align-items: center; border: 1px solid currentColor; border-radius: 8px; display: inline-flex; font-weight: 700; gap: 0.45rem; padding: 0.7rem 1rem; text-decoration: none;">← Back to Research</a>
  <a href="/research/hot_gcm/" style="align-items: center; border: 1px solid currentColor; border-radius: 8px; display: inline-flex; font-weight: 700; gap: 0.45rem; padding: 0.7rem 1rem; text-decoration: none;">Modeling Pipeline</a>
</div>
