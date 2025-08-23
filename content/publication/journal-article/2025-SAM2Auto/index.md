---
title: "SAM2Auto: Auto Annotation Using FLASH"
authors:
- admin
- Q. M. Jonathan Wu
date: "2025-06-09T00:00:00Z"
# doi: "arXiv:2506.07850"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-09T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
# publication: "*International Journal of Disaster Risk Reduction, 119*"
publication: "arXiv preprint"
publication_short: ""

abstract: 'Vision-Language Models (VLMs) lag behind Large Language Models due to the scarcity of annotated datasets, as creating paired visual-textual annotations is labor-intensive and expensive. To address this bottleneck, we introduce SAM2Auto, the first fully automated annotation pipeline for video datasets requiring no human intervention or dataset-specific training. Our approach consists of two key components: SMART-OD, a robust object detection system that combines automatic mask generation with open-world object detection capabilities, and FLASH (Frame-Level Annotation and Segmentation Handler), a multi-object real-time video instance segmentation (VIS) that maintains consistent object identification across video frames even with intermittent detection gaps. Unlike existing open-world detection methods that require frame-specific hyperparameter tuning and suffer from numerous false positives, our system employs statistical approaches to minimize detection errors while ensuring consistent object tracking throughout entire video sequences. Extensive experimental validation demonstrates that SAM2Auto achieves comparable accuracy to manual annotation while dramatically reducing annotation time and eliminating labor costs. The system successfully handles diverse datasets without requiring retraining or extensive parameter adjustments, making it a practical solution for large-scale dataset creation. Our work establishes a new baseline for automated video annotation and provides a pathway for accelerating VLM development by addressing the fundamental dataset bottleneck that has constrained progress in vision-language understanding.'

# Summary. An optional shortened abstract.
summary: 'SAM2Auto is the first fully automated video annotation pipeline that creates visual-textual datasets without human intervention. It combines robust object detection (SMART-OD) with consistent video tracking (FLASH) to generate annotations as accurately as manual methods but faster and cheaper, addressing the dataset scarcity that limits Vision-Language Model development.'

tags:
 - computer vision
 - video annotation
 - vision-language models
 - object detection
 - video instance segmentation
 - Auto Annotation
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/pdf/2506.07850'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: "center"
  # focal_point: "Smart"
  preview_only: false
  
# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects: ['global-earthquake-model']

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Other options
show_related: true

---
<!-- ### Example figure
![An example of detailed annotation in an image](publication/journal-article/2025_SAM2Auto_Fig1.png "") -->