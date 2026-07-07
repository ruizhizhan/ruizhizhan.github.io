---
title: Utilizing 3D GCMs to reinterpret JWST observations of 55 Cancri e.
type: page
# Summary for the homepage list view
summary: Investigating atmospheric circulation of hot rocky exoplanets using non-grey GCM simulations with custom correlated-k coefficients.

tags:
  - Exoplanets
  - GCM
  - 55 Cancri e
  - JWST

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
  - name: arXiv
    url: https://arxiv.org/abs/2606.12116
  - name: ExoMol
    url: https://www.exomol.com/
  - name: Code
    url: https://execlim.github.io/Isca/
  - name: Isca GCM
    url: https://execlim.github.io/Isca/
  - name: SOCRATES
    url: https://code.metoffice.gov.uk/trac/socrates
toc: false
---

Recent observations of 55 Cancri e suggest an atmosphere rich in CO or CO<sub>2</sub> ([Hu et al. 2024](https://doi.org/10.1038/s41586-024-07432-x)); other observations indicate the planet’s eclipse depth is highly variable (e.g. [Patel et al. 2024](https://arxiv.org/abs/2407.12898)).

{{< figure src="/images/JWST_spec.png" caption="Thermal emission spectrum of 55 Cancri e ([Hu et al. 2024](https://doi.org/10.1038/s41586-024-07432-x)). The best-fit models are a blackbody or a CO<sub>2</sub>&ndash;N<sub>2</sub>, CO<sub>2</sub>&ndash;CO, or CO-only atmosphere with varied composition and pressure&ndash;temperature profiles." width="95%" >}}

So far, these observations have only been interpreted using 1D models without self-consistent heat redistribution. We apply [GCM](/research/hot_gcm/) simulations with custom non-grey radiative transfer to reinterpret JWST observations of 55 Cancri e.

{{< figure src="/images/GCMfit.png" caption="GCM simulations compared with the JWST thermal-emission spectrum of 55 Cancri e." width="95%" >}}

Our best-fit simulations match the JWST spectra well, favoring an atmosphere that is both thick (≥ 10 bar) and CO<sub>2</sub>-rich (> 1% CO<sub>2</sub> volume mixing ratio), while ruling out thin (< 10 bar) and pure-CO/CO<sub>2</sub>-poor atmospheres, which were previously proposed based on 1D models ([Hu et al. 2024](https://doi.org/10.1038/s41586-024-07432-x); [Zilinskas et al. 2025](https://doi.org/10.1051/0004-6361/202554062)).

<video controls muted playsinline style="display: block; margin: 2rem auto 0; max-width: 95%; width: 100%;">
  <source src="/videos/gcm_simulations.mp4" type="video/mp4">
</video>

We also find that large-scale atmospheric dynamics, i.e., weather, is insufficient to explain the observed variability. A thick, CO<sub>2</sub>-rich atmosphere implies that 55 Cancri e likely formed with significantly more volatiles than Earth and Venus. In addition, a thick atmosphere makes it unlikely that the planet’s variability is caused by transient outgassing ([Heng 2023](https://arxiv.org/abs/2308.06066)), favoring other variability mechanisms such as clouds. Our work provides model constraints for upcoming JWST observations of 55 Cancri e and highlights the importance of interpreting thermal-emission observations with self-consistent 3D models.


<div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 3rem;">
  <a href="/research/#hot-extension" style="align-items: center; border: 1px solid currentColor; border-radius: 8px; display: inline-flex; font-weight: 700; gap: 0.45rem; padding: 0.7rem 1rem; text-decoration: none;">← Back to Research</a>
  <a href="/research/hot_gcm/" style="align-items: center; border: 1px solid currentColor; border-radius: 8px; display: inline-flex; font-weight: 700; gap: 0.45rem; padding: 0.7rem 1rem; text-decoration: none;">Modeling Pipeline</a>
</div>
