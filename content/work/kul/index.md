---
title: "KU Leuven — M.Sc. Computer Science"
date: 2023-09-01
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
.detail-graphic { margin: 0 0 1.5rem; border-radius: 6px; overflow: hidden; height: 200px; position: relative; }
.detail-graphic svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
/* ── Dark mode ── */
body.kul-dark { background: #111 !important; color: #d0d0d0 !important; }
body.kul-dark .article, body.kul-dark main, body.kul-dark .container { background: #111 !important; }
body.kul-dark .single main { background: #111 !important; box-shadow: none !important; }
body.kul-dark .single .appendix { background: #111 !important; box-shadow: none !important; }
body.kul-dark .menu { background: #111 !important; box-shadow: none !important; }
body.kul-dark .menu a, body.kul-dark .menu li a { color: #888 !important; background: #111 !important; }
body.kul-dark footer, body.kul-dark .footer { background: #111 !important; border-color: #222 !important; }
body.kul-dark .footer a, body.kul-dark footer a { color: #666 !important; background: #111 !important; }
body.kul-dark .footer *, body.kul-dark footer * { color: #666 !important; }
body.kul-dark .article-meta { background: #111 !important; }
body.kul-dark .detail-org { color: #f0f0f0 !important; }
body.kul-dark .detail-sub { color: #888 !important; }
body.kul-dark .detail-role { color: #bbb !important; }
body.kul-dark .detail-duration { color: #666 !important; }
body.kul-dark .detail-tag { color: #bbb !important; border-color: #555 !important; }
body.kul-dark .detail-section h3 { color: #555 !important; border-bottom-color: #2a2a2a !important; }
body.kul-dark .bullet-list li { color: #c0c0c0 !important; }
body.kul-dark .bullet-list li::before { color: #555 !important; }
body.kul-dark .tech-chip { background: #2a2a2a !important; color: #d0d0d0 !important; }
body.kul-dark .back-link { color: #666 !important; }
body.kul-dark .back-link:hover { color: #ccc !important; }
body.kul-dark .note-box { background: #1a1a1a !important; border-left-color: #555 !important; color: #aaa !important; }
body.kul-dark .course-item { color: #bbb !important; border-bottom-color: #2a2a2a !important; }
body.kul-dark h1, body.kul-dark h2, body.kul-dark h3, body.kul-dark h4 { color: #e0e0e0 !important; }
body.kul-dark a { color: #aaa !important; }
body.kul-dark hr { border-color: #2a2a2a !important; }
body.kul-dark .detail-header-right img { background: #fff !important; }
#kul-page-toggle { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000; padding: 0.35rem 0.8rem; font-size: 0.78em; font-family: inherit; border-radius: 4px; cursor: pointer; letter-spacing: 0.04em; border: 1px solid rgba(0,0,0,0.18); background: rgba(255,255,255,0.9); color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); backdrop-filter: blur(6px); transition: background 0.2s, color 0.2s, border-color 0.2s; }
body.kul-dark #kul-page-toggle { background: rgba(30,30,30,0.92) !important; color: #ccc !important; border-color: rgba(255,255,255,0.15) !important; }
</style>

<script>if(localStorage.getItem('site-dark-mode')==='1')document.body.classList.add('kul-dark');</script>
<button id="kul-page-toggle" onclick="kulTogglePage()">dark</button>
<a class="back-link" href="/work/">← Back to work</a>

<div class="detail-header">
  <div class="detail-header-inner">
    <div class="detail-header-left">
      <div class="detail-org">Master's degree</div>
      <div class="detail-role">M. Eng. Computer Science (Specialisation in Artificial Intelligence)
      <div class="detail-sub">Katholieke Universiteit Leuven · Faculty of Engineering Science</div>
      <div class="detail-duration">Sep 2023 – June 2026 &nbsp;·&nbsp; Leuven, Belgium</div>
    </div>
    <div class="detail-header-right">
      <img src="/kul.png" alt="KU Leuven">
    </div>
  </div>
</div>


<div class="detail-graphic" id="kul-graphic">
<svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ku-bg" cx="30%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#eef2ff"/><stop offset="100%" stop-color="#ffffff"/>
    </radialGradient>
    <filter id="ku-glow"><feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="200" fill="url(#ku-bg)"/>
  <!-- ═══ PANEL 1: CODE EDITOR (left) ═══ -->
  <rect x="16" y="10" width="225" height="180" rx="6" fill="#edf0ff" stroke="#c8d4e8" stroke-width="0.8"/>
  <!-- Title bar -->
  <rect x="16" y="10" width="225" height="16" rx="6" fill="#dde4f0"/>
  <rect x="16" y="20" width="225" height="6" fill="#dde4f0"/>
  <circle cx="28" cy="18" r="3" fill="#ef4444" opacity="0.7"/>
  <circle cx="38" cy="18" r="3" fill="#eab308" opacity="0.7"/>
  <circle cx="48" cy="18" r="3" fill="#22c55e" opacity="0.7"/>
  <!-- Code lines -->
  <text x="24" y="40" fill="#6b7280" font-size="7" font-family="monospace">1</text>
  <rect x="38" y="33" width="72" height="7" rx="1.5" fill="#c084fc" opacity="0.2"/>
  <rect x="38" y="33" width="48" height="7" rx="1.5" fill="#c084fc" opacity="0.3">
    <animate attributeName="width" values="24;72;48" dur="3s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="52" fill="#6b7280" font-size="7" font-family="monospace">2</text>
  <rect x="44" y="45" width="108" height="7" rx="1.5" fill="#60a5fa" opacity="0.2"/>
  <rect x="44" y="45" width="72" height="7" rx="1.5" fill="#60a5fa" opacity="0.3">
    <animate attributeName="width" values="36;108;72" dur="3.2s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="64" fill="#6b7280" font-size="7" font-family="monospace">3</text>
  <rect x="44" y="57" width="82" height="7" rx="1.5" fill="#374151" opacity="0.2"/>
  <rect x="44" y="57" width="55" height="7" rx="1.5" fill="#374151" opacity="0.25">
    <animate attributeName="width" values="28;82;55" dur="3.4s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="76" fill="#6b7280" font-size="7" font-family="monospace">4</text>
  <rect x="52" y="69" width="55" height="7" rx="1.5" fill="#34d399" opacity="0.2"/>
  <rect x="52" y="69" width="36" height="7" rx="1.5" fill="#34d399" opacity="0.3">
    <animate attributeName="width" values="18;55;36" dur="2.8s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="88" fill="#6b7280" font-size="7" font-family="monospace">5</text>
  <rect x="52" y="81" width="92" height="7" rx="1.5" fill="#60a5fa" opacity="0.2"/>
  <rect x="52" y="81" width="62" height="7" rx="1.5" fill="#60a5fa" opacity="0.3">
    <animate attributeName="width" values="30;92;62" dur="3.6s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="100" fill="#6b7280" font-size="7" font-family="monospace">6</text>
  <rect x="44" y="93" width="64" height="7" rx="1.5" fill="#374151" opacity="0.2"/>
  <rect x="44" y="93" width="42" height="7" rx="1.5" fill="#374151" opacity="0.25">
    <animate attributeName="width" values="22;64;42" dur="3.1s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="112" fill="#6b7280" font-size="7" font-family="monospace">7</text>
  <rect x="38" y="105" width="46" height="7" rx="1.5" fill="#c084fc" opacity="0.2"/>
  <rect x="38" y="105" width="30" height="7" rx="1.5" fill="#c084fc" opacity="0.3">
    <animate attributeName="width" values="15;46;30" dur="2.6s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="124" fill="#6b7280" font-size="7" font-family="monospace">8</text>
  <rect x="38" y="117" width="100" height="7" rx="1.5" fill="#60a5fa" opacity="0.2"/>
  <rect x="38" y="117" width="66" height="7" rx="1.5" fill="#60a5fa" opacity="0.3">
    <animate attributeName="width" values="33;100;66" dur="3.3s" repeatCount="indefinite"/>
  </rect>
  <text x="24" y="136" fill="#6b7280" font-size="7" font-family="monospace">9</text>
  <rect x="44" y="129" width="72" height="7" rx="1.5" fill="#34d399" opacity="0.2"/>
  <rect x="44" y="129" width="48" height="7" rx="1.5" fill="#34d399" opacity="0.3">
    <animate attributeName="width" values="24;72;48" dur="2.9s" repeatCount="indefinite"/>
  </rect>
  <text x="20" y="148" fill="#6b7280" font-size="7" font-family="monospace">10</text>
  <rect x="44" y="141" width="86" height="7" rx="1.5" fill="#374151" opacity="0.2"/>
  <rect x="44" y="141" width="58" height="7" rx="1.5" fill="#374151" opacity="0.25">
    <animate attributeName="width" values="28;86;58" dur="3.5s" repeatCount="indefinite"/>
  </rect>
  <text x="20" y="160" fill="#6b7280" font-size="7" font-family="monospace">11</text>
  <rect x="52" y="153" width="42" height="7" rx="1.5" fill="#f472b6" opacity="0.2"/>
  <rect x="52" y="153" width="28" height="7" rx="1.5" fill="#f472b6" opacity="0.3">
    <animate attributeName="width" values="14;42;28" dur="2.7s" repeatCount="indefinite"/>
  </rect>
  <text x="20" y="172" fill="#6b7280" font-size="7" font-family="monospace">12</text>
  <rect x="44" y="165" width="68" height="7" rx="1.5" fill="#60a5fa" opacity="0.2"/>
  <rect x="44" y="165" width="45" height="7" rx="1.5" fill="#60a5fa" opacity="0.3">
    <animate attributeName="width" values="22;68;45" dur="3.7s" repeatCount="indefinite"/>
  </rect>
  <text x="20" y="184" fill="#6b7280" font-size="7" font-family="monospace">13</text>
  <rect x="38" y="177" width="55" height="7" rx="1.5" fill="#c084fc" opacity="0.2"/>
  <rect x="38" y="177" width="36" height="7" rx="1.5" fill="#c084fc" opacity="0.3">
    <animate attributeName="width" values="18;55;36" dur="3.0s" repeatCount="indefinite"/>
  </rect>
  <!-- Blinking cursor -->
  <rect x="110" y="69" width="2" height="9" fill="#60a5fa" opacity="0.9">
    <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
  </rect>
  <!-- ═══ PANEL 2: BINARY TREE (center-left) ═══ -->
  <!-- Root -->
  <line x1="340" y1="38" x2="305" y2="72" stroke="#3b82f6" stroke-width="1.2" opacity="0.4"/>
  <line x1="340" y1="38" x2="375" y2="72" stroke="#3b82f6" stroke-width="1.2" opacity="0.4"/>
  <circle cx="340" cy="30" r="10" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="340" cy="30" r="4" fill="#60a5fa" opacity="0.6">
    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
  </circle>
  <!-- L1 left -->
  <line x1="305" y1="80" x2="282" y2="112" stroke="#3b82f6" stroke-width="1" opacity="0.35"/>
  <line x1="305" y1="80" x2="328" y2="112" stroke="#3b82f6" stroke-width="1" opacity="0.35"/>
  <circle cx="305" cy="72" r="8" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1.3"/>
  <circle cx="305" cy="72" r="3" fill="#60a5fa" opacity="0.5">
    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite"/>
  </circle>
  <!-- L1 right -->
  <line x1="375" y1="80" x2="358" y2="112" stroke="#3b82f6" stroke-width="1" opacity="0.35"/>
  <circle cx="375" cy="72" r="8" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1.3"/>
  <circle cx="375" cy="72" r="3" fill="#60a5fa" opacity="0.5">
    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <!-- L2 nodes (leaves) -->
  <circle cx="282" cy="114" r="6" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="282" cy="114" r="2.5" fill="#60a5fa" opacity="0.4"/>
  <circle cx="328" cy="114" r="6" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="328" cy="114" r="2.5" fill="#60a5fa" opacity="0.4"/>
  <circle cx="358" cy="114" r="6" fill="#f4f6ff" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="358" cy="114" r="2.5" fill="#60a5fa" opacity="0.4"/>
  <!-- ═══ PANEL 3: TERMINAL (center) ═══ -->
  <rect x="260" y="130" width="170" height="60" rx="5" fill="#edf0ff" stroke="#c8d4e8" stroke-width="0.7"/>
  <text x="270" y="145" fill="#6b7280" font-size="7" font-family="monospace">$ ./compile</text>
  <text x="270" y="157" fill="#34d399" font-size="7" font-family="monospace">Building...</text>
  <!-- Progress bar -->
  <rect x="270" y="162" width="120" height="4" rx="2" fill="#dde4f0"/>
  <rect x="270" y="162" width="80" height="4" rx="2" fill="#34d399" opacity="0.6">
    <animate attributeName="width" values="0;120;120" dur="3s" repeatCount="indefinite"/>
  </rect>
  <text x="270" y="180" fill="#60a5fa" font-size="7" font-family="monospace">O(n log n)</text>
  <text x="330" y="180" fill="#374151" font-size="7" font-family="monospace">Tests: 42/42</text>
  <circle cx="398" cy="177" r="2.5" fill="#22c55e" opacity="0.6">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
  </circle>
  <!-- ═══ PANEL 4: ARCHITECTURE BLOCKS (center-right) ═══ -->
  <rect x="455" y="18" width="60" height="38" rx="4" fill="#f4f6ff" stroke="#6366f1" stroke-width="0.8" opacity="0.6">
    <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
  </rect>
  <text x="473" y="42" fill="#a5b4fc" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.7">API</text>
  <rect x="530" y="18" width="62" height="38" rx="4" fill="#f4f6ff" stroke="#6366f1" stroke-width="0.8" opacity="0.6">
    <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite"/>
  </rect>
  <text x="549" y="42" fill="#a5b4fc" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.7">DB</text>
  <rect x="455" y="70" width="60" height="38" rx="4" fill="#f4f6ff" stroke="#6366f1" stroke-width="0.8" opacity="0.6">
    <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="3.1s" repeatCount="indefinite"/>
  </rect>
  <text x="473" y="94" fill="#a5b4fc" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.7">ML</text>
  <rect x="530" y="70" width="62" height="38" rx="4" fill="#f4f6ff" stroke="#6366f1" stroke-width="0.8" opacity="0.6">
    <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.3s" repeatCount="indefinite"/>
  </rect>
  <text x="549" y="94" fill="#a5b4fc" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.7">UI</text>
  <!-- Connection lines between blocks -->
  <line x1="515" y1="37" x2="530" y2="37" stroke="#6366f1" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,3">
    <animate attributeName="stroke-dashoffset" values="0;7" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="485" y1="56" x2="485" y2="70" stroke="#6366f1" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,3">
    <animate attributeName="stroke-dashoffset" values="0;7" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="515" y1="89" x2="530" y2="89" stroke="#6366f1" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,3">
    <animate attributeName="stroke-dashoffset" values="0;7" dur="2s" repeatCount="indefinite"/>
  </line>
  <line x1="561" y1="56" x2="561" y2="70" stroke="#6366f1" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,3">
    <animate attributeName="stroke-dashoffset" values="0;7" dur="2s" repeatCount="indefinite"/>
  </line>
  <!-- Diagonal cross-connections -->
  <line x1="515" y1="50" x2="530" y2="76" stroke="#6366f1" stroke-width="0.5" opacity="0.15" stroke-dasharray="3,4">
    <animate attributeName="stroke-dashoffset" values="0;7" dur="2.5s" repeatCount="indefinite"/>
  </line>
  <!-- ═══ PANEL 5: DISTRIBUTED SYSTEMS (right) ═══ -->
  <rect x="455" y="120" width="137" height="70" rx="5" fill="#edf0ff" stroke="#c8d4e8" stroke-width="0.6"/>
  <text x="465" y="134" fill="#4b5563" font-size="6.5" font-family="monospace">distributed nodes</text>
  <!-- 3 server nodes with sync lines -->
  <rect x="470" y="142" width="22" height="16" rx="2" fill="#f4f6ff" stroke="#22d3ee" stroke-width="0.7" opacity="0.6"/>
  <circle cx="481" cy="150" r="2" fill="#22d3ee" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite"/>
  </circle>
  <rect x="508" y="142" width="22" height="16" rx="2" fill="#f4f6ff" stroke="#22d3ee" stroke-width="0.7" opacity="0.6"/>
  <circle cx="519" cy="150" r="2" fill="#22d3ee" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.2s" repeatCount="indefinite"/>
  </circle>
  <rect x="546" y="142" width="22" height="16" rx="2" fill="#f4f6ff" stroke="#22d3ee" stroke-width="0.7" opacity="0.6"/>
  <circle cx="557" cy="150" r="2" fill="#22d3ee" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <!-- Sync lines -->
  <line x1="492" y1="150" x2="508" y2="150" stroke="#22d3ee" stroke-width="0.6" opacity="0.3" stroke-dasharray="2,2">
    <animate attributeName="stroke-dashoffset" values="0;4" dur="1.5s" repeatCount="indefinite"/>
  </line>
  <line x1="530" y1="150" x2="546" y2="150" stroke="#22d3ee" stroke-width="0.6" opacity="0.3" stroke-dasharray="2,2">
    <animate attributeName="stroke-dashoffset" values="0;4" dur="1.5s" repeatCount="indefinite"/>
  </line>
  <!-- Consensus arc -->
  <path d="M481,160 Q519,178 557,160" fill="none" stroke="#22d3ee" stroke-width="0.5" opacity="0.2" stroke-dasharray="3,3">
    <animate attributeName="stroke-dashoffset" values="0;6" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <text x="465" y="183" fill="#22d3ee" font-size="6" font-family="monospace" opacity="0.4">consensus</text>
  <!-- ═══ PANEL 6: GIT TIMELINE (far right) ═══ -->
  <rect x="608" y="10" width="178" height="180" rx="5" fill="#edf0ff" stroke="#c8d4e8" stroke-width="0.6"/>
  <text x="618" y="24" fill="#4b5563" font-size="6.5" font-family="monospace">version control</text>
  <!-- Main branch line -->
  <line x1="640" y1="36" x2="640" y2="180" stroke="#b8c8d8" stroke-width="1.2"/>
  <!-- Commit 1 -->
  <circle cx="640" cy="44" r="5" fill="#f472b6" opacity="0.65"/>
  <text x="654" y="47" fill="#374151" font-size="6.5" font-family="monospace">init project</text>
  <!-- Commit 2 + branch -->
  <circle cx="640" cy="68" r="5" fill="#fbbf24" opacity="0.65"/>
  <text x="654" y="71" fill="#374151" font-size="6.5" font-family="monospace">add API layer</text>
  <!-- Feature branch -->
  <line x1="640" y1="68" x2="670" y2="84" stroke="#fbbf24" stroke-width="0.8" opacity="0.3"/>
  <line x1="670" y1="84" x2="670" y2="104" stroke="#fbbf24" stroke-width="0.8" opacity="0.2"/>
  <circle cx="670" cy="86" r="3" fill="#fbbf24" opacity="0.3"/>
  <circle cx="670" cy="100" r="3" fill="#fbbf24" opacity="0.3"/>
  <line x1="670" y1="104" x2="640" y2="116" stroke="#fbbf24" stroke-width="0.8" opacity="0.3"/>
  <!-- Commit 3 -->
  <circle cx="640" cy="92" r="5" fill="#34d399" opacity="0.65"/>
  <text x="654" y="95" fill="#374151" font-size="6.5" font-family="monospace">ML pipeline</text>
  <!-- Merge commit -->
  <circle cx="640" cy="116" r="5" fill="#60a5fa" opacity="0.65"/>
  <text x="654" y="119" fill="#374151" font-size="6.5" font-family="monospace">merge feat</text>
  <!-- Commit 5 -->
  <circle cx="640" cy="140" r="5" fill="#34d399" opacity="0.65"/>
  <text x="654" y="143" fill="#374151" font-size="6.5" font-family="monospace">optimize algo</text>
  <!-- Commit 6: deploy -->
  <circle cx="640" cy="164" r="5" fill="#60a5fa" opacity="0.65"/>
  <text x="654" y="167" fill="#374151" font-size="6.5" font-family="monospace">deploy v1.0</text>
  <circle cx="640" cy="164" r="8" fill="none" stroke="#60a5fa" stroke-width="0.6" opacity="0.3">
    <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
  </circle>
  <!-- Corner accents -->
  <line x1="0" y1="0" x2="35" y2="0" stroke="#3b82f6" stroke-width="1.5" opacity="0.12"/>
  <line x1="0" y1="0" x2="0" y2="25" stroke="#3b82f6" stroke-width="1.5" opacity="0.12"/>
  <line x1="800" y1="200" x2="765" y2="200" stroke="#3b82f6" stroke-width="1.5" opacity="0.12"/>
  <line x1="800" y1="200" x2="800" y2="175" stroke="#3b82f6" stroke-width="1.5" opacity="0.12"/>
</svg>
</div>

<div class="detail-section">
<h3>About</h3>
KU Leuven is one of Europe's oldest research universities and among its strongest in computer science. The Computer Science master's with an AI specialisation runs from theoretical foundations through to systems engineering, with substantial weight on research — most of my second year went into the thesis rather than coursework. My strongest results were in the applied subjects, particularly computer vision and the AI seminar track.
</div>

<div class="note-box">
Thesis: Cross-registered with my imec Life Sciences internship, <em>A deep learning powered platform for multimodal analysis of cellular dynamics</em>.
</div>

<div class="detail-section">
<h3>Coursework</h3>
<div class="course-grid">
  <div class="course-item">Computer Vision</div>
  <div class="course-item">Capita Selecta in Artificial Intelligence</div>
  <div class="course-item">Natural Language Processing</div>
  <div class="course-item">Data Mining</div>
  <div class="course-item">Big Data Analytics</div>
  <div class="course-item">Bioinformatics</div>
  <div class="course-item">Software Design &amp; Architecture</div>
  <div class="course-item">Distributed Systems</div>
</div>
</div>


<div class="detail-section">
<h3>Research &amp; Work during degree</h3>
<ul class="bullet-list">
  <li><a href="/work/atlas-copco/">Atlas Copco — Platform &amp; DevOps Engineer</a> (Oct 2025 – Present): cloud observability, Kubernetes, and infrastructure engineering, alongside the final year of the degree.</li>
  <li><a href="/work/imec/">imec Life Sciences — ML Research Intern</a> (Oct 2024 – Jun 2025): the thesis project — deep learning and multimodal sensing for cellular analysis.</li>
  <li><a href="/work/nokia/">Nokia Bell Labs — Software Engineering Intern</a> (Jul–Aug 2024): intent-driven microservices and topology inference for broadband networks.</li>
</ul>
</div>

<div class="detail-section">
<h3>Skills developed</h3>
<div class="tech-chips">
  <span class="tech-chip">PyTorch</span>
  <span class="tech-chip">TensorFlow</span>
  <span class="tech-chip">Computer Vision</span>
  <span class="tech-chip">Deep Learning</span>
  <span class="tech-chip">NLP</span>
  <span class="tech-chip">Graph Neural Networks</span>
  <span class="tech-chip">Data Mining</span>
  <span class="tech-chip">Distributed Systems</span>
  <span class="tech-chip">Software Architecture</span>
</div>
</div>

<script>
(function(){
  var isDark=localStorage.getItem('site-dark-mode')==='1';
  var TO_DARK={stops:{'#eef2ff':'#0f172a','#ffffff':'#020617'},fills:{'#f4f6ff':'#0f172a','#edf0ff':'#0a0f1e','#dde4f0':'#1e293b','#374151':'#94a3b8','#4b5563':'#64748b','#6b7280':'#475569'},strokes:{'#c8d4e8':'#1e293b','#b8c8d8':'#334155'}};
  var TO_LIGHT={stops:{'#0f172a':'#eef2ff','#020617':'#ffffff'},fills:{'#0f172a':'#f4f6ff','#0a0f1e':'#edf0ff','#1e293b':'#dde4f0','#94a3b8':'#374151','#64748b':'#4b5563','#475569':'#6b7280'},strokes:{'#1e293b':'#c8d4e8','#334155':'#b8c8d8'}};
  function applyTheme(map){
    var svg=document.querySelector('#kul-graphic svg');
    if(!svg)return;
    svg.querySelectorAll('stop').forEach(function(el){var c=el.getAttribute('stop-color');if(map.stops[c])el.setAttribute('stop-color',map.stops[c]);});
    svg.querySelectorAll('[fill]').forEach(function(el){var f=el.getAttribute('fill');if(map.fills[f])el.setAttribute('fill',map.fills[f]);});
    svg.querySelectorAll('[stroke]').forEach(function(el){var s=el.getAttribute('stroke');if(map.strokes[s])el.setAttribute('stroke',map.strokes[s]);});
  }
  if(isDark)applyTheme(TO_DARK);
  var btn=document.getElementById('kul-page-toggle');
  if(btn)btn.textContent=isDark?'light':'dark';
  window.kulTogglePage=function(){
    isDark=!isDark;
    localStorage.setItem('site-dark-mode',isDark?'1':'0');
    document.body.classList.toggle('kul-dark',isDark);
    applyTheme(isDark?TO_DARK:TO_LIGHT);
    var btn=document.getElementById('kul-page-toggle');
    if(btn)btn.textContent=isDark?'light':'dark';
  };
})();
</script>