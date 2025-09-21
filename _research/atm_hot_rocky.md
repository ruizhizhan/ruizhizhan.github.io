---
title: Atmospheres of Hot Rocky Planets with Ultra-Short Orbital Period
---
Rocky exoplanets with ultra-short orbital period are ideal targets for observations and offer a unique opportunity to study planets in extremely hot environment. Due to atmospheric escape, these planets are more likely to be airless like Mercury or have a secondary atmosphere (non-hydrogen dominated) like Earth. Charaterizing secondary atmospheres of such exoplanets provides crucial insights into atmospheric escape, redox and equilibrium chemistry, and the exchange with the interior. 

<div align="center">
<img src="https://ruizhizhan.github.io/images/exoplanet_distribution.png" width="45%"><br>
</div>
<span style="font-weight: light; font-size: 0.8em;">Orbital periods and radii of confirmed exoplanets as of May 2025. The planets located in the red box are rocky exoplanets with ultra-short orbital periods. The color of each point represents the equilibrium temperature of the planet, ranging from 500 to 3,000 K. </span><br>

Despite extensive observations, most current interpretations predominantly relied on 1D models with non-self-consistent heat redistribution or oversimplified 3D models with unrealistic radiative transfer. However, few 3D models with realistic radiative transfer have been applied to these hot (non-habitable) rocky exoplanets, mainly due to the incompatibility of standard GCM radiative transfer codes with the extremely high temperatures. 

<div align="center">
<img src="https://ruizhizhan.github.io/images/line_profile.png" width="80%"><br>
</div>
<span style="font-weight: light; font-size: 0.8em;">Gaussian and Lorentz profile. $\alpha_G$ half-maximum 
(Read more in <a href="https://hitran.org/docs/definitions-and-units/">HITRAN</a>)</span><br>

Here we perform non-grey GCM simulations using the custom correlated-k coefficients developed from the ExoMol database.

calculate the absorption cross section from <a href="www.exomol.com">ExoMol</a> line lists. We develop custom correlated-k coefficients from the absorption cross section and validate them against line-by-line radiative transfer. 
<div align="center">
<img src="https://ruizhizhan.github.io/images/cross_sec_co2.png" width="75%"><br>
</div>
<font color=grey size=2em>Absorption cross section of CO<sub>2</sub> at Earth Temperature (300 K) and typical temperature on substellar point of 55 Cnc e (3500K) assuming 1 bar pressure. The two lines are clearly distinguished. So the standard GCM radiative transfer for Earth cannot be applied to 55 cnc e. </font><br><br><br>
We then perform GCM simulations with non-grey radiative transfer, <a href="execlim.github.io/Isca/">Isca</a> coupled with <a href="code.metoffice.gov.uk/trac/socrates">SOCRATES</a>, to model the atmospheres on 55 Cancri e.<br>
<div align="center">
<img src="https://ruizhizhan.github.io/images/pipeline.png" width="95%"><br>
</div>
<font color=grey size=2em>The gas absorption in our model includes molecular spectrum (including UV absorption) and collision induced absorption (CIA). </font><br><br><br>
Our simulations suggest the secondary atmosphere on 55 Cancri e should be <b>thick and carbon dioxide rich</b>.<br>
Observations from Spitzer and JWST reported significant time variability in the secondary eclipse depth of 55 Cancri e. However, our result suggests that clearsky atmosphere variability is much weaker than observed.
<br>
</li>
