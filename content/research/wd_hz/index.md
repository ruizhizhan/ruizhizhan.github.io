---
title: Habitable Zone Around "Dead Stars"?
summary: We use the ExoCAM GCM to investigate the inner edge of the habitable zone around white dwarfs, finding a novel "bat rotation" regime.
tags:
  - White Dwarfs
  - Habitable Zone
  - Atmospheric Dynamics
date: "2024-08-20T00:00:00Z"

# Optional: External Link
# 如果你希望点击这个项目卡片直接跳转到 GitHub 或外部网站，而不是进入详情页：
# external_link: https://github.com/ruizhizhan/weather-ai

# 图片设置 (关键)
# 建议在这个文件夹里放一张 featured.jpg
image:
  caption: Bat Rotation Regimes
  focal_point: Smart

links:
  #- name: arXiv
  #  url: https://arxiv.org/abs/2406.03189
  #  icon: arxiv
  #  icon_pack: ai # 需要安装 academicons，如果没有显示图标，可改为 fas fa-file-pdf
  - name: Journal
    url: https://iopscience.iop.org/article/10.3847/1538-4357/ad54c1
    icon: article
    icon_pack: fas
  - name: Follow
    url: https://ruizhizhan.github.io/
    icon: twitter
    icon_pack: fab
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
# Associate this project with Markdown slides.
# Simply enter your slide deck's filename without extension.
# E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
# Otherwise, set `slides = ""`.
slides: ""
---
---

[White dwarfs](https://en.wikipedia.org/wiki/White_dwarf) are compact stars with a size comparable to Earth and a mass comparable to Sun. Planets in the [habitable zone](https://science.nasa.gov/resource/what-is-the-habitable-zone/) (read more about the habitable zone edges [here](https://www.researchgate.net/publication/11809380_Habitable_zones_around_main_sequence_stars)) around white dwarfs have **ultra-short orbital periods** ranging from hours to days. 

Due to the small size, white dwarfs offer a unique opportunity to search nearby stellar systems for signs of life. The habitable zone around white dwarfs, however, is still poorly understood.

{{< figure src="/images/transit_sketch.jpg" caption="A schematic of transit timing variations of a G dwarf, M dwarf and a white dwarf planet system." width="45%" >}}

Here we use the [ExoCAM](https://github.com/storyofthewolf/ExoCAM) Global Climate Model to investigate the inner edge of the habitable zone around white dwarfs. 

Our simulations show habitable planets with ultrashort orbital periods (P < 1 day) enter a <span style="color: #AD4344; font-weight: bold;">“bat rotation” regime</span>, which differs from typical atmospheric circulation regimes around M dwarfs. Bat rotators feature mean equatorial subrotation and a displacement of the surface’s hottest regions from the equator toward the midlatitudes.

{{< figure src="/images/4rotatorTS.png" caption="Surface temperature and zonal mean zonal wind as a function of rotation period. From left to right: bat rotator (P = 0.5 days; this work), compared to a rapid rotator (P = 2 days), Rhines rotator (P = 10 days), and slow rotator (P = 20 days). Dynamical regimes for the slower rotating planets are defined as in [Haqq Misra et al. (2018)](https://iopscience.iop.org/article/10.3847/1538-4357/aa9f1f). In (a), “SP” corresponds to the substellar point. In (b), red vs. blue shading represent eastward vs. westward winds. The simulations assume a 10,000 K white dwarf and 2.12 times Earth’s instellation." width="90%" >}}

The <span style="color: #AD4344; font-weight: bold;">“bat rotation” regime</span> expands the white dwarf habitable zone by ∼50% compared to estimates based on 1D models. 

{{< figure src="/images/RGHL.png" caption="Estimated rotation regimes inside the habitable zone of white dwarfs with different stellar temperatures, as a function of relative stellar flux." width="50%" >}}

The James Webb Space Telescope should be able to quickly characterize bat rotators around nearby white dwarfs thanks to their distinct [JWST](https://www.jwst.nasa.gov/) via [thermal phase curves](https://en.wikipedia.org/wiki/Phase_curve_(astronomy)). 

We also qualitatively explain the onset of bat rotation using shallow water theory. You can access the full paper via the buttons at the top of this page.