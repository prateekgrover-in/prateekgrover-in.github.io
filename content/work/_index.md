---
title: work
---
<script>if(localStorage.getItem('site-dark-mode')==='1')document.body.classList.add('work-dark');</script>
<style>
  /* ── Section nav ── */
.section-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  margin: 0 -1em 0;
  padding: 0 1em;
}
.section-nav a {
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #999;
  text-decoration: none;
  padding: 0.65rem 1rem;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}
.section-nav a:hover { color: #232323; }
.section-nav a.active { color: #232323; border-bottom-color: #232323; }


/* Tag filter bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0 2rem 0;
}
.filter-btn {
  padding: 0.3rem 0.85rem;
  border: 1px solid #232323;
  border-radius: 3px;
  background: transparent;
  font-size: 0.82em;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  color: #232323;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.filter-btn:hover, .filter-btn.active {
  background: #232323;
  color: #fff;
}

/* ── Section wrapper ── */
.work-section { padding: 2.2rem 0 0.5rem; scroll-margin-top: 44px; }
.work-section-title {
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #bbb;
  margin: 0 0 1.2rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #ebebeb;
}

/* ── Education cards ── */
.edu-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 1.1rem; 
  }
@media (max-width: 700px) { 
  .edu-grid { grid-template-columns: 1fr; } 
}

.edu-card {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 1rem 1.1rem;
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  background: #fff;
  transition: box-shadow 0.15s, border-color 0.15s;
}
.edu-card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.09);
  border-color: #aaa;
}
.edu-card-logo { flex: 0 0 40px; width: 40px; height: 40px; object-fit: contain; object-position: center; }
.edu-card-body { flex: 1; min-width: 0; }
.edu-card-degree { font-weight: 600; font-size: 0.87em; line-height: 1.35; color: #222; }
.edu-card-uni { font-size: 0.8em; color: #555; margin-top: 0.15rem; }
.edu-card-date { font-size: 0.75em; color: #999; font-style: italic; margin-top: 0.12rem; }


/* Experience cards grid */
.exp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 0.5rem;
}
@media (max-width: 700px) {
  .exp-grid { grid-template-columns: 1fr; }
}

.exp-card {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1.25rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: box-shadow 0.15s;
  text-decoration: none;
  color: inherit;
  background: #fff;
}
.exp-card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.09);
  border-color: #aaa;
}
.exp-card-logo {
  height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  object-position: left;
  margin-bottom: 0.2rem;
}
.exp-card-role {
  font-weight: 600;
  font-size: 0.95em;
  line-height: 1.3;
}
.exp-card-org {
  font-size: 0.85em;
  color: #555;
}
.exp-card-date {
  font-size: 0.8em;
  color: #888;
  font-style: italic;
}
.exp-card-desc {
  font-size: 0.85em;
  color: #444;
  line-height: 1.5;
  flex: 1;
}
.exp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.3rem;
}
.exp-tag {
  font-size: 0.72em;
  padding: 0.15rem 0.5rem;
  border-radius: 2px;
  background: #f3f3f3;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.exp-card-more {
  font-size: 0.8em;
  color: #7e7e7e;
  font-style: italic;
  margin-top: 0.2rem;
}

/* Section headings */
.section-label {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  margin: 2.5rem 0 1rem 0;
  border-bottom: 1px dashed #e0e0e0;
  padding-bottom: 0.4rem;
}

/* Profile blurb */
.work-blurb {
  font-size: 0.97em;
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 0.5rem;
}
.work-contact {
  font-size: 0.85em;
  color: #555;
  margin-top: 0.5rem;
}

/* ── Projects cards ── */
.proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
@media (max-width: 700px) { .proj-grid { grid-template-columns: 1fr; } }
.proj-card {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 1.1rem 1.15rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  background: #fff;
  transition: box-shadow 0.15s, border-color 0.15s;
}
.proj-card:hover { box-shadow: 0 2px 14px rgba(0,0,0,0.07); border-color: #bbb; }
.proj-card-title { font-weight: 600; font-size: 0.88em; color: #222; line-height: 1.3; }
.proj-card-context { font-size: 0.77em; color: #888; font-style: italic; }
.proj-card-desc { font-size: 0.81em; color: #444; line-height: 1.55; flex: 1; }
.proj-card-tags { display: flex; flex-wrap: wrap; gap: 0.22rem; margin-top: 0.2rem; }
.proj-tag { font-size: 0.69em; padding: 0.1rem 0.42rem; border-radius: 2px; background: #f4f4f4; color: #666; text-transform: uppercase; letter-spacing: 0.03em; }
.proj-placeholder {
  font-size: 0.83em; color: #ccc; font-style: italic;
  padding: 2.5rem 1rem; text-align: center;
  border: 1px dashed #e8e8e8; border-radius: 4px;
  margin-bottom: 2rem;
}
/* ── Dark mode ── */
body.work-dark{background:#111!important;color:#d0d0d0!important;}
body.work-dark main,body.work-dark .single main,body.work-dark .article-list{background:#111!important;box-shadow:none!important;}
body.work-dark .menu{background:#111!important;box-shadow:none!important;}
body.work-dark footer,body.work-dark .footer{background:#111!important;}
body.work-dark footer *,body.work-dark .footer *{color:#666!important;background:#111!important;}
body.work-dark a{color:inherit!important;}
body.work-dark .work-blurb a,body.work-dark .work-contact a{color:#94a3b8!important;}
body.work-dark .section-nav{background:#1a1a1a!important;border-bottom-color:#333!important;}
body.work-dark .section-nav a{color:#888!important;}
body.work-dark .section-nav a:hover,body.work-dark .section-nav a.active{color:#d0d0d0!important;border-bottom-color:#d0d0d0!important;}
body.work-dark .work-section-title{color:#555!important;border-bottom-color:#333!important;}
body.work-dark .edu-card{background:#1a1a1a!important;border-color:#333!important;}
body.work-dark .edu-card-degree{color:#d0d0d0!important;}
body.work-dark .edu-card-uni{color:#999!important;}
body.work-dark .edu-card-date{color:#666!important;}
body.work-dark .exp-card{background:#1a1a1a!important;border-color:#333!important;color:#d0d0d0!important;}
body.work-dark .exp-card-org{color:#999!important;}
body.work-dark .exp-card-date{color:#666!important;}
body.work-dark .exp-card-desc{color:#aaa!important;}
body.work-dark .exp-tag{background:#2a2a2a!important;color:#888!important;}
body.work-dark .exp-card-more{color:#666!important;}
body.work-dark .filter-btn{border-color:#555!important;color:#aaa!important;background:transparent!important;}
body.work-dark .filter-btn:hover,body.work-dark .filter-btn.active{background:#555!important;color:#fff!important;}
body.work-dark .proj-card{background:#1a1a1a!important;border-color:#333!important;}
body.work-dark .proj-card-title{color:#d0d0d0!important;}
body.work-dark .proj-card-desc{color:#aaa!important;}
body.work-dark .proj-tag{background:#2a2a2a!important;color:#888!important;}
body.work-dark .proj-placeholder{color:#555!important;border-color:#333!important;}
body.work-dark .work-contact{color:#777!important;}
body.work-dark h1,body.work-dark h2,body.work-dark h3{color:#e0e0e0!important;}
#work-page-toggle{position:fixed;bottom:1.5rem;right:1.5rem;z-index:1000;padding:0.35rem 0.8rem;font-size:0.78em;font-family:inherit;border-radius:4px;cursor:pointer;letter-spacing:0.04em;border:1px solid rgba(0,0,0,0.18);background:rgba(255,255,255,0.9);color:#444;box-shadow:0 2px 8px rgba(0,0,0,0.12);backdrop-filter:blur(6px);transition:background 0.2s,color 0.2s,border-color 0.2s;}
body.work-dark #work-page-toggle{background:rgba(30,30,30,0.92)!important;color:#ccc!important;border-color:rgba(255,255,255,0.15)!important;}
</style>

Hi, I'm Prateek Grover.

<div class="quote-right" style="text-align: center; margin-left: -3.5em;margin-right: -4.5em">
<img src="images/short_portfolio.png" alt="Avatar" style='max-width: 50%;height: auto;'>
<figcaption style='text-align: center;'>he/him</figcaption>
</div>

<div class="work-blurb">

I recently completed my Master's in Computer Science at KU Leuven.

I work on computer vision: segmentation, tracking, and multimodal sensing — across research labs where I've run the experiments as well as built the models. 

I also work on the engineering around them: training pipelines, cloud and production infrastructure, and interfaces built for people who don't write code.
<br>
</div>

<div class="work-contact">
prateek.grover.in[at]gmail[dot]com &nbsp;·&nbsp; <a href="https://www.linkedin.com/in/prateekgrover-in/">LinkedIn</a> &nbsp;·&nbsp; <a href="https://github.com/prateekgrover-in">GitHub</a>&nbsp·&nbsp; <a href="https://scholar.google.com/citations?user=0JYhJ54AAAAJ&hl=en">Google Scholar</a>
</div>
<!-- <br> -->
<!-- <nav class="section-nav" id="sectionNav">
  <a href="#education" class="active">Education</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
</nav> -->

<!-- ══ EDUCATION ══ -->
<div class="work-section" id="education">
  <div class="work-section-title">Education</div>
  <div class="edu-grid">
    <a class="edu-card" href="/work/kul/" style="text-decoration:none;color:inherit;">
      <img class="edu-card-logo" src="images/kul.png" alt="KU Leuven">
      <div class="edu-card-body">
        <div class="edu-card-degree">Master's degree<br><span style="font-weight:400;color:#777;font-size:0.95em;">Computer Science</span></div>
        <div class="edu-card-uni">Katholieke Universiteit Leuven</div>
        <div class="edu-card-date">Sep 2023 – Jul 2026 · Leuven, Belgium</div>
      </div>
    </a>
    <a class="edu-card" href="/work/bits/" style="text-decoration:none;color:inherit;">
      <img class="edu-card-logo" src="images/bits.png" alt="BITS Pilani">
      <div class="edu-card-body">
        <div class="edu-card-degree">Bachelor's degree<br><span style="font-weight:400;color:#777;font-size:0.95em;">Electrical &amp; Electronics Engineering</span></div>
        <div class="edu-card-uni">Birla Institute of Technology and Science, Pilani</div>
        <div class="edu-card-date">Aug 2018 – May 2022 · Rajasthan, India</div>
      </div>
    </a>
  </div>
</div>

<!-- ══ EXPERIENCE ══ -->
<div class="work-section" id="experience">
  <div class="work-section-title">Experience</div>

  <div class="filter-bar" id="filterBar">
    <button class="filter-btn active" data-tag="all">All</button>
    <button class="filter-btn" data-tag="research">Research</button>
    <button class="filter-btn" data-tag="industry">Industry</button>
    <button class="filter-btn" data-tag="ml-cv">ML / AI</button>
    <button class="filter-btn" data-tag="backend">Software</button>
    <button class="filter-btn" data-tag="cloud-devops">Cloud</button>
  </div>

  <div class="exp-grid" id="expGrid">
    <a class="exp-card" href="/work/atlas-copco/" data-tags="industry cloud-devops backend">
      <img class="exp-card-logo" src="images/atlas_copco.png" data-light="images/atlas_copco.png" data-dark="images/atlas_copco_dark.png" alt="Atlas Copco">
      <div class="exp-card-role">Platform &amp; DevOps Engineer</div>
      <div class="exp-card-org">Atlas Copco Group</div>
      <div class="exp-card-date">Oct 2025 – Present · Antwerp, Belgium</div>
      <div class="exp-card-desc">Built observability for a distributed industrial IoT platform (dashboards, alerting, cross-tenant metrics) and set up Kubernetes clusters with GitOps delivery now running databases and services in development. All managed as infrastructure as code.</div>
      <div class="exp-card-tags">
        <span class="exp-tag">Industry</span><span class="exp-tag">Software</span><span class="exp-tag">Cloud</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
    <a class="exp-card" href="/work/imec/" data-tags="research ml-cv backend">
      <img class="exp-card-logo" src="images/imec_logo.png" data-light="images/imec_logo.png" data-dark="images/imec_logo_dark.png" alt="imec">
      <div class="exp-card-role">Machine Learning Research Intern</div>
      <div class="exp-card-org">Life Sciences Dept., imec</div>
      <div class="exp-card-date">Oct 2024 – Jun 2025 · Leuven, Belgium</div>
      <div class="exp-card-desc">Built a platform letting biologists run and fine-tune segmentation models on their own data without writing code. Ran the wet-lab experiments behind it, producing a novel dataset pairing fluorescence microscopy with impedance recordings.</div>
      <div class="exp-card-tags">
        <span class="exp-tag">Research</span><span class="exp-tag">ML / AI</span><span class="exp-tag">Software</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
    <a class="exp-card" href="/work/nokia/" data-tags="industry backend">
      <img class="exp-card-logo" src="images/nokia_bell.png" data-light="images/nokia_bell.png" data-dark="images/nokia_bell_dark.png" alt="Nokia Bell Labs">
      <div class="exp-card-role">Software Engineering Intern</div>
      <div class="exp-card-org">Nokia Bell Labs</div>
      <div class="exp-card-date">Jul 2024 – Aug 2024 · Antwerp, Belgium</div>
      <div class="exp-card-desc">Designed a microservices system for autonomous monitoring and remediation of broadband network units, and applied hierarchical clustering to infer unknown network topology from connectivity patterns alone.</div>
      <div class="exp-card-tags">
        <span class="exp-tag">Industry</span><span class="exp-tag">Software</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
    <a class="exp-card" href="/work/walmart/" data-tags="industry backend">
      <img class="exp-card-logo" src="images/walmart_global_tech.png" alt="Walmart Global Technology">
      <div class="exp-card-role">Software Engineer</div>
      <div class="exp-card-org">Walmart Global Technology Services India</div>
      <div class="exp-card-date">Jul 2022 – Aug 2023 · Bengaluru, India</div>
      <div class="exp-card-desc">Extended Sam's Club's shipment tracking platform across domestic and ocean freight — owning testing infrastructure, event pipeline reliability, production alerting, and a greenfield maritime tracking initiative.</div>
      <div class="exp-card-tags">
        <span class="exp-tag">Industry</span><span class="exp-tag">Software</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
    <a class="exp-card" href="/work/flatiron/" data-tags="research ml-cv">
      <img class="exp-card-logo" src="images/simons_foundation.png" data-light="images/simons_foundation.png" data-dark="images/simons_foundation_dark.png" alt="Flatiron Institute">
      <div class="exp-card-role">Summer Research Associate</div>
      <div class="exp-card-org">Center for Computational Biology, Flatiron Institute</div>
      <div class="exp-card-date">May 2022 – Jul 2022 · New York, United States</div>
      <div class="exp-card-desc">Trained generative models to synthesise biological imaging data, and built ConvNets for nuclei tracking and cell-cycle prediction — reconstructing full lineages from time-series microscopy, including through cell division.</div>
      <div class="exp-card-tags">
        <span class="exp-tag">Research</span><span class="exp-tag">ML / AI</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
    <a class="exp-card" href="/work/ucf/" data-tags="research ml-cv">
      <img class="exp-card-logo" src="images/ucf_crcv.png" data-light="images/ucf_crcv.png" data-dark="images/ucf_crcv_dark.png" alt="UCF CRCV">
      <div class="exp-card-role">Research Intern</div>
      <div class="exp-card-org">Center for Research in Computer Vision, University of Central Florida</div>
      <div class="exp-card-date">Dec 2021 – May 2022 · Florida, United States</div>
      <div class="exp-card-desc">Benchmarked segmentation models on a novel mouse embryo dataset, then designed U-Net and Vision Transformer architectures using hybrid contour-distance representations to push accuracy past existing baselines. </div>
      <div class="exp-card-tags">
        <span class="exp-tag">Research</span><span class="exp-tag">ML / AI</span>
      </div>
      <div class="exp-card-more">View details →</div>
    </a>
  </div>
</div>

<!-- ══ PROJECTS ══ -->
<div class="work-section" id="projects">
  <div class="work-section-title">Select Projects</div>
  <div class="exp-grid" id="projGrid">
    <div class="exp-card exp-card-static" data-tags="backend">
      <div class="exp-card-role">Minimal Interpreter for a Domain-Specific Language</div>
      <div class="exp-card-org">KU Leuven - Programming Languages</div>
      <div class="exp-card-date">Nov 2024 – Dec 2024</div>
      <div class="exp-card-desc">A lightweight interpreter for a custom language, written in Racket — arithmetic, first-class functions, type checking, and error handling.</div>
    </div>
    <div class="exp-card exp-card-static" data-tags="ml-cv">
      <div class="exp-card-role">Optimised Delivery Routing with Graph Neural Networks</div>
      <div class="exp-card-org">KU Leuven - Constaint Solving</div>
      <div class="exp-card-date">Oct 2023 – Apr 2024</div>
      <div class="exp-card-desc">A GNN-guided solver with clustering to optimise delivery routing, improving route similarity and efficiency across 100+ deliveries per day.</div>
    </div>
    <div class="exp-card exp-card-static" data-tags="ml-cv">
      <div class="exp-card-role">Language Models for Structured Data Prediction</div>
      <div class="exp-card-org">BITS Pilani - Reseach Project</div>
      <div class="exp-card-date">Sep 2021 – Mar 2022</div>
      <div class="exp-card-desc">Predicted material properties by parsing chemical nomenclature as a structured language, benchmarking transformer models (BERT, RoBERTa) against graph networks for how well each captured semantic structure.</div>
    </div>
    <div class="exp-card exp-card-static" data-tags="ml-cv">
      <div class="exp-card-role">JP Morgan Quant Research Challenge — Winner</div>
      <div class="exp-card-org">JPMorgan Chase</div>
      <div class="exp-card-date">Aug 2021 – Sep 2021</div>
      <div class="exp-card-desc">Won the challenge with a model for long- and short-range time-series forecasting of asset prices, used to construct a diversified portfolio.</div>
    </div>
    <div class="exp-card exp-card-static" data-tags="ml-cv">
      <div class="exp-card-role">Real-Time Pose Estimation and Movement Scoring</div>
      <div class="exp-card-org">BITS Pilani - Research Project</div>
      <div class="exp-card-date">Jun 2021 – Dec 2021</div>
      <div class="exp-card-desc">Scored martial-arts technique against expert reference recordings: skeletal keypoints from a live webcam feed, normalised for position and body scale, compared by cosine similarity. </div>
    </div>
    <div class="exp-card exp-card-static" data-tags="ml-cv">
      <div class="exp-card-role">Neuroevolution for Deep Q-Learning</div>
      <div class="exp-card-org">BITS Pilani - Neural Networks</div>
      <div class="exp-card-date">Mar 2021 – Apr 2021</div>
      <div class="exp-card-desc">Trained a reinforcement learning agent to play Atari games with a Deep Q-Network, using neuroevolution to search the hyperparameter space rather than tuning by hand.</div>
    </div>
    <div class="exp-card exp-card-static" data-tags="backend">
      <div class="exp-card-role">Corpus Search Engine with Vector Space Ranking</div>
      <div class="exp-card-org">BITS Pilani - Natural Language Processing</div>
      <div class="exp-card-date">Mar 2021 – May 2021</div>
      <div class="exp-card-desc">A ranked information retrieval system over a 25k+ document corpus, with a custom in-memory index for low-latency querying and a vector space model using TF-IDF and cosine similarity.</div>
    </div>
  </div>
</div>

<script>
(function() {
  var btns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.exp-card');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var tag = btn.getAttribute('data-tag');
      cards.forEach(function(card) {
        if (tag === 'all') {
          card.style.display = '';
        } else {
          var tags = card.getAttribute('data-tags') || '';
          card.style.display = tags.split(' ').indexOf(tag) !== -1 ? '' : 'none';
        }
      });
    });
  });
})();
</script>
<button id="work-page-toggle" onclick="workTogglePage()">dark</button>
<script>
(function(){
var isDark=localStorage.getItem('site-dark-mode')==='1';
function swapLogos(dark){
  document.querySelectorAll('[data-dark]').forEach(function(img){
    img.src=dark?img.getAttribute('data-dark'):img.getAttribute('data-light');
  });
}
var btn=document.getElementById('work-page-toggle');
if(btn)btn.textContent=isDark?'light':'dark';
if(isDark)swapLogos(true);
window.workTogglePage=function(){
  isDark=!isDark;
  localStorage.setItem('site-dark-mode',isDark?'1':'0');
  document.body.classList.toggle('work-dark',isDark);
  swapLogos(isDark);
  var btn=document.getElementById('work-page-toggle');
  if(btn)btn.textContent=isDark?'light':'dark';
};
})();
</script>