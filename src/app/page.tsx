import Link from "next/link";
import { BookOpen, Compass, Flame, GraduationCap, Sparkles, Star, Trophy } from "lucide-react";

const subjects = [
  { icon: "➗", title: "Matematika", detail: "Shakllar, sonlar va mantiq", color: "violet", href: "/dars/narsalarning-xossalari", status: "Boshlash mumkin" },
  { icon: "🔬", title: "Tabiiy fanlar", detail: "Atrofimizdagi olam", color: "mint", href: "#", status: "Tez orada" },
  { icon: "📚", title: "Ona tili", detail: "So‘zlar va hikoyalar", color: "peach", href: "#", status: "Tez orada" },
];

export default function Home() {
  return <main className="shell">
    <header className="topbar">
      <Link href="/" className="brand"><span className="brand-mark">✦</span><span><b>Bilim Olami</b><small>3D INTERAKTIV TA'LIM</small></span></Link>
      <nav><a href="#fanlar">Fanlar</a><a href="#sayohat">Sayohat</a><button className="profile">👦 <span>O‘quvchi</span></button></nav>
    </header>

    <section className="welcome">
      <div className="welcome-copy">
        <div className="eyebrow"><Sparkles size={15}/> BILIM OLAMIGA XUSH KELIBSAN</div>
        <h1>Har bir dars —<br/><em>yangi sarguzasht!</em></h1>
        <p>O‘rgan, tajriba qil, o‘yinlarni yut va bilim yulduzlarini yig‘.</p>
        <Link className="primary-btn" href="/dars/narsalarning-xossalari">Sayohatni boshlash <span>→</span></Link>
        <div className="welcome-meta"><span>⭐ Qiziqarli darslar</span><span>🧩 Interaktiv mashqlar</span><span>🏆 Yutuqlar</span></div>
      </div>
      <div className="scene" aria-label="Ta'lim olami tasviri">
        <div className="sun">☀️</div><div className="cloud c1"></div><div className="cloud c2"></div>
        <div className="planet">🪐</div><div className="hill hill-back"></div><div className="hill hill-front"></div>
        <div className="mascot"><div className="antenna"></div><div className="robot-face"><i></i><i></i><b></b></div><div className="robot-body">✦</div></div>
        <span className="float-shape f1">🔵</span><span className="float-shape f2">🔺</span><span className="float-shape f3">🟨</span>
        <div className="scene-label">ROBO SIZNI KUTYAPTI!</div>
      </div>
    </section>

    <section className="stats-row">
      <div className="stat"><span className="stat-icon gold"><Star/></span><div><small>Yig‘ilgan yulduzlar</small><b id="stars">0</b></div></div>
      <div className="stat"><span className="stat-icon purple"><Trophy/></span><div><small>O‘tilgan darslar</small><b id="lessons">0</b></div></div>
      <div className="stat"><span className="stat-icon orange"><Flame/></span><div><small>O‘rganish ketma-ketligi</small><b>1 kun</b></div></div>
    </section>

    <section className="section" id="fanlar">
      <div className="section-heading"><div><div className="eyebrow">O‘ZINGGA MOSINI TANLA</div><h2>Bilim sayohating</h2></div><span className="grade-pill"><GraduationCap size={16}/> 1-sinf</span></div>
      <div className="subject-grid">{subjects.map(s=><article className={`subject-card ${s.color}`} key={s.title}>
        <div className="subject-icon">{s.icon}</div><span className="subject-status">{s.status}</span><h3>{s.title}</h3><p>{s.detail}</p>
        {s.href !== "#" ? <Link href={s.href} className="card-link">Mavzularni ko‘rish <span>→</span></Link> : <span className="card-link disabled">Tayyorlanmoqda</span>}
      </article>)}</div>
    </section>

    <section className="journey" id="sayohat"><div><div className="eyebrow"><Compass size={14}/> SIZNING YO‘LINGIZ</div><h2>Har bir yulduz — yangi bilim</h2><p>Mavzularni bajarganingiz sari yangi bosqichlar ochiladi.</p></div><div className="journey-path"><span className="path-node done">★</span><span className="path-line"></span><span className="path-node current">2</span><span className="path-line"></span><span className="path-node">3</span><span className="path-line"></span><span className="path-node">🏆</span></div></section>
    <footer><span>✦ Bilim Olami</span><span>Bilim olish — katta sarguzasht.</span></footer>
  </main>;
}
