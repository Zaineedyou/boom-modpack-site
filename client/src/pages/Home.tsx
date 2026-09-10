import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Cpu,
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

const packCategories = [
  { key: "modpack", label: "MODPACK", count: "01" },
  { key: "texture", label: "TEXTURE PACK", count: "01" },
  { key: "shader", label: "SHADERPACK", count: "01" },
] as const;

const packs = {
  modpack: [
    { name: "MODPACK V13 BY BOOM", description: "Versi 26.2 untuk dorong FPS setinggi mungkin di mobile launcher. Dibuat untuk main survival tanpa kompromi performa.", badge: "MODPACK", meta: "V26.2 / LOADER 0.19.3 / RUNTIME 25", tone: "dark", link: "https://www.mediafire.com/file/pdxgi2gdyk9wuvr/MP+26.2+FPS×SURVIVAL.zip/file", placeholder: false },
    { name: "MODPACK V14 BY BOOM", description: "Slot modpack berikutnya akan diisi setelah build baru siap diuji.", badge: "MODPACK", meta: "COMING SOON", tone: "dark", link: "#", placeholder: true },
  ],
  texture: [
    { name: "BOOM//PIXEL", description: "Texture pack ringan dengan visual bersih, kontras resource jelas, dan beban render tetap rendah.", badge: "TEXTURE PACK", meta: "WIP / 16×16", tone: "red", link: "#", placeholder: true },
    { name: "BOOM//PIXEL V2", description: "Eksperimen visual berikutnya untuk tampilan mobile yang lebih tajam.", badge: "TEXTURE PACK", meta: "COMING SOON", tone: "red", link: "#", placeholder: true },
  ],
  shader: [
    { name: "BOOM LITE SHADER", description: "Shader ringan untuk menambah atmosfer tanpa mengorbankan target FPS mobile.", badge: "SHADERPACK", meta: "COMING SOON", tone: "dark", link: "#", placeholder: true },
    { name: "BOOM MOBILE FX", description: "Preset shader khusus launcher Android yang masih dalam tahap riset dan tuning.", badge: "SHADERPACK", meta: "COMING SOON", tone: "dark", link: "#", placeholder: true },
  ],
};

const tickerItems = ["BOOST FPS", "MOBILE READY", "LESS LAG", "PLAY LONGER"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof packCategories)[number]["key"]>("modpack");

  const handleDownload = () => {
    setActiveCategory("modpack");
    document.querySelector("#contents")?.scrollIntoView({ behavior: "smooth" });
    toast("KATALOG MODPACK TERBUKA", {
      description: "Pilih versi modpack yang ingin kamu download.",
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
          <button className="nav-download" onClick={handleDownload}>MODPACKS <ArrowUpRight className="size-3.5" /></button>
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
            <span className="status-dot" /> PERFORMANCE MODPACK / MOBILE EDITION
            <span className="kicker-line" />
            ZALITH · POJAV · MOJO
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="side-index">01 <span>/</span> 04</p>
              <h1 className="hero-title reveal-in delay-1">BOOM<span className="title-period">.</span></h1>
              <p className="hero-subtitle reveal-in delay-2">FPS naik tinggi.<br /><em>Main makin lama.</em></p>
              <p className="hero-description reveal-in delay-3">Boom adalah kumpulan modpack Minecraft yang dirancang untuk boost FPS setinggi mungkin di Zalith Launcher, Pojav Launcher, Mojo Launcher, dan launcher mobile lainnya.</p>
              <div className="hero-actions reveal-in delay-3">
                <button className="button-primary" onClick={handleDownload}>LIHAT SEMUA MODPACK <ArrowDownRight className="size-4" /></button>
                <a className="button-ghost" href="#contents">PILIH PACK <ArrowDownRight className="size-4" /></a>
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
            <span>BUILT FOR</span>
            <span className="footer-rule" />
            <span>ZALITH · POJAV · MOJO · ANDROID</span>
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
            <h2>FPS bukan
              <span>bonus.</span>
              <strong>Itu misi utama.</strong>
            </h2>
            <p>Boom dibuat untuk satu target: boost FPS setinggi mungkin pada perangkat mobile. Mod, konfigurasi, dan pilihan visual disusun untuk mengurangi beban render agar Minecraft terasa lebih responsif di launcher Android.</p>
            <div className="statement-signature"><Minus className="size-4" /> ENGINEERED FOR MAXIMUM FPS</div>
          </div>
          <div className="spec-board">
            <div className="board-header"><span>LIVE READOUT</span><span className="board-led"><span className="status-dot" /> ONLINE</span></div>
            <div className="spec-row"><span><Gauge className="size-4" /> TARGET FPS</span><strong>∞<span>+</span></strong></div>
            <div className="spec-row"><span><MemoryStick className="size-4" /> RAM SAVED</span><strong>MAX<span>%</span></strong></div>
            <div className="spec-row"><span><Cpu className="size-4" /> MOBILE BOOST</span><strong>ON<span>↗</span></strong></div>
            <div className="board-foot">* hasil aktual bergantung pada device, renderer, dan konfigurasi launcher</div>
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
            <p className="section-intro">Pisahkan katalog berdasarkan jenis pack. Modpack, texture pack, dan shaderpack punya jalur download masing-masing.</p>
          </div>
          <div className="pack-tabs" role="tablist" aria-label="Kategori isi Boom">
            {packCategories.map((category) => (
              <button key={category.key} className={`pack-tab ${activeCategory === category.key ? "active" : ""}`} onClick={() => setActiveCategory(category.key)} role="tab" aria-selected={activeCategory === category.key}>
                {category.label} <span>{category.count}</span>
              </button>
            ))}
          </div>
          <div className="pack-grid">
            {packs[activeCategory].map((pack, index) => (
              <article className={`pack-card ${pack.tone}`} key={pack.name}>
                <div className="pack-card-top"><span className="mod-number">0{index + 1}</span><span className="mod-badge">{pack.badge}</span></div>
                <div className="pack-icon"><Layers3 className="size-5" /></div>
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
                <div className="pack-card-footer"><span>{pack.meta}</span>{pack.placeholder ? <button onClick={() => handlePlaceholder(`${pack.name} LINK`)}>COMING SOON <ArrowUpRight className="size-3.5" /></button> : <a href={pack.link} target="_blank" rel="noreferrer" className="pack-link">DOWNLOAD <ArrowUpRight className="size-3.5" /></a>}</div>
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
            <div className="section-tag light"><span>04</span> PROFIL PACK</div>
            <h2>APA ITU<br /><span>BOOM?</span></h2>
            <p className="texture-lede">Performance first. Mobile ready.</p>
            <p>Boom adalah proyek modpack Minecraft yang fokus pada peningkatan FPS dan responsivitas di perangkat mobile. Gunakan melalui Zalith Launcher, Pojav Launcher, Mojo Launcher, atau launcher Android lain yang kompatibel.</p>
            <div className="texture-checklist">
              <div><Check className="size-4" /> FPS BOOST SETINGGI MUNGKIN</div>
              <div><Check className="size-4" /> SUPPORT MOBILE LAUNCHER</div>
              <div><Check className="size-4" /> MODPACK TERPISAH PER VERSI</div>
            </div>
            <a className="text-link" href="#contents"><span>LIHAT KATALOG PACK</span><ArrowUpRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="credits" className="credits-section section-pad site-container">
        <div className="credits-header">
          <div className="section-tag"><span>05</span> CONTACT</div>
          <h2 className="section-title">TEMUKAN<br /><em>BOOM</em><br />DI SINI.</h2>
        </div>
        <div className="credits-grid">
          <div className="credit-main"><span>CREATOR / 001</span><strong>BOOM</strong><p>Pembuat modpack · FPS tuning · Mobile optimization</p></div>
          <div className="credit-list">
            <div><span>COMMUNITY</span><a className="contact-value" href="https://chat.whatsapp.com/E7jwnoqvYt0B2z5k4OiF1V?s=cl&p=a&ilr=2" target="_blank" rel="noreferrer">WHATSAPP GROUP ↗</a></div>
            <div><span>INSTAGRAM</span><button className="contact-value" onClick={() => handlePlaceholder("INSTAGRAM BOOM")}>COMING SOON ↗</button></div>
            <div><span>TIKTOK</span><button className="contact-value" onClick={() => handlePlaceholder("TIKTOK BOOM")}>COMING SOON ↗</button></div>
          </div>
        </div>
      </section>

      <footer className="site-footer site-container">
        <div className="footer-brand">BOOM<span>.</span><small>DICIPTAKAN OLEH BOOM</small></div>
        <p>CREATOR / BOOM / PERFORMANCE MODPACK / 2026</p>
        <div className="footer-links"><button onClick={() => handlePlaceholder("INSTAGRAM BOOM")}>IG</button><button onClick={() => handlePlaceholder("TIKTOK BOOM")}>TIKTOK</button><a href="https://chat.whatsapp.com/E7jwnoqvYt0B2z5k4OiF1V?s=cl&p=a&ilr=2" target="_blank" rel="noreferrer">COMMUNITY WA</a><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
