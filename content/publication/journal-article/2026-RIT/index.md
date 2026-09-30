---
title: "Relational Incident Transformer: Object-Level Traffic Incident Detection and Anticipation on Frozen Foundation Models"
authors:
- admin
- Q. M. Jonathan Wu
date: "2026-09-30T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-09-30T00:00:00Z"

# Publication type (CSL).
publication_types: ["article-journal"]

publication: "Under review"
publication_short: ""

abstract: 'Frame-level detection of traffic anomalies in dashcam video is now led by video foundation models fine-tuned end to end, but a frame score cannot say which road agent is involved, where it is, or how early it could have been flagged. This paper introduces INC (incident detection and anticipation), an online, object-level pipeline built on frozen foundation models: the released SAM 3.1 segmentation tracker grounds every agent, frozen DINOv3 and V-JEPA 2 encoders describe each agent and the scene, and the Relational Incident Transformer (RIT) — a small factorized transformer of width 128 whose agent–agent attention is biased by pairwise image-plane geometry — scores every tracked agent at every frame; it is the only trained component (about 1.8 M parameters). Two design contributions carry the object pathway: a mask-pooled video-foundation-model node token, which lifts V-JEPA 2''s clip representation onto each agent through its segmentation mask (+9.91 object AP), and a fixed-rule fusion with a released frame-level model that keeps its frame AUC within a point (89.3 / 89.0 against 90.0 on DoTA) while adding per-object scores (object AP 50.6), localization (STAUC 57.8 / 60.5) and detection of every positive video. Under a pre-registered, single-variable protocol with paired per-video bootstrap intervals, we then ask what explicit agent–agent attention contributes: +8.97 object AP on context-free per-object features, absorbed (−0.49 [−1.39, +0.41]) once the node carries the mask-pooled video token, with two single-variable controls showing that only a token carrying both the neighbours and their motion makes the block redundant. The block''s frame-level contribution transfers to DADA-2000 without retraining (+0.91 [+0.31, +1.49]), and a new participant-anticipation reading shows the video token improving pre-start participant ranking by +5.98 AP. Every number of the paper is reproducible from ledgers of record, and nothing was selected on the test split.'

summary: 'INC scores every tracked road agent at every frame of a dashcam video: a frame score says that something is wrong; INC says who. Project page with the results; the code is released there upon acceptance.'

tags:
 - computer vision
 - traffic anomaly detection
 - accident anticipation
 - dashcam video
 - video foundation models
 - Segment Anything Model
featured: true

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: '/RIT/'
url_slides: ''
url_source: ''
url_video: ''

# Featured image: featured.png in this folder (the paper's frame-level versus object-level figure).
image:
  caption: ''
  focal_point: "center"
  preview_only: false

slides: ""
show_related: true
---
