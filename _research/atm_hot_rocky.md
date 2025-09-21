---
title: Atmospheres of Hot Rocky Planets with Ultra-Short Orbital Period
---
Rocky exoplanets with ultra-short orbital period are ideal targets for observations and offer a unique opportunity to study planets in extremely hot environment. Due to atmospheric escape, these planets are more likely to be airless like Mercury or have a secondary atmosphere (non-hydrogen dominated) like Earth. Charaterizing secondary atmospheres of such exoplanets provides crucial insights into atmospheric escape, redox and equilibrium chemistry, and the exchange with the interior. 

<div align="center">
<img src="https://ruizhizhan.github.io/images/exoplanet_distribution.png" width="42%"><br>
</div>
<span style="font-weight: light; font-size: 0.8em;">Orbital periods and radii of confirmed exoplanets as of May 2025. The planets located in the red box are rocky exoplanets with ultra-short orbital periods. The color of each point represents the equilibrium temperature of the planet, ranging from 500 to 3,000 K. </span><br>

Despite extensive observations, most current interpretations predominantly relied on 1D models with non-self-consistent heat redistribution or oversimplified 3D models with unrealistic radiative transfer. However, few 3D models with realistic radiative transfer have been applied to these hot (non-habitable) rocky exoplanets, mainly due to the incompatibility of standard GCM radiative transfer codes with the extremely high temperatures. 

<div align="center">
<img src="https://ruizhizhan.github.io/images/line_profile.png" width="60%"><br>
</div>
<span style="font-weight: light; font-size: 0.8em;">Gaussian and Lorentz profile for absorption line broadening calculations.The coefficients of determination &alpha;<sub>G</sub> (half-width at half-maximum) and &alpha;<sub>L</sub> strongly depends on temperature (highlighted in red). More information on <a href="https://hitran.org/docs/definitions-and-units/">HITRAN</a>.</span><br>

Here we perform non-grey GCM simulations using the custom correlated-k coefficients developed from the <a href="www.exomol.com">ExoMol</a> database. We first use [ExoCross](https://exocross.readthedocs.io/en/latest/) to calculated the absorption cross section from the absorption lines at a wide range of temperatures and pressures. Then we develop custom correlated-k coefficients from the absorption cross section (a paper describing the correlated-k method [here](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/90JD01945)) and validate them against line-by-line radiative transfer [PyRADS](https://github.com/danielkoll/PyRADS). We then perform non-grey GCM simulations, <a href="execlim.github.io/Isca/">Isca</a> coupled with <a href="code.metoffice.gov.uk/trac/socrates">SOCRATES</a> for planets including 55 Cancri e.<br>

<div align="center">
<img src="https://ruizhizhan.github.io/images/pipeline.png" width="85%"><br>
</div>
<font color=grey size=2em>The schematic of the pipeline of this work. The gas absorption in our model includes molecular spectrum (including UV absorption) and collision induced absorption (CIA). </font>

We have some preliminary results for the reinterpretation of the JWST observations ([Hu et al. 2024](https://www.nature.com/articles/s41586-024-07432-x)) of 55 Cancri e. Stay tuned for our upcoming paper.
