import json, base64
from PIL import Image

# Load all images as base64
files = {
    'logo_kul': ('/home/claude/slides/logo_kul.png', 'png'),
    'logo_imec': ('/home/claude/slides/logo_imec_final.png', 'png'),
    'channels': ('/home/claude/slides/channels_final.jpg', 'jpeg'),
    'seg_all': ('/home/claude/slides/seg_all.jpg', 'jpeg'),
    'napari_seg': ('/home/claude/slides/napari_seg.jpg', 'jpeg'),
    'napari_track': ('/home/claude/slides/napari_track.jpg', 'jpeg'),
    'al_tight': ('/home/claude/slides/al_tight.jpg', 'jpeg'),
    'temporal': ('/home/claude/slides/temporal_tight.jpg', 'jpeg'),
}

b64 = {}
for key, (path, fmt) in files.items():
    with open(path, 'rb') as f:
        b64[key] = f"data:image/{fmt};base64,{base64.b64encode(f.read()).decode()}"
    print(f"{key}: ok")

def I(k):
    return b64[k]

html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

* {{ margin:0; padding:0; box-sizing:border-box; }}
:root {{
  --bg: #06101E;
  --card: #0C1D33;
  --card2: #0F2340;
  --teal: #00E5CC;
  --cyan: #00B4D8;
  --green: #4ADE80;
  --gold: #FACC15;
  --red: #FB7185;
  --txt: #E2EEF5;
  --muted: #7EA8C4;
  --border: rgba(0,229,204,0.12);
}}
@page {{ size: A4; margin: 0; }}
body {{
  font-family: 'Outfit', sans-serif;
  background: var(--bg);
  color: var(--txt);
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}}

/* ── BG EFFECTS ── */
.grain {{
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background-image:
    radial-gradient(ellipse 600px 400px at 85% 5%, rgba(0,229,204,0.08), transparent),
    radial-gradient(ellipse 400px 500px at 10% 90%, rgba(0,180,216,0.06), transparent),
    linear-gradient(rgba(0,229,204,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,204,0.025) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 24px 24px, 24px 24px;
}}

/* ── LAYOUT ── */
.page {{
  position: relative; z-index:1;
  padding: 7mm 9mm 6mm;
  height: 297mm;
  display: flex;
  flex-direction: column;
}}

/* ── HEADER ── */
.hdr {{
  display: flex;
  align-items: center;
  gap: 4mm;
  padding-bottom: 4mm;
  border-bottom: 1.5px solid var(--border);
  margin-bottom: 4mm;
}}
.hdr-logos {{
  display: flex;
  align-items: center;
  gap: 3mm;
  flex-shrink: 0;
}}
.hdr-logos img {{
  height: 11mm;
  object-fit: contain;
}}
.hdr-logos .sep {{
  width: 1px;
  height: 10mm;
  background: var(--border);
}}
.hdr-text {{
  flex: 1;
}}
.hdr-text .eyebrow {{
  font-family: 'JetBrains Mono', monospace;
  font-size: 6pt;
  letter-spacing: 0.25em;
  color: var(--teal);
  text-transform: uppercase;
  margin-bottom: 1mm;
}}
.hdr-text h1 {{
  font-family: 'Instrument Serif', serif;
  font-size: 17.5pt;
  line-height: 1.18;
  font-weight: 400;
}}
.hdr-text h1 em {{
  font-style: italic;
  color: var(--teal);
}}
.hdr-author {{
  font-size: 7.5pt;
  color: var(--muted);
  margin-top: 1.5mm;
}}
.hdr-author strong {{ color: var(--txt); font-weight: 600; }}

/* ── HERO IMAGE STRIP ── */
.hero {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3mm;
  margin-bottom: 4mm;
}}
.hero-panel {{
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border);
}}
.hero-panel img {{
  width: 100%;
  height: 32mm;
  object-fit: cover;
  display: block;
}}
.hero-panel .overlay {{
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(6,16,30,0.92));
  padding: 2mm 3mm;
}}
.hero-panel .overlay .tag {{
  font-family: 'JetBrains Mono', monospace;
  font-size: 5.5pt;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 0.5mm;
}}
.hero-panel .overlay .desc {{
  font-size: 6.5pt;
  color: var(--txt);
  line-height: 1.4;
  font-weight: 300;
}}

/* ── METRICS ── */
.metrics {{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5mm;
  margin-bottom: 4mm;
}}
.m {{
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 3mm;
  text-align: center;
  position: relative;
}}
.m::after {{
  content: '';
  position: absolute;
  top: 0; left: 20%; right: 20%;
  height: 1.5px;
  border-radius: 0 0 4px 4px;
}}
.m:nth-child(1)::after {{ background: var(--teal); }}
.m:nth-child(2)::after {{ background: var(--gold); }}
.m:nth-child(3)::after {{ background: var(--cyan); }}
.m:nth-child(4)::after {{ background: var(--green); }}
.m-val {{
  font-family: 'Instrument Serif', serif;
  font-size: 22pt;
  line-height: 1;
}}
.m:nth-child(1) .m-val {{ color: var(--teal); }}
.m:nth-child(2) .m-val {{ color: var(--gold); }}
.m:nth-child(3) .m-val {{ color: var(--cyan); }}
.m:nth-child(4) .m-val {{ color: var(--green); }}
.m-val sup {{ font-size: 10pt; }}
.m-lbl {{
  font-size: 6pt;
  color: var(--muted);
  margin-top: 1mm;
  line-height: 1.4;
}}

/* ── MIDDLE SECTION: 3 col ── */
.mid3 {{
  display: grid;
  grid-template-columns: 1.1fr 0.9fr 1fr;
  gap: 3mm;
  margin-bottom: 4mm;
  flex: 1;
}}
.crd {{
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}}
.crd-top {{
  padding: 3mm 3.5mm 2mm;
}}
.crd-tag {{
  font-family: 'JetBrains Mono', monospace;
  font-size: 5.5pt;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1mm;
}}
.crd.c-teal .crd-tag {{ color: var(--teal); }}
.crd.c-gold .crd-tag {{ color: var(--gold); }}
.crd.c-green .crd-tag {{ color: var(--green); }}
.crd.c-red .crd-tag {{ color: var(--red); }}
.crd.c-cyan .crd-tag {{ color: var(--cyan); }}
.crd h3 {{
  font-family: 'Instrument Serif', serif;
  font-size: 9pt;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1.5mm;
}}
.crd p, .crd li {{
  font-size: 6.5pt;
  color: var(--muted);
  line-height: 1.55;
}}
.crd img.panel {{
  width: 100%;
  object-fit: cover;
  display: block;
}}
.crd .imgcap {{
  font-size: 5pt;
  color: var(--muted);
  padding: 1mm 3mm;
  background: rgba(0,0,0,0.3);
  font-style: italic;
}}

/* Bars */
.bars {{ display:flex; flex-direction:column; gap:1.8mm; }}
.brow {{ display:flex; align-items:center; gap:1.5mm; }}
.blbl {{ font-size:5.5pt; color:var(--muted); width:21mm; flex-shrink:0; }}
.btrk {{ flex:1; height:4.5px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden; }}
.bfil {{ height:100%; border-radius:3px; }}
.bv {{ font-family:'JetBrains Mono',monospace; font-size:5.5pt; color:var(--teal); width:7mm; text-align:right; flex-shrink:0; }}

/* Results list */
.rlist {{
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5mm;
}}
.rlist li {{
  display: flex;
  align-items: flex-start;
  gap: 1.5mm;
  font-size: 6.2pt;
  color: var(--muted);
  line-height: 1.5;
}}
.rlist li .arr {{ color: var(--gold); flex-shrink:0; font-size:7pt; }}

/* TLX mini grid */
.tlx {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5mm;
}}
.tlx-i {{
  background: rgba(0,229,204,0.04);
  border: 1px solid rgba(0,229,204,0.1);
  border-radius: 4px;
  padding: 1.5mm 2mm;
}}
.tlx-n {{ font-size: 5.5pt; color: var(--muted); }}
.tlx-v {{ font-family: 'JetBrains Mono', monospace; font-size: 9pt; font-weight: 600; }}
.tlx-v.g {{ color: var(--green); }}
.tlx-v.t {{ color: var(--teal); }}

/* ── BOTTOM STRIP ── */
.bot-strip {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3mm;
  margin-bottom: 3mm;
}}
.bot-strip .panel {{
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
  position: relative;
}}
.bot-strip .panel img {{
  width: 100%;
  height: 28mm;
  object-fit: cover;
  display: block;
}}
.bot-strip .panel .overlay {{
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(6,16,30,0.9));
  padding: 1.5mm 3mm;
}}
.bot-strip .panel .overlay .tag {{
  font-family: 'JetBrains Mono', monospace;
  font-size: 5pt;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
}}
.bot-strip .panel .overlay .desc {{
  font-size: 6pt;
  color: var(--txt);
  font-weight: 300;
  line-height: 1.4;
}}

/* ── FOOTER ── */
.ftr {{
  border-top: 1px solid var(--border);
  padding-top: 2.5mm;
  display: flex;
  justify-content: space-between;
  align-items: center;
}}
.ftr-l {{
  font-size: 6.5pt;
  color: var(--muted);
}}
.ftr-l strong {{ color: var(--txt); }}
.ftr-tags {{
  display: flex;
  gap: 1.5mm;
  flex-wrap: wrap;
  justify-content: flex-end;
}}
.ftr-tags span {{
  background: rgba(0,229,204,0.08);
  border: 1px solid rgba(0,229,204,0.15);
  border-radius: 20px;
  padding: 0.8mm 2.5mm;
  font-size: 5.5pt;
  color: var(--teal);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.04em;
}}
</style>
</head>
<body>
<div class="grain"></div>

<div class="page">

  <!-- ═══ HEADER ═══ -->
  <div class="hdr">
    <div class="hdr-logos">
      <img src="{I('logo_kul')}" alt="KU Leuven"/>
      <div class="sep"></div>
      <img src="{I('logo_imec')}" alt="imec"/>
    </div>
    <div class="hdr-text">
      <div class="eyebrow">Master's Thesis · 2024–2025</div>
      <h1>A Deep Learning Powered Platform for <em>Multimodal Analysis</em> of Cellular Dynamics</h1>
      <div class="hdr-author"><strong>Prateek Grover</strong> &nbsp;·&nbsp; MSc Computer Science, KU Leuven &nbsp;·&nbsp; imec Life Sciences, Leuven</div>
    </div>
  </div>

  <!-- ═══ HERO IMAGES ═══ -->
  <div class="hero">
    <div class="hero-panel">
      <img src="{I('channels')}" alt="Multimodal data" style="object-position:center;"/>
      <div class="overlay">
        <div class="tag">Multimodal Input</div>
        <div class="desc">Nuclei stain (blue) · Cytoplasm stain (green) · Impedance heatmap (0–1 MΩ)</div>
      </div>
    </div>
    <div class="hero-panel">
      <img src="{I('napari_seg')}" alt="Platform" style="object-position: center 60%;"/>
      <div class="overlay">
        <div class="tag">Napari Plugin Platform</div>
        <div class="desc">Deep learning segmentation with per-ROI impedance overlays</div>
      </div>
    </div>
  </div>

  <!-- ═══ METRICS ═══ -->
  <div class="metrics">
    <div class="m">
      <div class="m-val">0.89</div>
      <div class="m-lbl">AP@0.1 IoU after<br/>active-learning loop</div>
    </div>
    <div class="m">
      <div class="m-val">66<sup>%</sup></div>
      <div class="m-lbl">Reduction in fluorescence<br/>microscopy usage</div>
    </div>
    <div class="m">
      <div class="m-val">0.86</div>
      <div class="m-lbl">Instance tracking precision<br/>with impedance guidance</div>
    </div>
    <div class="m">
      <div class="m-val">7.8</div>
      <div class="m-lbl">NASA TLX performance<br/>/10 from 6 domain experts</div>
    </div>
  </div>

  <!-- ═══ 3-COL DETAIL ═══ -->
  <div class="mid3">

    <!-- Col 1: Active Learning -->
    <div class="crd c-teal">
      <div class="crd-top">
        <div class="crd-tag">Human-in-the-Loop Active Learning</div>
        <h3>Segmentation Precision Scales with Fewer Labels</h3>
        <div class="bars" style="margin-top:1.5mm;">
          <div class="brow"><span class="blbl">0% pretrained</span><div class="btrk"><div class="bfil" style="width:63%;background:rgba(0,229,204,0.3);"></div></div><span class="bv">0.56</span></div>
          <div class="brow"><span class="blbl">10% labelled</span><div class="btrk"><div class="bfil" style="width:71%;background:rgba(0,229,204,0.45);"></div></div><span class="bv">0.63</span></div>
          <div class="brow"><span class="blbl">25% labelled</span><div class="btrk"><div class="bfil" style="width:76%;background:rgba(0,229,204,0.6);"></div></div><span class="bv">0.68</span></div>
          <div class="brow"><span class="blbl">50% labelled</span><div class="btrk"><div class="bfil" style="width:84%;background:rgba(0,229,204,0.75);"></div></div><span class="bv">0.75</span></div>
          <div class="brow"><span class="blbl">100% labelled</span><div class="btrk"><div class="bfil" style="width:100%;background:linear-gradient(90deg,#00E5CC,#4ADE80);"></div></div><span class="bv">0.89</span></div>
        </div>
        <p style="margin-top:2mm;font-size:6pt;">Pixel correction effort dropped from ~95% to ~35% as model improved across iterations.</p>
      </div>
      <img class="panel" src="{I('al_tight')}" style="height:24mm; object-position:center;" alt="Active learning"/>
      <div class="imgcap">Raw sample → coarse ConvNet prediction → hand-corrected mask per iteration</div>
    </div>

    <!-- Col 2: Key Findings -->
    <div class="crd c-gold">
      <div class="crd-top">
        <div class="crd-tag">Key Findings</div>
        <h3>Impedance Tracks Cell Proliferation</h3>
        <ul class="rlist" style="margin-top:1.5mm;">
          <li><span class="arr">→</span>Impedance rose 0.076 → 0.139 MΩ as surface area grew 17,854 → 32,480 μm² over 6 days</li>
          <li><span class="arr">→</span>Reducing fluorescence by 66% maintained 0.86 precision — viable minimally invasive workflow</li>
          <li><span class="arr">→</span>Impedance alone matched pretrained baseline; fusion with microscopy maximises gains</li>
          <li><span class="arr">→</span>P5 estimated 80–85% correct associations on HBMVEC data; P6 confirmed improved segmentation over prior tools</li>
        </ul>
      </div>
      <img class="panel" src="{I('temporal')}" style="height:28mm; object-position:top;" alt="Temporal analysis"/>
      <div class="imgcap">Chondrocyte proliferation over 6 days: microscopy, masks & impedance time-series</div>
    </div>

    <!-- Col 3: Usability -->
    <div class="crd c-green">
      <div class="crd-top">
        <div class="crd-tag">Usability · NASA TLX (n=6)</div>
        <h3>Low Cognitive Load, High Performance</h3>
        <div class="tlx" style="margin-top:1.5mm;">
          <div class="tlx-i"><div class="tlx-n">Mental Demand</div><div class="tlx-v t">3.9<span style="font-size:5pt;color:var(--muted);"> /10</span></div></div>
          <div class="tlx-i"><div class="tlx-n">Performance</div><div class="tlx-v g">7.8<span style="font-size:5pt;color:var(--muted);"> /10</span></div></div>
          <div class="tlx-i"><div class="tlx-n">Effort</div><div class="tlx-v t">3.9<span style="font-size:5pt;color:var(--muted);"> /10</span></div></div>
          <div class="tlx-i"><div class="tlx-n">Frustration</div><div class="tlx-v g">2.9<span style="font-size:5pt;color:var(--muted);"> /10</span></div></div>
        </div>
        <p style="margin-top:2mm;font-size:6pt;">6 experts from Bioscience Eng., Bio-nanotech, Biotechnology & Materials Science tested all modules across 3 phases.</p>
        <p style="margin-top:1mm;font-size:6pt;">First-time users found the tool intuitive and expressed confidence completing full workflows independently.</p>
      </div>
      <img class="panel" src="{I('napari_track')}" style="height:24mm; object-position: center 60%;" alt="Cell tracking"/>
      <div class="imgcap">CellToCellAssociation — automated time-lapse tracking with confidence scoring</div>
    </div>

  </div>

  <!-- ═══ BOTTOM IMAGE STRIP ═══ -->
  <div class="bot-strip">
    <div class="panel">
      <img src="{I('seg_all')}" alt="Segmentation results" style="object-position:center;"/>
      <div class="overlay">
        <div class="tag">Segmentation Results</div>
        <div class="desc">Fine-tuned CellPose on chondrocytes (left) and osteoblasts (right)</div>
      </div>
    </div>
    <div class="panel">
      <img src="{I('channels')}" alt="Channels" style="object-position:center 30%;"/>
      <div class="overlay">
        <div class="tag">Custom Multimodal Dataset</div>
        <div class="desc">3 cell lines on HD-MEA chips · paired microscopy + impedance · no public datasets exist</div>
      </div>
    </div>
  </div>

  <!-- ═══ FOOTER ═══ -->
  <div class="ftr">
    <div class="ftr-l"><strong>Prateek Grover</strong> &nbsp;·&nbsp; MSc Computer Science, KU Leuven &nbsp;·&nbsp; imec Life Sciences Dept., Leuven</div>
    <div class="ftr-tags">
      <span>Deep Learning</span><span>Bio-imaging</span><span>Napari</span>
      <span>Active Learning</span><span>Cellpose</span><span>HD-MEA</span><span>HCI</span>
    </div>
  </div>

</div>
</body>
</html>'''

with open('/home/claude/thesis_v3.html', 'w') as f:
    f.write(html)
print(f"HTML: {len(html)//1024}KB")