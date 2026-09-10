import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Cpu,
  Download,
  Gauge,
  Layers3,
  Menu,
  MemoryStick,
  Minus,
  MousePointer2,
  Radio,
  X,
} from "lucide-react";

const STORAGE = "/manus-storage";

const packs = [
  { name: "BOOM PERFORMANCE", description: "Modpack utama untuk dunia Minecraft yang lebih responsif, ringan, dan tetap seru dijelajahi.", badge: "MODPACK", meta: "BUILD 00.1", tone: "dark" },
  { name: "BOOM//PIXEL", description: "Texture pack eksperimental dengan detail lebih bersih dan kontras yang lebih mudah dibaca.", badge: "TEXTURE PACK", meta: "WIP / 16×16", tone: "red" },
];

const tickerItems = ["LESS LAG", "MORE WORLD", "NO BLOAT", "JUST PLAY"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    toast("BUILD 00.1 MASIH DI LAB", {
      description: "Link download akan dibuka saat public release siap.",
      icon: <Radio className="size-4" />,
    });
  };

  const handlePlaceholder = (label: string) => {
    toast(`${label} SEGERA HADIR`, {
      description: "Ini masih placeholder — struktur situsnya sudah siap menerima konten final.",
    });
  };

  return (
    <main className="boom-site min-h-screen overflow-hidden bg-ink text-paper">
      <header className="site-nav">
        <a href="#top" className="brand-lockup" aria-label="Boom home">
          <span className="brand-mark">B</span>
          <span>
            <strong>BOOM</strong>
            <small>PERFORMANCE MODPACK</small>
          </span>
        </a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navigasi utama">
          <a href="#why" onClick={() => setMenuOpen(false)}>WHY BOOM</a>
          <a href="#contents" onClick={() => setMenuOpen(false)}>CONTENTS</a>
          <a href="#credits" onClick={() => setMenuOpen(false)}>CREDITS</a>
          <button className="nav-download" onClick={handleDownload}>DOWNLOAD <ArrowUpRight className="size-3.5" /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka navigasi" aria-expanded={menuOpen}>
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-scanlines" aria-hidden="true" />
        <div className="hero-content site-container">
          <div className="hero-kicker reveal-in">
            <span className="status-dot" /> BUILD 00.1 / EXPERIMENTAL
            <span className="kicker-line" />
            JAVA EDITION
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="side-index">01 <span>/</span> 04</p>
              <h1 className="hero-title reveal-in delay-1">BOOM<span className="title-period">.</span></h1>
              <p className="hero-subtitle reveal-in delay-2">Main lebih jauh.<br /><em>Render lebih waras.</em></p>
              <p className="hero-description reveal-in delay-3">Modpack Minecraft yang dibangun untuk satu hal: menjaga dunia tetap hidup tanpa membuat PC-mu ikut meledak.</p>
              <div className="hero-actions reveal-in delay-3">
                <button className="button-primary" onClick={handleDownload}><Download className="size-4" /> DOWNLOAD BUILD 00.1</button>
                <a className="button-ghost" href="#contents">LIHAT ISI <ArrowDownRight className="size-4" /></a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img src={`${STORAGE}/boom-glyph_0fefc5df.png`} alt="" className="boom-glyph" />
              <div className="glyph-label">PERF /<br />FIRST</div>
              <div className="glyph-crosshair crosshair-a" />
              <div className="glyph-crosshair crosshair-b" />
              <span className="hero-vertical-text">NO BLOAT · NO EXCUSES · JUST PLAY</span>
            </div>
          </div>
          <div className="hero-footer reveal-in delay-3">
            <span>OPTIMIZED FOR</span>
            <span className="footer-rule" />
            <span>LOW-END TO MID-RANGE SYSTEMS</span>
            <span className="footer-rule" />
            <span className="hero-scroll"><MousePointer2 className="size-3" /> SCROLL TO DETONATE</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Boom principles">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item} <i>✳</i></span>
          ))}
        </div>
      </div>

      <section id="why" className="why-section site-container section-pad">
        <div className="section-tag"><span>02</span> THE THESIS</div>
        <div className="why-layout">
          <div className="why-statement">
            <h2>Bukan modpack
              <span>terbesar.</span>
              <strong>Yang paling terasa.</strong>
            </h2>
            <p>Kami tidak mengejar daftar mod sepanjang chunk border. Boom memilih mod yang bekerja di belakang layar supaya kamu bisa fokus pada hal yang penting: membuat markas, tersesat, dan pulang membawa cerita.</p>
            <div className="statement-signature"><Minus className="size-4" /> ENGINEERED FOR FLOW</div>
          </div>
          <div className="spec-board">
            <div className="board-header"><span>LIVE READOUT</span><span className="board-led"><span className="status-dot" /> ONLINE</span></div>
            <div className="spec-row"><span><Gauge className="size-4" /> TARGET FPS</span><strong>60<span>+</span></strong></div>
            <div className="spec-row"><span><MemoryStick className="size-4" /> RAM SAVED</span><strong>38<span>%</span></strong></div>
            <div className="spec-row"><span><Cpu className="size-4" /> LOAD TIME</span><strong>−42<span>%</span></strong></div>
            <div className="board-foot">* angka placeholder — tuning final menyusul public test</div>
          </div>
        </div>
      </section>

      <section id="contents" className="contents-section section-pad">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <div className="section-tag"><span>03</span> THE LOADOUT</div>
              <h2 className="section-title">LIST <em>BOOM</em></h2>
            </div>
            <p className="section-intro">Pilih paket yang ingin kamu cek. Link download dan halaman detail masih placeholder untuk versi pertama.</p>
          </div>
          <div className="pack-grid">
            {packs.map((pack, index) => (
              <article className={`pack-card ${pack.tone}`} key={pack.name}>
                <div className="pack-card-top"><span className="mod-number">0{index + 1}</span><span className="mod-badge">{pack.badge}</span></div>
                <div className="pack-icon"><Layers3 className="size-5" /></div>
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
                <div className="pack-card-footer"><span>{pack.meta}</span><button onClick={() => handlePlaceholder(`${pack.name} LINK`)}>OPEN LINK <ArrowUpRight className="size-3.5" /></button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="texture-section section-pad">
        <div className="site-container texture-layout">
          <div className="texture-art">
            <div className="texture-art-grid" />
            <img src={`${STORAGE}/boom-glyph_0fefc5df.png`} alt="" />
            <div className="texture-stamp">TEXTURE<br />PACK<br /><strong>WIP</strong></div>
          </div>
          <div className="texture-copy">
            <div className="section-tag light"><span>04</span> THE SKIN</div>
            <h2>BOOM<span>//</span>PIXEL</h2>
            <p className="texture-lede">Vanilla, tapi ditarik sedikit lebih kencang.</p>
            <p>Texture pack bawaan masih berupa placeholder visual. Arahnya: blok yang punya karakter, UI yang tidak berteriak, dan kontras yang membuat resource penting langsung terbaca.</p>
            <div className="texture-checklist">
              <div><Check className="size-4" /> 16×16 BASE RESOLUTION</div>
              <div><Check className="size-4" /> LOW VISUAL NOISE</div>
              <div><Check className="size-4" /> REDSTONE READABILITY</div>
            </div>
            <button className="text-link" onClick={() => handlePlaceholder("TEXTURE PREVIEW")}><span>PREVIEW CONCEPT</span><ArrowUpRight className="size-4" /></button>
          </div>
        </div>
      </section>

      <section id="credits" className="credits-section section-pad site-container">
        <div className="credits-header">
          <div className="section-tag"><span>05</span> THE PEOPLE</div>
          <h2 className="section-title">DIBUAT OLEH<br /><em>TANGAN-TANGAN</em><br />YANG TERLALU PEDULI.</h2>
        </div>
        <div className="credits-grid">
          <div className="credit-main"><span>LEAD / 001</span><strong>STUDIO PLACEHOLDER</strong><p>Direction · Curation · Tuning</p></div>
          <div className="credit-list">
            <div><span>PERFORMANCE PASS</span><strong>OPEN-SOURCE CONTRIBUTORS</strong></div>
            <div><span>VISUAL SYSTEM</span><strong>BOOM//PIXEL UNIT</strong></div>
            <div><span>PLAYTEST SIGNAL</span><strong>THE COMMUNITY</strong></div>
          </div>
        </div>
        <div className="final-cta">
          <div><span className="status-dot" /> NEXT TRANSMISSION: PUBLIC RELEASE</div>
          <button className="button-primary" onClick={handleDownload}>KIRIMKAN SAYA KE BUILD <ArrowUpRight className="size-4" /></button>
        </div>
      </section>

      <footer className="site-footer site-container">
        <div className="footer-brand">BOOM<span>.</span><small>DICIPTAKAN OLEH BOOM</small></div>
        <p>CREATOR / BOOM / PERFORMANCE MODPACK / 2026</p>
        <div className="footer-links"><button onClick={() => handlePlaceholder("INSTAGRAM BOOM")}>IG</button><button onClick={() => handlePlaceholder("TIKTOK BOOM")}>TIKTOK</button><button onClick={() => handlePlaceholder("SALURAN WHATSAPP")}>SALURAN WA</button><button onClick={() => handlePlaceholder("GRUP COMMUNITY")}>COMMUNITY</button><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
