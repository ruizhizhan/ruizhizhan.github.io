---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: |
        Hi there! I am a 4th year Ph.D student at [Peking University](https://www.pku.edu.cn/) under the supervision of [Prof. Daniel Koll](https://danielkoll.github.io/). I was an undergraduate student of physics and astronomy at [Wuhan University](https://www.whu.edu.cn/) (BSc 2022). 

        I have been longing for the universe and space since I was a child. This passion led me to choose physics as my major in college, where I was fortunate to join the Qibin (启斌) Astronomy Program and gained some hands-on experience in modeling strong gravitational lensing. Later by chance, I got to know and fell in love with the field of [exoplanets](https://en.wikipedia.org/wiki/Exoplanet), the worlds beyond the Solar System. 

        Now I work on the **atmospheres of exoplanets**, mainly the small terrestrial ones. As of February 2026, there are 6,100 confirmed exoplanets, yet characterizing their atmospheres remains a challenge in modern astronomy. Nevertheless, atmospheric studies, including the chemistry and dynamics, are of central importance. Atmospheres provide crucial insights into how exoplanets form and evolve over time, which in turn help better understand Solar System planets. Atmospheres of exoplanets are diverse and make some of them potentially habitable for life.
      button:
        text: Download CV
        url: uploads/cv_05_2025.pdf
      headings:
        about: About Me
        education: '' # read from me.yaml
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true

      # Name heading sizing to accommodate long or short names
      name:
        size: md # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
      #banner:
      #  filename: "background.jpg"

---

