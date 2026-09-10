import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Cpu,
  Download,
  Gauge,
  Layers3,
  Menu,
  MemoryStick,
  Minus,
  MousePointer2,
  Radio,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const STORAGE = "/manus-storage";

type Mod = {
  name: string;
  description: string;
  category: "system" | "world" | "visuals";
  badge: string;
};

const mods: Mod[] = [
  { name: "Sodium", description: "Render pipeline yang lebih tajam tanpa drama.", category: "system", badge: "CORE" },
  { name: "Lithium", description: "Tick logic dipangkas. Dunia bergerak lebih ringan.", category: "system", badge: "CORE" },
  { name: "FerriteCore", description: "RAM footprint lebih kecil, ruang main lebih lega.", category: "system", badge: "MEM" },
  { name: "ModernFix", description: "Fix yang terasa sebelum kamu sempat mengeluh.", category: "system", badge: "FIX" },
  { name: "Terralith", description: "Terrain baru, budget performa tetap waras.", category: "world", badge: "WORLD" },
  { name: "YUNG's Suite", description: "Struktur vanilla yang akhirnya pantas difoto.", category: "world", badge: "WORLD" },
  { name: "Entity Culling", description: "Kalau tidak terlihat, tidak perlu dirender.", category: "visuals", badge: "FPS" },
  { name: "ImmediatelyFast", description: "UI dan partikel bergerak tanpa menahan napas.", category: "visuals", badge: "FPS" },
  { name: "BOOM//PIXEL", description: "Texture pass eksperimental. Detail naik, noise turun.", category: "visuals", badge: "PACK" },
];

const filters = [
  { key: "all", label: "SEMUA", count: "09" },
  { key: "system", label: "SYSTEM", count: "04" },
  { key: "world", label: "WORLD", count: "02" },
  { key: "visuals", label: "VISUALS", count: "03" },
] as const;

const tickerItems = ["LESS LAG", "MORE WORLD", "NO BLOAT", "JUST PLAY"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["key"]>("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleMods = useMemo(
    () => activeFilter === "all" ? mods : mods.filter((mod) => mod.category === activeFilter),
    [activeFilter],
  );

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
              <h2 className="section-title">ISI <em>BOOM</em></h2>
            </div>
            <p className="section-intro">Setiap mod punya pekerjaan. Tidak ada penumpang gelap. Daftar di bawah adalah placeholder curated list untuk versi pertama.</p>
          </div>
          <div className="filter-bar" role="tablist" aria-label="Filter isi modpack">
            {filters.map((filter) => (
              <button key={filter.key} className={`filter-button ${activeFilter === filter.key ? "active" : ""}`} onClick={() => setActiveFilter(filter.key)} role="tab" aria-selected={activeFilter === filter.key}>
                {filter.label} <span>{filter.count}</span>
              </button>
            ))}
            <span className="filter-note"><Sparkles className="size-3" /> 09 MODULES / 01 MISSION</span>
          </div>
          <div className="mod-grid">
            {visibleMods.map((mod, index) => (
              <article className="mod-card" key={mod.name}>
                <div className="mod-card-top"><span className="mod-number">0{mods.indexOf(mod) + 1}</span><span className="mod-badge">{mod.badge}</span></div>
                <div className="mod-icon"><Zap className="size-5" /></div>
                <h3>{mod.name}</h3>
                <p>{mod.description}</p>
                <div className="mod-card-footer"><span>{mod.category.toUpperCase()}</span><ChevronRight className="size-4" /></div>
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
        <div className="footer-brand">BOOM<span>.</span></div>
        <p>PERFORMANCE MODPACK / BUILD 00.1 / 2026</p>
        <div className="footer-links"><button onClick={() => handlePlaceholder("DISCORD")}>DISCORD</button><button onClick={() => handlePlaceholder("CHANGELOG")}>CHANGELOG</button><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
