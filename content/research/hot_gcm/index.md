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

[Back to Research](/research/)

Rocky exoplanets with ultra-short orbital periods are ideal targets for observations and offer a unique opportunity to study planets in extremely hot environments. Due to atmospheric escape, these planets are more likely to be airless like Mercury or to have a secondary atmosphere (non-hydrogen dominated) like Earth. Characterizing secondary atmospheres of such exoplanets provides crucial insights into atmospheric escape, redox and equilibrium chemistry, and exchange with the interior.

{{< figure src="/images/exoplanet_distribution.png" caption="Orbital periods and radii of confirmed exoplanets as of May 2025. The planets located in the red box are rocky exoplanets with ultra-short orbital periods. The color of each point represents the equilibrium temperature of the planet, ranging from 500 to 3,000 K." width="95%" >}}

Despite extensive observations, most current interpretations predominantly relied on 1D models with non-self-consistent heat redistribution or oversimplified 3D models with unrealistic radiative transfer. However, few 3D models with realistic radiative transfer have been applied to these hot (non-habitable) rocky exoplanets, mainly due to the incompatibility of standard GCM radiative transfer codes with the extremely high temperatures.

{{< figure src="/images/line_profile.png" caption="Gaussian and Lorentz profiles for absorption line broadening calculations. The coefficients of determination &alpha;<sub>G</sub> (half-width at half-maximum) and &alpha;<sub>L</sub> strongly depend on temperature (highlighted in red). More information on [HITRAN](https://hitran.org/docs/definitions-and-units/)." width="95%" >}}

## Modeling Pipeline

### Realistic radiation for extreme rocky atmospheres.

To model hot rocky planets self-consistently, we build a non-grey GCM framework that can operate at temperatures far above those usually assumed in terrestrial climate models. The pipeline builds opacity tables from high-temperature molecular line lists, validates correlated-k coefficients against line-by-line calculations, and couples the results to three-dimensional general circulation models.

First, we use high-temperature molecular line lists from the [ExoMol](https://www.exomol.com) database. With [ExoCross](https://exocross.readthedocs.io/en/latest/), we calculate absorption cross sections over the pressure-temperature range relevant for hot secondary atmospheres, including conditions expected on lava worlds.

Second, we convert these cross sections into custom correlated-k coefficients. The correlated-k method compresses line-by-line opacity information into a form that can be used efficiently inside a GCM while retaining realistic spectral behavior. We validate the resulting coefficients against line-by-line radiative-transfer calculations with [PyRADS](https://github.com/danielkoll/PyRADS).

Finally, we run three-dimensional simulations with [Isca](https://execlim.github.io/Isca/) coupled to [SOCRATES](https://code.metoffice.gov.uk/trac/socrates). This setup allows us to predict circulation, day-night heat transport, thermal emission, and phase-curve behavior for hot rocky planets with thin secondary atmospheres.

{{< figure src="/images/pipeline.png" caption="The schematic of the pipeline of this work. The gas absorption in our model includes molecular spectrum (including UV absorption) and collision induced absorption (CIA)." width="95%" >}}

## Case Study: Utilizing 3D GCMs to Reinterpret JWST Observations of 55 Cancri e

We apply this framework to reinterpret JWST observations of 55 Cancri e, including the thermal-emission constraints reported by [Hu et al. 2024](https://www.nature.com/articles/s41586-024-07432-x). The goal is to test whether realistic three-dimensional circulation, non-grey radiative transfer, and thin secondary atmospheres can change how we infer atmospheric survival from thermal-emission observations.

## Interesting Science to Be Continued

Beyond a single planet, this framework connects directly to current observing efforts such as the JWST Rocky Worlds DDT program. Observations can tell us whether a planet has an atmosphere today, while evolution models are needed to understand how that atmosphere formed, changed, or disappeared over time. The next questions are how escape, chemistry, circulation, magma-atmosphere exchange, and interior evolution jointly shape the observable diversity of hot rocky exoplanets.
