---
title: "BITS Pilani — B.E. (Hons.) Electrical & Electronics Engineering"
date: 2018-08-01
_build:
  list: never
features: ["-toc"]
---

<style>
.detail-header { margin-bottom: 1.5rem; }
.detail-header-inner { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; }
.detail-header-left { flex: 1 1 0; min-width: 0; }
.detail-org { font-size: 1.35em; font-weight: 700; letter-spacing: -0.02em; color: #111; line-height: 1.2; margin-bottom: 0.3rem; }
.detail-sub { font-size: 0.8em; color: #999; margin-bottom: 0.3rem; }
.detail-role { font-size: 0.92em; font-weight: 500; color: #444; margin-bottom: 0.15rem; }
.detail-duration { font-size: 0.78em; color: #bbb; letter-spacing: 0.01em; }
.detail-header-right { flex-shrink: 0; }
.detail-header-right img { max-height: 50px; width: auto; display: block; }
.detail-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin: 1rem 0 1.2rem; }
.detail-graphic { margin: 0 0 1.5rem; border-radius: 6px; overflow: hidden; height: 200px; position: relative; }
.detail-graphic svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.detail-tag { font-size: 0.78em; padding: 0.25rem 0.75rem; border-radius: 3px; background: transparent; color: #232323; text-transform: uppercase; letter-spacing: 0.04em; border: 1px solid #232323; }
.detail-section { margin: 2rem 0; }
.detail-section h3 { font-size: 0.72em; text-transform: uppercase; letter-spacing: 0.1em; color: #bbb; margin: 0 0 1.2rem 0; padding-bottom: 0.5rem; border-bottom: 1px dashed #ebebeb; }
.bullet-list { list-style: none; padding: 0; margin: 0; }
.bullet-list li { padding: 0.35rem 0 0.35rem 1.2em; position: relative; font-size: 0.93em; line-height: 1.6; color: #333; }
.bullet-list li::before { content: "—"; position: absolute; left: 0; color: #aaa; }
.tech-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem; }
.tech-chip { font-size: 0.8em; padding: 0.2rem 0.65rem; border-radius: 3px; background: #232323; color: #fff; font-family: monospace; }
.back-link { font-size: 0.85em; color: #7e7e7e; text-decoration: none; display: inline-block; margin-bottom: 1.5rem; }
.back-link:hover { color: #232323; }
.note-box { background: #f9f9f9; border-left: 3px solid #232323; padding: 0.8rem 1rem; font-size: 0.88em; color: #444; margin: 1.5rem 0; line-height: 1.6; }
.course-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1.5rem; margin-top: 0.5rem; }
@media (max-width: 600px) { .course-grid { grid-template-columns: 1fr; } }
.course-item { font-size: 0.9em; color: #333; padding: 0.25rem 0; border-bottom: 1px solid #f0f0f0; }
/* ── Dark mode ── */
body.bits-dark { background: #111 !important; color: #d0d0d0 !important; }
body.bits-dark .article, body.bits-dark main, body.bits-dark .container { background: #111 !important; }
body.bits-dark .single main { background: #111 !important; box-shadow: none !important; }
body.bits-dark .single .appendix { background: #111 !important; box-shadow: none !important; }
body.bits-dark .menu { background: #111 !important; box-shadow: none !important; }
body.bits-dark .menu a, body.bits-dark .menu li a { color: #888 !important; background: #111 !important; }
body.bits-dark footer, body.bits-dark .footer { background: #111 !important; border-color: #222 !important; }
body.bits-dark .footer a, body.bits-dark footer a { color: #666 !important; background: #111 !important; }
body.bits-dark .footer *, body.bits-dark footer * { color: #666 !important; }
body.bits-dark .article-meta { background: #111 !important; }
body.bits-dark .detail-org { color: #f0f0f0 !important; }
body.bits-dark .detail-sub { color: #888 !important; }
body.bits-dark .detail-role { color: #bbb !important; }
body.bits-dark .detail-duration { color: #666 !important; }
body.bits-dark .detail-tag { color: #bbb !important; border-color: #555 !important; }
body.bits-dark .detail-section h3 { color: #555 !important; border-bottom-color: #2a2a2a !important; }
body.bits-dark .bullet-list li { color: #c0c0c0 !important; }
body.bits-dark .bullet-list li::before { color: #555 !important; }
body.bits-dark .tech-chip { background: #2a2a2a !important; color: #d0d0d0 !important; }
body.bits-dark .back-link { color: #666 !important; }
body.bits-dark .back-link:hover { color: #ccc !important; }
body.bits-dark .note-box { background: #1a1a1a !important; border-left-color: #555 !important; color: #aaa !important; }
body.bits-dark h1, body.bits-dark h2, body.bits-dark h3, body.bits-dark h4 { color: #e0e0e0 !important; }
body.bits-dark a { color: #aaa !important; }
body.bits-dark hr { border-color: #2a2a2a !important; }
body.bits-dark .detail-header-right img { background: #fff !important; }
#bits-page-toggle { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000; padding: 0.35rem 0.8rem; font-size: 0.78em; font-family: inherit; border-radius: 4px; cursor: pointer; letter-spacing: 0.04em; border: 1px solid rgba(0,0,0,0.18); background: rgba(255,255,255,0.9); color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); backdrop-filter: blur(6px); transition: background 0.2s, color 0.2s, border-color 0.2s; }
body.bits-dark #bits-page-toggle { background: rgba(30,30,30,0.92) !important; color: #ccc !important; border-color: rgba(255,255,255,0.15) !important; }
</style>

<script>if(localStorage.getItem('site-dark-mode')==='1')document.body.classList.add('bits-dark');</script>
<button id="bits-page-toggle" onclick="bitsTogglePage()">dark</button>
<a class="back-link" href="/work/">← Back to work</a>

<div class="detail-header">
  <div class="detail-header-inner">
    <div class="detail-header-left">
      <div class="detail-org">Bachelor's degree</div>
      <div class="detail-role">B.E. (Hons.) Electrical &amp; Electronics Engineering</div>
      <div class="detail-sub">Birla Institute of Technology and Science · Pilani Campus</div>
      <div class="detail-duration">Aug 2018 – May 2022 &nbsp;·&nbsp; Rajasthan, India</div>
    </div>
    <div class="detail-header-right">
      <img src="/bits.png" alt="BITS Pilani">
    </div>
  </div>
</div>


<div class="detail-graphic" id="bits-graphic">
<svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bits-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#fef9f0"/><stop offset="100%" stop-color="#ffffff"/>
    </radialGradient>
    <filter id="bits-glow"><feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="bits-glow-wide"><feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="200" fill="url(#bits-bg)"/>
  <!-- PCB substrate grid -->
  <line x1="0" y1="25" x2="800" y2="25" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="0" y1="50" x2="800" y2="50" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="0" y1="100" x2="800" y2="100" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="0" y1="150" x2="800" y2="150" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="0" y1="175" x2="800" y2="175" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="50" y1="0" x2="50" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="150" y1="0" x2="150" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="250" y1="0" x2="250" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="400" y1="0" x2="400" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="550" y1="0" x2="550" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="650" y1="0" x2="650" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <line x1="750" y1="0" x2="750" y2="200" stroke="#e0c090" stroke-width="0.4" opacity="0.5"/>
  <!-- PCB traces spanning full width -->
  <path d="M20,100 H180 V60 H360 V100 H540 V60 H720" fill="none" stroke="#d97706" stroke-width="2" opacity="0.7" filter="url(#bits-glow)">
    <animate attributeName="stroke-dasharray" values="0,1200;1200,0" dur="5s" repeatCount="indefinite"/>
  </path>
  <path d="M20,70 H100 V40 H260 V70 H440 V40 H600 V70 H780" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.55">
    <animate attributeName="stroke-dasharray" values="0,1200;1200,0" dur="6s" begin="0.5s" repeatCount="indefinite"/>
  </path>
  <path d="M20,130 H140 V160 H320 V130 H500 V160 H680 V130 H780" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.5">
    <animate attributeName="stroke-dasharray" values="0,1200;1200,0" dur="5.5s" begin="1s" repeatCount="indefinite"/>
  </path>
  <path d="M20,160 H80 V180 H240 V160 H420 V180 H580 V160 H760" fill="none" stroke="#b45309" stroke-width="1.2" opacity="0.4">
    <animate attributeName="stroke-dasharray" values="0,1200;1200,0" dur="7s" begin="0.8s" repeatCount="indefinite"/>
  </path>
  <path d="M400,20 V60 H560 V30 H720 V100" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.5">
    <animate attributeName="stroke-dasharray" values="0,600;600,0" dur="4s" begin="1.5s" repeatCount="indefinite"/>
  </path>
  <!-- IC Chip 1 at x=155 -->
  <rect x="155" y="75" width="55" height="45" rx="2" fill="#fef3e2" stroke="#78716c" stroke-width="1.2" opacity="0.9"/>
  <rect x="155" y="81" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="155" y="89" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="155" y="97" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="204" y="81" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="204" y="89" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="204" y="97" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="166" y="75" width="5" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="176" y="75" width="5" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="186" y="75" width="5" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <!-- IC Chip 2 at x=350 (large central) -->
  <rect x="350" y="70" width="60" height="55" rx="2" fill="#fef3e2" stroke="#78716c" stroke-width="1.2" opacity="0.9"/>
  <rect x="350" y="77" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="350" y="86" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="350" y="95" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="350" y="104" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="404" y="77" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="404" y="86" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="404" y="95" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <rect x="404" y="104" width="6" height="5" rx="1" fill="#f59e0b" opacity="0.7"/>
  <!-- IC Chip 3 at x=550 -->
  <rect x="550" y="78" width="50" height="40" rx="2" fill="#fef3e2" stroke="#78716c" stroke-width="1.2" opacity="0.9"/>
  <rect x="550" y="84" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="550" y="93" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="594" y="84" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="594" y="93" width="6" height="5" rx="1" fill="#d97706" opacity="0.7"/>
  <!-- IC Chip 4 top-right at x=680 -->
  <rect x="680" y="25" width="40" height="30" rx="2" fill="#fef3e2" stroke="#78716c" stroke-width="1.2" opacity="0.9"/>
  <rect x="680" y="30" width="5" height="4" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="680" y="38" width="5" height="4" rx="1" fill="#d97706" opacity="0.7"/>
  <rect x="715" y="30" width="5" height="4" rx="1" fill="#d97706" opacity="0.7"/>
  <!-- Via circles -->
  <circle cx="150" cy="60" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="150" cy="60" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/></circle>
  <circle cx="250" cy="60" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="250" cy="60" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite"/></circle>
  <circle cx="350" cy="100" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="350" cy="100" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.9s" repeatCount="indefinite"/></circle>
  <circle cx="550" cy="60" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="550" cy="60" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.7s" repeatCount="indefinite"/></circle>
  <circle cx="650" cy="100" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="650" cy="100" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.1s" repeatCount="indefinite"/></circle>
  <circle cx="100" cy="40" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="100" cy="40" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/></circle>
  <circle cx="400" cy="40" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="400" cy="40" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.9s" repeatCount="indefinite"/></circle>
  <circle cx="700" cy="60" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="700" cy="60" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/></circle>
  <circle cx="150" cy="150" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="150" cy="150" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.6s" repeatCount="indefinite"/></circle>
  <circle cx="450" cy="150" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="450" cy="150" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.3s" repeatCount="indefinite"/></circle>
  <circle cx="650" cy="150" r="5" fill="#fef3e2" stroke="#d97706" stroke-width="1.2" opacity="0.8"/>
  <circle cx="650" cy="150" r="2" fill="#f59e0b" opacity="0.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.1s" repeatCount="indefinite"/></circle>
  <!-- Capacitors -->
  <rect x="76" y="93" width="12" height="6" rx="1" fill="#44403c" opacity="0.6"/>
  <rect x="76" y="101" width="12" height="6" rx="1" fill="#6b7280" opacity="0.4"/>
  <rect x="476" y="93" width="12" height="6" rx="1" fill="#44403c" opacity="0.6"/>
  <rect x="476" y="101" width="12" height="6" rx="1" fill="#6b7280" opacity="0.4"/>
  <!-- Resistors -->
  <rect x="748" y="96" width="14" height="7" rx="1" fill="#1c1917" opacity="0.7"/>
  <line x1="744" y1="99.5" x2="748" y2="99.5" stroke="#d97706" stroke-width="1.2" opacity="0.7"/>
  <line x1="762" y1="99.5" x2="766" y2="99.5" stroke="#d97706" stroke-width="1.2" opacity="0.7"/>
  <!-- Central energy pulse -->
  <circle cx="400" cy="100" r="4" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.4" filter="url(#bits-glow-wide)">
    <animate attributeName="r" values="4;90;4" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite"/>
  </circle>
</svg>
</div>

<div class="detail-section">
<h3>About</h3>
BITS Pilani is one of India's foremost institutes of technology, with a rigorous curriculum and a practice-school programme that places students in industry and research environments. The Electrical and Electronics degree is where the signal-processing side of my background comes from — signals and systems, digital communication, digital image processing, most of it with a good deal of MATLAB — and it turned out to be a useful route into computer vision. Segmentation, filtering, and frequency-domain reasoning were all familiar before I met them again in a deep learning context.
</div>

<div class="note-box">
Thesis: Cross-registered with my UCF CRCV research internship, <em>Towards an end-to-end solution for object segmentation and tracking in biomedical imaging.</em>
</div>

<div class="detail-section">
<h3>Coursework</h3>
<div class="course-grid">
  <div class="course-item">Signals &amp; Systems</div>
  <div class="course-item">Digital Image Processing</div>
  <div class="course-item">Digital Communication</div>
  <div class="course-item">Machine Learning &amp; Neural Networks</div>
  <div class="course-item">Data Structures &amp; Algorithms</div>
  <div class="course-item">Object Oriented Programming</div>
  <div class="course-item">Operating Systems</div>
  <div class="course-item">Microelectronics</div>
  <div class="course-item">General Biology</div>
</div>
</div>

<div class="detail-section">
<h3>Research &amp; Work during degree</h3>
<ul class="bullet-list">
  <li><a href="/work/ucf/">University of Central Florida (CRCV) — Research Intern</a> (Dec 2021 – May 2022) and <a href="/work/flatiron/">Flatiron Institute — Summer Research Associate</a> (May–Jul 2022): one continuous project on segmentation and tracking in embryo microscopy, which became my thesis and a co-authored paper in <em>Development</em>.</li>
  <li><a href="/work/walmart/">Walmart Global Technology — Software Engineering Intern</a> (May–Jul 2021): benchmarking and rerouting bin-packing algorithms for distribution centres.</li>
</ul>
</div>

<div class="detail-section">
<h3>Skills developed</h3>
<div class="tech-chips">
  <span class="tech-chip">Signal Processing</span>
  <span class="tech-chip">Digital Image Processing</span>
  <span class="tech-chip">MATLAB</span>
  <span class="tech-chip">Python</span>
  <span class="tech-chip">PyTorch</span>
  <span class="tech-chip">Computer Vision</span>
  <span class="tech-chip">C/C++</span>
  <span class="tech-chip">Java</span>
  <span class="tech-chip">Algorithms</span>
</div>
</div>
<script>
(function(){
  var isDark=localStorage.getItem('site-dark-mode')==='1';
  var TO_DARK={stops:{'#fef9f0':'#1a0f0a','#ffffff':'#0d0705'},fills:{'#fef3e2':'#1a0f0a','#6b7280':'#a8a29e','#44403c':'#78716c','#1c1917':'#57534e'},strokes:{'#e0c090':'#2a1a0a'}};
  var TO_LIGHT={stops:{'#1a0f0a':'#fef9f0','#0d0705':'#ffffff'},fills:{'#1a0f0a':'#fef3e2','#a8a29e':'#6b7280','#78716c':'#44403c','#57534e':'#1c1917'},strokes:{'#2a1a0a':'#e0c090'}};
  function applyTheme(map){
    var svg=document.querySelector('#bits-graphic svg');
    if(!svg)return;
    svg.querySelectorAll('stop').forEach(function(el){var c=el.getAttribute('stop-color');if(map.stops[c])el.setAttribute('stop-color',map.stops[c]);});
    svg.querySelectorAll('[fill]').forEach(function(el){var f=el.getAttribute('fill');if(map.fills[f])el.setAttribute('fill',map.fills[f]);});
    svg.querySelectorAll('[stroke]').forEach(function(el){var s=el.getAttribute('stroke');if(map.strokes[s])el.setAttribute('stroke',map.strokes[s]);});
  }
  if(isDark)applyTheme(TO_DARK);
  var btn=document.getElementById('bits-page-toggle');
  if(btn)btn.textContent=isDark?'light':'dark';
  window.bitsTogglePage=function(){
    isDark=!isDark;
    localStorage.setItem('site-dark-mode',isDark?'1':'0');
    document.body.classList.toggle('bits-dark',isDark);
    applyTheme(isDark?TO_DARK:TO_LIGHT);
    var btn=document.getElementById('bits-page-toggle');
    if(btn)btn.textContent=isDark?'light':'dark';
  };
})();
</script>
