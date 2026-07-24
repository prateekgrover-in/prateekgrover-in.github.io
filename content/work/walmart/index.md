---
title: "Walmart Global Technology — Software Engineer"
date: 2021-05-01
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
.role-split { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem; }
@media (max-width: 600px) { .role-split { grid-template-columns: 1fr; } }
.role-block { border: 1px solid #e0e0e0; border-radius: 3px; padding: 1rem; }
.role-block-title { font-weight: 600; font-size: 0.88em; margin-bottom: 0.2rem; }
.role-block-date { font-size: 0.8em; color: #888; font-style: italic; margin-bottom: 0.8rem; }
.detail-graphic { margin: 0 0 1.5rem; border-radius: 6px; overflow: hidden; height: 200px; position: relative; }
.detail-graphic svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.context-text { font-size: 0.93em; line-height: 1.7; color: #444; margin: 0; }
.section-intro { font-size: 0.93em; line-height: 1.7; color: #444; margin: 0 0 1.2rem 0; }
.work-items { margin: 0; }
.work-item { margin: 1rem 0; padding-left: 1rem; border-left: 2px solid #e8e8e8; }
.work-item-body { font-size: 0.92em; line-height: 1.6; color: #444; margin: 0; }
/* ── Dark mode ── */
body.walmart-dark { background: #111 !important; color: #d0d0d0 !important; }
body.walmart-dark .article, body.walmart-dark main, body.walmart-dark .container { background: #111 !important; }
body.walmart-dark .single main { background: #111 !important; box-shadow: none !important; }
body.walmart-dark .single .appendix { background: #111 !important; box-shadow: none !important; }
body.walmart-dark .menu { background: #111 !important; box-shadow: none !important; }
body.walmart-dark .menu a, body.walmart-dark .menu li a { color: #888 !important; background: #111 !important; }
body.walmart-dark footer, body.walmart-dark .footer { background: #111 !important; border-color: #222 !important; }
body.walmart-dark .footer a, body.walmart-dark footer a { color: #666 !important; background: #111 !important; }
body.walmart-dark .footer *, body.walmart-dark footer * { color: #666 !important; }
body.walmart-dark .article-meta { background: #111 !important; }
body.walmart-dark .detail-org { color: #f0f0f0 !important; }
body.walmart-dark .detail-sub { color: #888 !important; }
body.walmart-dark .detail-role { color: #bbb !important; }
body.walmart-dark .detail-duration { color: #666 !important; }
body.walmart-dark .detail-tag { color: #bbb !important; border-color: #555 !important; }
body.walmart-dark .detail-section h3 { color: #555 !important; border-bottom-color: #2a2a2a !important; }
body.walmart-dark .bullet-list li { color: #c0c0c0 !important; }
body.walmart-dark .bullet-list li::before { color: #555 !important; }
body.walmart-dark .tech-chip { background: #2a2a2a !important; color: #d0d0d0 !important; }
body.walmart-dark .back-link { color: #666 !important; }
body.walmart-dark .back-link:hover { color: #ccc !important; }
body.walmart-dark .note-box { background: #1a1a1a !important; border-left-color: #555 !important; color: #aaa !important; }
body.walmart-dark h1, body.walmart-dark h2, body.walmart-dark h3, body.walmart-dark h4 { color: #e0e0e0 !important; }
body.walmart-dark a { color: #aaa !important; }
body.walmart-dark hr { border-color: #2a2a2a !important; }
body.walmart-dark .detail-header-right img { background: #fff !important; }
body.walmart-dark .context-text { color: #b0b0b0 !important; }
body.walmart-dark .section-intro { color: #b0b0b0 !important; }
body.walmart-dark .work-item { border-left-color: #2a2a2a !important; }
body.walmart-dark .work-item-label { color: #d0d0d0 !important; }
body.walmart-dark .work-item-body { color: #b0b0b0 !important; }
body.walmart-dark .role-block { border-color: #2a2a2a !important; }
body.walmart-dark .role-block-title { color: #d0d0d0 !important; }
#walmart-page-toggle { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000; padding: 0.35rem 0.8rem; font-size: 0.78em; font-family: inherit; border-radius: 4px; cursor: pointer; letter-spacing: 0.04em; border: 1px solid rgba(0,0,0,0.18); background: rgba(255,255,255,0.9); color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); backdrop-filter: blur(6px); transition: background 0.2s, color 0.2s, border-color 0.2s; }
body.walmart-dark #walmart-page-toggle { background: rgba(30,30,30,0.92) !important; color: #ccc !important; border-color: rgba(255,255,255,0.15) !important; }
</style>

<script>if(localStorage.getItem('site-dark-mode')==='1')document.body.classList.add('walmart-dark');</script>
<button id="walmart-page-toggle" onclick="walmartTogglePage()">dark</button>
<a class="back-link" href="/work/">← Back to work</a>

<div class="detail-header">
  <div class="detail-header-inner">
    <div class="detail-header-left">
      <div class="detail-org">Walmart Global Tech India</div>
      <div class="detail-role">Software Engineer</div>
      <div class="detail-duration">Jul 2022 - Aug 2023 &nbsp;·&nbsp; Bengaluru, India</div>
    </div>
    <div class="detail-header-right">
      <img src="/walmart_global_tech.png" alt="Walmart Global Technology">
    </div>
  </div>
</div>

<div class="detail-tags">
  <span class="detail-tag">Industry</span>
  <span class="detail-tag">Software</span>
</div>

<div class="detail-graphic" id="walmart-graphic">
<svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wm-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#eff6ff"/><stop offset="100%" stop-color="#ffffff"/>
    </radialGradient>
    <filter id="wm-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="800" height="200" fill="url(#wm-bg)"/>
  <!-- ═══ TOP: SUPPLY CHAIN ROUTES (full width) ═══ -->
  <path d="M16,40 Q140,18 280,38 T560,30 T780,35" fill="none" stroke="#0ea5e9" stroke-width="1.4" opacity="0.3" stroke-dasharray="8,4"><animate attributeName="stroke-dashoffset" values="0;-24" dur="3s" repeatCount="indefinite"/></path>
  <path d="M16,60 Q180,40 360,58 T600,50 T780,55" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.2" stroke-dasharray="6,4"><animate attributeName="stroke-dashoffset" values="0;-20" dur="4s" repeatCount="indefinite"/></path>
  <!-- Hub nodes -->
  <circle cx="100" cy="38" r="6" fill="#eff6ff" stroke="#0ea5e9" stroke-width="1.3"><animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/></circle><circle cx="100" cy="38" r="2" fill="#0ea5e9" opacity="0.7"/>
  <circle cx="280" cy="36" r="6" fill="#eff6ff" stroke="#0ea5e9" stroke-width="1.3"><animate attributeName="r" values="5;7;5" dur="2.3s" repeatCount="indefinite"/></circle><circle cx="280" cy="36" r="2" fill="#0ea5e9" opacity="0.7"/>
  <circle cx="460" cy="32" r="6" fill="#eff6ff" stroke="#0ea5e9" stroke-width="1.3"><animate attributeName="r" values="5;7;5" dur="2.6s" repeatCount="indefinite"/></circle><circle cx="460" cy="32" r="2" fill="#0ea5e9" opacity="0.7"/>
  <circle cx="640" cy="33" r="6" fill="#eff6ff" stroke="#0ea5e9" stroke-width="1.3"><animate attributeName="r" values="5;7;5" dur="1.9s" repeatCount="indefinite"/></circle><circle cx="640" cy="33" r="2" fill="#0ea5e9" opacity="0.7"/>
  <!-- Package icons on route -->
  <rect x="170" y="26" width="10" height="10" rx="1.5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="0.4"/><line x1="170" y1="31" x2="180" y2="31" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/><line x1="175" y1="26" x2="175" y2="31" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/>
  <rect x="370" y="22" width="10" height="10" rx="1.5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="0.4"/><line x1="370" y1="27" x2="380" y2="27" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/><line x1="375" y1="22" x2="375" y2="27" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/>
  <rect x="550" y="24" width="10" height="10" rx="1.5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="0.4"/><line x1="550" y1="29" x2="560" y2="29" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/><line x1="555" y1="24" x2="555" y2="29" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/>
  <rect x="720" y="26" width="10" height="10" rx="1.5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="0.4"/><line x1="720" y1="31" x2="730" y2="31" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/><line x1="725" y1="26" x2="725" y2="31" stroke="#f59e0b" stroke-width="0.2" opacity="0.3"/>
  <!-- Data particles on routes -->
  <circle r="2.5" fill="#fbbf24" opacity="0.8" filter="url(#wm-glow)"><animateMotion dur="3.5s" repeatCount="indefinite" path="M16,40 Q140,18 280,38 T560,30 T780,35"/></circle>
  <circle r="2" fill="#22d3ee" opacity="0.6" filter="url(#wm-glow)"><animateMotion dur="4.5s" begin="1.5s" repeatCount="indefinite" path="M16,60 Q180,40 360,58 T600,50 T780,55"/></circle>
  <!-- ═══ PANEL 1: SHIPMENT TRACKING TABLE ═══ -->
  <rect x="16" y="72" width="235" height="118" rx="4" fill="#e8f2ff" stroke="#9ab8d8" stroke-width="0.6"/>
  <text x="24" y="86" fill="#6b7280" font-size="7" font-family="monospace">shipment tracking</text>
  <!-- Table header -->
  <rect x="22" y="92" width="223" height="10" rx="1.5" fill="#b8d0e8" opacity="0.2"/>
  <text x="26" y="100" fill="#4b5563" font-size="5.5" font-family="monospace">ORDER</text>
  <text x="72" y="100" fill="#4b5563" font-size="5.5" font-family="monospace">ROUTE</text>
  <text x="138" y="100" fill="#4b5563" font-size="5.5" font-family="monospace">STATUS</text>
  <!-- Row 1 -->
  <rect x="22" y="104" width="223" height="14" rx="1" fill="#fbbf24" opacity="0.03"/>
  <text x="26" y="114" fill="#374151" font-size="6" font-family="monospace">ORD-7842</text>
  <text x="72" y="114" fill="#374151" font-size="6" font-family="monospace">BLR &gt; NYC</text>
  <circle cx="140" cy="111" r="2" fill="#fbbf24" opacity="0.65"/>
  <text x="146" y="114" fill="#fbbf24" font-size="6" font-family="monospace">in-transit</text>
  <!-- Row 2 -->
  <rect x="22" y="120" width="223" height="14" rx="1" fill="#22c55e" opacity="0.02"/>
  <text x="26" y="130" fill="#374151" font-size="6" font-family="monospace">ORD-7841</text>
  <text x="72" y="130" fill="#374151" font-size="6" font-family="monospace">DEL &gt; LAX</text>
  <circle cx="140" cy="127" r="2" fill="#22c55e" opacity="0.65"/>
  <text x="146" y="130" fill="#22c55e" font-size="6" font-family="monospace">delivered</text>
  <!-- Row 3 -->
  <rect x="22" y="136" width="223" height="14" rx="1" fill="#f472b6" opacity="0.02"/>
  <text x="26" y="146" fill="#374151" font-size="6" font-family="monospace">ORD-7840</text>
  <text x="72" y="146" fill="#374151" font-size="6" font-family="monospace">MUM &gt; SEA</text>
  <circle cx="140" cy="143" r="2" fill="#f472b6" opacity="0.65"/>
  <text x="146" y="146" fill="#f472b6" font-size="6" font-family="monospace">customs</text>
  <!-- Row 4 -->
  <rect x="22" y="152" width="223" height="14" rx="1" fill="#60a5fa" opacity="0.02"/>
  <text x="26" y="162" fill="#374151" font-size="6" font-family="monospace">ORD-7839</text>
  <text x="72" y="162" fill="#374151" font-size="6" font-family="monospace">BLR &gt; ORD</text>
  <circle cx="140" cy="159" r="2" fill="#60a5fa" opacity="0.65"/>
  <text x="146" y="162" fill="#60a5fa" font-size="6" font-family="monospace">shipped</text>
  <!-- Row 5 -->
  <rect x="22" y="168" width="223" height="14" rx="1" fill="#60a5fa" opacity="0.02"/>
  <text x="26" y="178" fill="#374151" font-size="6" font-family="monospace">ORD-7838</text>
  <text x="72" y="178" fill="#374151" font-size="6" font-family="monospace">HYD &gt; JFK</text>
  <circle cx="140" cy="175" r="2" fill="#60a5fa" opacity="0.65"/>
  <text x="146" y="178" fill="#60a5fa" font-size="6" font-family="monospace">packed</text>
  <!-- ═══ PANEL 2: 4D BIN PACKING ═══ -->
  <rect x="265" y="72" width="200" height="118" rx="4" fill="#e8f2ff" stroke="#9ab8d8" stroke-width="0.6"/>
  <text x="273" y="86" fill="#6b7280" font-size="7" font-family="monospace">4D bin packing</text>
  <!-- Container wireframe (isometric) -->
  <g transform="translate(280, 90)">
    <path d="M0,80 L40,-5 L160,-5 L120,80 Z" fill="none" stroke="#8899aa" stroke-width="0.8" opacity="0.45"/>
    <path d="M160,-5 L160,55 L120,135 L120,80 Z" fill="none" stroke="#8899aa" stroke-width="0.8" opacity="0.35"/>
    <path d="M0,80 L0,135 L120,135 L120,80 Z" fill="none" stroke="#8899aa" stroke-width="0.8" opacity="0.45"/>
    <!-- Box A (amber, bottom-left) -->
    <path d="M4,130 L4,85 L32,70 L32,115 Z" fill="#f59e0b" opacity="0.55" stroke="#b45309" stroke-width="0.4"/>
    <path d="M4,85 L35,68 L63,68 L32,70 Z" fill="#fbbf24" opacity="0.45" stroke="#b45309" stroke-width="0.4"/>
    <path d="M32,70 L63,68 L63,113 L32,115 Z" fill="#d97706" opacity="0.45" stroke="#b45309" stroke-width="0.4"/>
    <!-- Box B (cyan, bottom-right) -->
    <path d="M38,130 L38,95 L60,82 L60,117 Z" fill="#0ea5e9" opacity="0.45" stroke="#0369a1" stroke-width="0.4"/>
    <path d="M60,82 L90,82 L90,117 L60,117 Z" fill="#06b6d4" opacity="0.4" stroke="#0369a1" stroke-width="0.4"/>
    <!-- Box C (purple, bottom-far-right) -->
    <path d="M65,130 L65,100 L85,90 L85,120 Z" fill="#a78bfa" opacity="0.45" stroke="#6d28d9" stroke-width="0.4"/>
    <path d="M85,90 L108,90 L108,120 L85,120 Z" fill="#7c3aed" opacity="0.4" stroke="#6d28d9" stroke-width="0.4"/>
    <!-- Box D (green, stacked on top of A) -->
    <path d="M4,80 L4,50 L28,38 L28,68 Z" fill="#34d399" opacity="0.48" stroke="#059669" stroke-width="0.4"/>
    <path d="M28,38 L58,38 L58,68 L28,68 Z" fill="#10b981" opacity="0.4" stroke="#059669" stroke-width="0.4"/>
    <!-- Box E (pink, stacked on top of B) -->
    <path d="M38,90 L38,65 L55,55 L55,80 Z" fill="#fb7185" opacity="0.45" stroke="#be123c" stroke-width="0.4"/>
    <path d="M55,55 L78,55 L78,80 L55,80 Z" fill="#f43f5e" opacity="0.38" stroke="#be123c" stroke-width="0.4"/>
  </g>
  <!-- ═══ PANEL 3: KAFKA + DATABASE ═══ -->
  <rect x="479" y="72" width="305" height="118" rx="4" fill="#e8f2ff" stroke="#9ab8d8" stroke-width="0.6"/>
  <text x="487" y="86" fill="#6b7280" font-size="7" font-family="monospace">kafka event stream</text>
  <!-- Kafka event blocks -->
  <rect x="487" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.08" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="1.2s" begin="0s" repeatCount="indefinite"/></rect>
  <rect x="504" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.06" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.12;0.04" dur="1.4s" begin="0.15s" repeatCount="indefinite"/></rect>
  <rect x="521" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.1" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.16;0.04" dur="1.1s" begin="0.3s" repeatCount="indefinite"/></rect>
  <rect x="538" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.05" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="1.6s" begin="0.45s" repeatCount="indefinite"/></rect>
  <rect x="555" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.08" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="1.3s" begin="0.6s" repeatCount="indefinite"/></rect>
  <rect x="572" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.06" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.12;0.04" dur="1.5s" begin="0.75s" repeatCount="indefinite"/></rect>
  <rect x="589" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.1" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.16;0.04" dur="1.2s" begin="0.9s" repeatCount="indefinite"/></rect>
  <rect x="606" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.05" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="1.4s" begin="1.05s" repeatCount="indefinite"/></rect>
  <rect x="623" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.08" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="1.1s" begin="1.2s" repeatCount="indefinite"/></rect>
  <rect x="640" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.06" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.12;0.04" dur="1.6s" begin="1.35s" repeatCount="indefinite"/></rect>
  <rect x="657" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.1" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.16;0.04" dur="1.3s" begin="1.5s" repeatCount="indefinite"/></rect>
  <rect x="674" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.05" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="1.5s" begin="1.65s" repeatCount="indefinite"/></rect>
  <rect x="691" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.08" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="1.2s" begin="1.8s" repeatCount="indefinite"/></rect>
  <rect x="708" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.06" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.12;0.04" dur="1.4s" begin="1.95s" repeatCount="indefinite"/></rect>
  <rect x="725" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.1" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.16;0.04" dur="1.1s" begin="2.1s" repeatCount="indefinite"/></rect>
  <rect x="742" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.05" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.1;0.04" dur="1.6s" begin="2.25s" repeatCount="indefinite"/></rect>
  <rect x="759" y="92" width="14" height="24" rx="1.5" fill="#0ea5e9" opacity="0.08" stroke="#9ab8d8" stroke-width="0.25"><animate attributeName="opacity" values="0.04;0.14;0.04" dur="1.3s" begin="2.4s" repeatCount="indefinite"/></rect>
  <!-- Kafka stream line -->
  <line x1="487" y1="104" x2="775" y2="104" stroke="#0ea5e9" stroke-width="0.4" opacity="0.15"/>
  <!-- Database schema label -->
  <text x="487" y="130" fill="#6b7280" font-size="7" font-family="monospace">database schema</text>
  <!-- DB rows -->
  <rect x="487" y="134" width="288" height="8" rx="1.5" fill="#f0f5ff" stroke="#9ab8d8" stroke-width="0.4" opacity="0.6"/>
  <rect x="490" y="136" width="35" height="4" rx="1" fill="#0ea5e9" opacity="0.3"/>
  <rect x="528" y="136" width="55" height="4" rx="1" fill="#b8d0e8" opacity="0.2"/>
  <rect x="586" y="136" width="45" height="4" rx="1" fill="#b8d0e8" opacity="0.18"/>
  <rect x="634" y="136" width="35" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="672" y="136" width="50" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="487" y="144" width="288" height="8" rx="1.5" fill="#f0f5ff" stroke="#9ab8d8" stroke-width="0.4" opacity="0.6"/>
  <rect x="490" y="146" width="35" height="4" rx="1" fill="#0ea5e9" opacity="0.25"/>
  <rect x="528" y="146" width="60" height="4" rx="1" fill="#b8d0e8" opacity="0.2"/>
  <rect x="591" y="146" width="40" height="4" rx="1" fill="#b8d0e8" opacity="0.18"/>
  <rect x="634" y="146" width="30" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="667" y="146" width="55" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="487" y="154" width="288" height="8" rx="1.5" fill="#f0f5ff" stroke="#9ab8d8" stroke-width="0.4" opacity="0.6"/>
  <rect x="490" y="156" width="35" height="4" rx="1" fill="#0ea5e9" opacity="0.3"/>
  <rect x="528" y="156" width="50" height="4" rx="1" fill="#b8d0e8" opacity="0.2"/>
  <rect x="581" y="156" width="48" height="4" rx="1" fill="#b8d0e8" opacity="0.18"/>
  <rect x="632" y="156" width="38" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="673" y="156" width="45" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="487" y="164" width="288" height="8" rx="1.5" fill="#f0f5ff" stroke="#9ab8d8" stroke-width="0.4" opacity="0.6"/>
  <rect x="490" y="166" width="35" height="4" rx="1" fill="#0ea5e9" opacity="0.25"/>
  <rect x="528" y="166" width="58" height="4" rx="1" fill="#b8d0e8" opacity="0.2"/>
  <rect x="589" y="166" width="42" height="4" rx="1" fill="#b8d0e8" opacity="0.18"/>
  <rect x="634" y="166" width="32" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="669" y="166" width="52" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="487" y="174" width="288" height="8" rx="1.5" fill="#f0f5ff" stroke="#9ab8d8" stroke-width="0.4" opacity="0.6"/>
  <rect x="490" y="176" width="35" height="4" rx="1" fill="#0ea5e9" opacity="0.28"/>
  <rect x="528" y="176" width="52" height="4" rx="1" fill="#b8d0e8" opacity="0.2"/>
  <rect x="583" y="176" width="46" height="4" rx="1" fill="#b8d0e8" opacity="0.18"/>
  <rect x="632" y="176" width="36" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <rect x="671" y="176" width="48" height="4" rx="1" fill="#b8d0e8" opacity="0.15"/>
  <!-- Corner accents -->
  <line x1="0" y1="0" x2="35" y2="0" stroke="#0ea5e9" stroke-width="1.5" opacity="0.12"/>
  <line x1="0" y1="0" x2="0" y2="25" stroke="#0ea5e9" stroke-width="1.5" opacity="0.12"/>
  <line x1="800" y1="200" x2="765" y2="200" stroke="#0ea5e9" stroke-width="1.5" opacity="0.12"/>
  <line x1="800" y1="200" x2="800" y2="175" stroke="#0ea5e9" stroke-width="1.5" opacity="0.12"/>
</svg>
</div>

<div class="detail-section">
<h3>Context</h3>
<p class="context-text">Sam's Club, a Walmart division, runs a supply chain spanning domestic trucking and international ocean freight. Fulfilment centres depend on real-time shipment tracking to plan labour and allocate docks, so the tracking platform is operationally load-bearing — when it reports a truck in the wrong state, people are staffed against a delivery that isn't coming.</p>
<br>
<p class="context-text">Separately, distribution centres pack orders using automated boxing algorithms — greedy, brute force, and volume-ordered variants — chosen case by case. Which strategy wins depends on what is being packed, and that varies by centre.</p>
</div>

<div class="detail-section">
<h3>Roles</h3>
<div class="role-split">
  <div class="role-block">
    <div class="role-block-title">Software Engineer</div>
    <div class="role-block-date">July 2022 – August 2023</div>
    Supply chain shipment tracking platform.
  </div>
  <div class="role-block">
    <div class="role-block-title">Software Engineering Intern</div>
    <div class="role-block-date">May 2021 – July 2021</div>
    Boxing algorithm optimisation for distribution centers.
  </div>
</div>
</div>

<div class="detail-section">
<h3>Shipment Tracking Platform</h3>
<p class="section-intro">Joined a team of ten owning Sam's Club's core tracking platform (Java/Spring Boot, MySQL, Kafka), and progressively took ownership of testing, event pipeline reliability, production monitoring, and a greenfield ocean freight initiative.</p>
<div class="work-items">
<div class="work-item">
    <p class="work-item-body"><b>Backend development and production support</b>: Built REST endpoints in Java/Spring Boot as the platform split from a single service into several dedicated ones. Set up XMatters alerting for geotagging failures, handled vulnerability remediation through Snyk and SonarQube, and ran live production investigations alongside fulfilment centre operations staff.</p>
  </div>
  <div class="work-item">
    <p class="work-item-body"><b>Integration testing rollout</b>: Introduced the Karate framework across every team repository as a merge-blocking CI step, with four to five cases per endpoint. Presented the rollout to the wider organisation in a recorded sprint demo.</p>
  </div>
  <div class="work-item">
    <p class="work-item-body"><b>Kafka event deduplication</b>: Truck state events arrived duplicated and sometimes contradictory. Built a Redis-backed deduplication layer suppressing repeats within a rolling window, with retry logic for failed writes.</p>
  </div>
  <div class="work-item">
    <p class="work-item-body"><b>Ocean freight tracking</b>: Sole engineer extending the platform to international shipping — scoping the partner integration, defining the MySQL schema, and designing the target architecture. Analysing the partner's ETA model in Databricks showed a systematic bias near ports, which led to a more accurate model built on historical route data.</p>
  </div>
  </div>
</div>
</div>

<div class="detail-section">
<h3>Boxing Algorithm Optimisation</h3>
<div class="work-items">
<div class="work-item">
    <p class="work-item-body"><b>Benchmarking and analysis</b>: Compared Sam's Club's FASTr algorithm against alternatives used elsewhere in Walmart — a volume-based approach and an extreme-points heuristic — on execution time, volume utilisation, CPU, and heap. Analysis of real production orders in Python showed item size distributions varied substantially between distribution centres, and that no single algorithm was best everywhere.</p>
  </div>
  <div class="work-item">
    <p class="work-item-body"><b>Improved routing</b>: Built an alternative decision tree routing orders to packing algorithms based on item characteristics, and simulated the full production order set against both trees — a roughly 5% gain in volume utilisation. Presented the findings to the staff engineer and engineering manager.</p>
  </div>
</div>
</div>

<div class="detail-section">
<h3>What I took from it</h3>
<p class="context-text">The bin-packing work started as a search for a better algorithm and ended somewhere else. No single strategy won everywhere, because the item size distributions differed enough between distribution centres that the right choice was a property of the centre rather than of the algorithm. The gain came from routing to the existing options well, not from replacing them.</p>
<br>
<p class="context-text">The tracking platform taught the operational half of that. Duplicate and contradictory truck events were not an edge case to be tidied up later — they were what the system actually received, and building for them was most of the work.</p>
</div>

<div class="detail-section">
<h3>Tech stack</h3>
<div class="tech-chips">
  <span class="tech-chip">Java</span>
  <span class="tech-chip">Spring Boot</span>
  <span class="tech-chip">MySQL</span>
  <span class="tech-chip">Apache Kafka</span>
  <span class="tech-chip">Redis</span>
  <span class="tech-chip">Python</span>
  <span class="tech-chip">R</span>
  <span class="tech-chip">Databricks</span>
  <span class="tech-chip">Karate</span>
  <span class="tech-chip">JMeter</span>
  <span class="tech-chip">Snyk</span>
  <span class="tech-chip">SonarQube</span>
  <span class="tech-chip">CI/CD</span>
  <span class="tech-chip">Bin Packing (FFD, BFD, eGLS, GBP)</span>
</div>
</div>
<script>
(function(){
  var isDark=localStorage.getItem('site-dark-mode')==='1';
  var TO_DARK={stops:{'#eff6ff':'#0c1a30','#ffffff':'#050e1c'},fills:{'#eff6ff':'#0c1a30','#e8f2ff':'#0a101e','#f0f5ff':'#0f172a','#b8d0e8':'#1e3a5f','#4b5563':'#64748b','#374151':'#94a3b8','#6b7280':'#475569'},strokes:{'#9ab8d8':'#1e3a5f','#8899aa':'#475569'}};
  var TO_LIGHT={stops:{'#0c1a30':'#eff6ff','#050e1c':'#ffffff'},fills:{'#0c1a30':'#eff6ff','#0a101e':'#e8f2ff','#0f172a':'#f0f5ff','#1e3a5f':'#b8d0e8','#64748b':'#4b5563','#94a3b8':'#374151','#475569':'#6b7280'},strokes:{'#1e3a5f':'#9ab8d8','#475569':'#8899aa'}};
  function applyTheme(map){
    var svg=document.querySelector('#walmart-graphic svg');
    if(!svg)return;
    svg.querySelectorAll('stop').forEach(function(el){var c=el.getAttribute('stop-color');if(map.stops[c])el.setAttribute('stop-color',map.stops[c]);});
    svg.querySelectorAll('[fill]').forEach(function(el){var f=el.getAttribute('fill');if(map.fills[f])el.setAttribute('fill',map.fills[f]);});
    svg.querySelectorAll('[stroke]').forEach(function(el){var s=el.getAttribute('stroke');if(map.strokes[s])el.setAttribute('stroke',map.strokes[s]);});
  }
  if(isDark)applyTheme(TO_DARK);
  var btn=document.getElementById('walmart-page-toggle');
  if(btn)btn.textContent=isDark?'light':'dark';
  window.walmartTogglePage=function(){
    isDark=!isDark;
    localStorage.setItem('site-dark-mode',isDark?'1':'0');
    document.body.classList.toggle('walmart-dark',isDark);
    applyTheme(isDark?TO_DARK:TO_LIGHT);
    var btn=document.getElementById('walmart-page-toggle');
    if(btn)btn.textContent=isDark?'light':'dark';
  };
})();
</script>
