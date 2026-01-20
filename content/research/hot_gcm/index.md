---
title: Atmospheres of Hot Rocky Planets with Ultra-Short Orbital Period
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
  - name: ExoMol
    url: https://www.exomol.com/
    icon: database
    icon_pack: fas
  - name: Isca GCM
    url: https://execlim.github.io/Isca/
    icon: code
    icon_pack: fas
---

Rocky exoplanets with ultra-short orbital period are ideal targets for observations and offer a unique opportunity to study planets in extremely hot environment. Due to atmospheric escape, these planets are more likely to be airless like Mercury or have a secondary atmosphere (non-hydrogen dominated) like Earth. Characterizing secondary atmospheres of such exoplanets provides crucial insights into atmospheric escape, redox and equilibrium chemistry, and the exchange with the interior.

{{< figure src="/images/exoplanet_distribution.png" caption="Orbital periods and radii of confirmed exoplanets as of May 2025. The planets located in the red box are rocky exoplanets with ultra-short orbital periods. The color of each point represents the equilibrium temperature of the planet, ranging from 500 to 3,000 K." width="95%" >}}

Despite extensive observations, most current interpretations predominantly relied on 1D models with non-self-consistent heat redistribution or oversimplified 3D models with unrealistic radiative transfer. However, few 3D models with realistic radiative transfer have been applied to these hot (non-habitable) rocky exoplanets, mainly due to the incompatibility of standard GCM radiative transfer codes with the extremely high temperatures.

{{< figure src="/images/line_profile.png" caption="Gaussian and Lorentz profile for absorption line broadening calculations. The coefficients of determination &alpha;<sub>G</sub> (half-width at half-maximum) and &alpha;<sub>L</sub> strongly depends on temperature (highlighted in red). More information on [HITRAN](https://hitran.org/docs/definitions-and-units/)." width="95%" >}}

Here we perform non-grey GCM simulations using the custom correlated-k coefficients developed from the [ExoMol](https://www.exomol.com) database. We first use [ExoCross](https://exocross.readthedocs.io/en/latest/) to calculated the absorption cross section from the absorption lines at a wide range of temperatures and pressures. 

Then we develop custom correlated-k coefficients from the absorption cross section (a paper describing the correlated-k method [here](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/90JD01945)) and validate them against line-by-line radiative transfer [PyRADS](https://github.com/danielkoll/PyRADS). We then perform non-grey GCM simulations, [Isca](https://execlim.github.io/Isca/) coupled with [SOCRATES](https://code.metoffice.gov.uk/trac/socrates) for planets including 55 Cancri e.

{{< figure src="/images/pipeline.png" caption="The schematic of the pipeline of this work. The gas absorption in our model includes molecular spectrum (including UV absorption) and collision induced absorption (CIA)." width="95%" >}}

We have some preliminary results for the reinterpretation of the JWST observations ([Hu et al. 2024](https://www.nature.com/articles/s41586-024-07432-x)) of 55 Cancri e. Stay tuned for our upcoming paper.