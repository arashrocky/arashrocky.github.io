---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  # - block: about.avatar
  - block: about.biography
  # - block: resume-biography
  # - block: hero
    id: about
    content:
      title: Arash Rocky
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: markdown
  #   id: about
  #   content:
  #     title: Arash Rocky
  #     subtitle: PhD Candidate
  #     text: |
  #       {{< figure src="authors/admin/avatar.jpg" class="avatar" >}}
        
  #       I'm currently researching household displacement due to disasters at University College London (UCL). My background is in structural engineering and I have over nine years of experience quantifying disaster risks. At the Global Earthquake Model (GEM) Foundation, I conducted earthquake risk assessment at the national and regional scales. At Arup, I was focused on the campus and building-specific scales, with an emphasis on modeling recovery after disasters.

  #       <div class="container">
  #         <div class="row justify-content-between">
  #           <div class="col">
  #             <h3>Experience</h3>
  #               <ul class="fa-ul">
  #               <li><span class="fa-li"><i class="fas fa-briefcase"></i></span>Global Earthquake Model, 2019-2023</li>
  #               <li><span class="portrait-title"><h3>Pavia, Italy</h3></span></li>
  #               <li><span class="fa-li"><i class="fas fa-briefcase"></i></span>Arup, Risk and Resilience, 2014-2019</li>
  #               <li><span class="portrait-title"><h3>San Francisco, CA, USA</h3></span></li>
  #               </ul>
  #           </div>
  #           <div class="col">
  #             <h3>Education</h3>
  #               <ul class="fa-ul">
  #               <li><span class="fa-li"><i class="fas fa-graduation-cap"></i></span>MSc Structural Engineering, 2015</li>
  #               <li><span class="portrait-title"><h3>Stanford University</h3></span></li>
  #               <li><span class="fa-li"><i class="fas fa-graduation-cap"></i></span>BSc Civil Engineering, 2013</li>
  #               <li><span class="portrait-title"><h3>University of California, Berkeley</h3></span></li>
  #               </ul>
  #           </div>
  #         </div>
  #       </div>
        
  #       <!-- Social Links -->
  #       <p>
  #       <a href="mailto:your-email@example.com"><i class="fas fa-envelope"></i></a>
  #       <a href="https://linkedin.com/in/yourprofile"><i class="fab fa-linkedin"></i></a>
  #       <a href="https://github.com/yourprofile"><i class="fab fa-github"></i></a>
  #       </p>
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: projects
  #   content:
  #     title: Research topics
  #     filters:
  #       folders:
  #         - project
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '2'
  #     view: card
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false
  # - block: collection
  #   id: featured-publications
  #   content:
  #     title: Featured publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 3
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     columns: '2'
  - block: collection
    id: publications
    content:
      title: Selected Publications
      subtitle: 'For a complete and up-to-date list of publications visit my [Google Scholar](https://scholar.google.com/citations?user=g6TZT0kAAAAJ&hl=en)'
      count: 0  # This will show ALL publications
      # text: |-
      #   {{% callout note %}}
      #   Quickly discover relevant content by [filtering publications](./publication/).
      #   {{% /callout %}}
      # text: |-
      #   For a complete and up-to-date list of publications visit my [Google Scholar](https://scholar.google.com/citations?user=g6TZT0kAAAAJ&hl=en)
      
      filters:
        folders:
          - publication
        # exclude_featured: true
    design:
      columns: '2'
      # view: citation
      # view: card        # Card view with images
      view: compact       # Condensed list format
      # view: masonry       # Pinterest-style layout
      # view: showcase      # Large featured images
      flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="events" >}}
  #   design:
  #     columns: '2'
---
