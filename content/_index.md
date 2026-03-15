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

  - block: collection
    id: projects
    content:
      title: '🪐 My Research'
      text: |-
        My Ph.D project focuses on atmosphere modeling of rocky exoplanets with ultra-short orbital periods, utilizing 3D GCMs (Global Climate Model / General Circulation Model).
      filters:
        folders:
          - research
        featured_only: false
      
    design:
      columns: '1'
      view: card
    
       

        
#I simulate the extreme environments of these worlds to investigate their atmospheric dynamics. My work primarily aims to interpret these simulations in the context of real-world data, comparing theoretical models with both existing datasets and future observations to better understand planetary diversity."

  - block: markdown
    id: papers
    content:
      title: Publications
      text: |
        1. **Zhan R.**, D.D.B.Koll , F. Ding (2024), Novel Atmospheric Dynamics shape Inner Edge of Habitable Zone around White Dwarfs, _The Astrophysical Journal_, 971, 125. [\[journal\]](https://iopscience.iop.org/article/10.3847/1538-4357/ad54c1) [\[arxiv\]](https://arxiv.org/abs/2406.03189)
    design:
      columns: '1'

#  - block: collection
#    content:
#      title: Recent Publications
#      text: ''
#      filters:
#        folders:
#          - publications
#        exclude_featured: false
#    design:
#      view: citation

  - block: markdown
    id: news
    content:
      title: News and Updates
      text: |
        - *April 2025*: I attended EGU and gave an [oral presentation](https://doi.org/10.5194/egusphere-egu25-4751) titled "Modeling the Atmosphere of 55 Cancri e with a Non-grey General Circulation Model".
        
        - *December 2024*: I attended AGU and gave an [oral presentation](https://ui.adsabs.harvard.edu/abs/2024AGUFMP23F...04Z/abstract).
        - *August 2024*: My very first paper, **Novel Atmospheric Dynamics shape Inner Edge of Habitable Zone around White Dwarfs** was published in the Astrophysical Journal. In [this work](https://iopscience.iop.org/article/10.3847/1538-4357/ad54c1), we use the ExoCAM global climate model to investigate the inner edge of the habitable zone around white dwarfs. We find tidally locked planets with ultra-short orbital periods (~ 1 day) around white dwarfs exhibit novel atmospheric dynamics, “bat rotation”, which differs from typical atmospheric circulation regimes around M dwarfs. The “bat rotation” regime expands the white dwarf habitable zone by ∼50% compared to estimates based on 1D models. 
        
        - *March 2024*: I gave a talk at Wuhan University.
        - *December 2023*: I attended the Exoplanet and Planet Formation Workshop and presented a poster.
        - *June 2023*: I attended ExoSLAM and Exoclimes VI in U.K. and presented a poster "Novel Atmospheric Dynamics shape Inner Edge of Habitable Zone around White Dwarfs" (abstract [here](https://exoclimes.org/posters_2.pdf)).
        - *September 2022*：I started my PhD at Peking University.
        - *June 2022*：I graduated from Wuhan University.
        - *November 2000*: Hello world!
    design:
      columns: '1'

  - block: collection
    id: courses
    content:
      title: Class Notes
      filters:
        tag: Course
        kinds:
          - section
    design:
      view: masonry
      columns: 3

  - block: collection
    id: life
    content:
      title: After School Life
      text: My hobbies and interests.
      filters:
        folders:
          - life
    design:
      view: masonry
      columns: 2
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
