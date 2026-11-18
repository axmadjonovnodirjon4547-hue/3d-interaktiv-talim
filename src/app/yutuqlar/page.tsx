"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Award, Flame, Gem, Medal, Sparkles, Star, Trophy } from "lucide-react";

type Board = "class" | "group" | "school";
type Learner = { name: string; grade: string; stars: number; avatar: string; trend: string };

const boards: Record<Board, Learner[]> = {
  class: [
    { name: "Madina Karimova", grade: "5-A sinf", stars: 1280, avatar: "👩🏻‍🚀", trend: "+120" },
    { name: "Ali Valiyev", grade: "5-A sinf", stars: 1160, avatar: "🧑🏻‍🔬", trend: "+95" },
    { name: "Aziza Rahimova", grade: "5-A sinf", stars: 1040, avatar: "👩🏻‍🎨", trend: "+80" },
    { name: "Sardor Ismoilov", grade: "5-A sinf", stars: 920, avatar: "🧑🏻‍🚀", trend: "+65" },
  ],
  group: [
    { name: "Zukkolar", grade: "5-A guruh", stars: 4820, avatar: "🚀", trend: "+340" },
    { name: "Bilimdonlar", grade: "5-B guruh", stars: 4510, avatar: "🪐", trend: "+290" },
    { name: "Kashfiyotchilar", grade: "5-C guruh", stars: 4190, avatar: "🔭", trend: "+260" },
    { name: "Yulduzlar", grade: "5-D guruh", stars: 3860, avatar: "✨", trend: "+210" },
  ],
  school: [
    { name: "Registon akademiyasi", grade: "Toshkent", stars: 28450, avatar: "🏛️", trend: "+1 820" },
    { name: "Bilim maskani", grade: "Samarqand", stars: 26720, avatar: "🏰", trend: "+1 640" },
    { name: "Ziyo maktabi", grade: "Farg‘ona", stars: 24980, avatar: "🎓", trend: "+1 410" },
    { name: "Kelajak maktabi", grade: "Andijon", stars: 23100, avatar: "🌟", trend: "+1 280" },
  ],
};

const medals = [
  { name: "Birinchi qadam", desc: "Birinchi darsni tugat", icon: "🚀", tone: "blue", progress: "1/1", earned: true },
  { name: "Aniq nishon", desc: "5 ta testni xatosiz yech", icon: "🎯", tone: "gold", progress: "3/5", earned: false },
  { name: "Bilim izlovchi", desc: "10 ta darsni yakunla", icon: "📚", tone: "violet", progress: "7/10", earned: false },
  { name: "Tinimsiz", desc: "7 kun ketma-ket o‘qi", icon: "🔥", tone: "orange", progress: "4/7", earned: false },
  { name: "Fan ustasi", desc: "Bir fandagi barcha mavzularni tugat", icon: "🧠", tone: "mint", progress: "2/8", earned: false },
  { name: "Chempion", desc: "Haftalik reytingda top-3 ga kir", icon: "👑", tone: "pink", progress: "Top 10", earned: false },
];

export default function AchievementsPage() {
  const [board, setBoard] = useState<Board>("class");
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  const [showAll, setShowAll] = useState(false);
  const leaders = useMemo(() => boards[board], [board]);

  return (
    <main className="ach-shell">
      <header className="ach-topbar">
        <Link href="/" className="ach-back"><ArrowLeft size={17} /> Bosh sahifa</Link>
        <Link href="/" className="ach-brand"><span>✦</span> 3D Interaktiv Ta’lim</Link>
        <div className="ach-user"><span>👦</span><b>O‘quvchi</b></div>
      </header>

      <section className="ach-hero">
        <div className="ach-hero-copy">
          <div className="ach-kicker"><Sparkles size={15} /> BILIMINGNI NAMOYON QIL</div>
          <h1>Har bir yutuq<br /><em>seni yuksaltiradi!</em></h1>
          <p>Yulduzlarni yig‘, yangi medallarni qo‘lga kirit va bilimdonlar safida o‘z o‘rningni top.</p>
          <a className="ach-primary" href="#medallar">Medallarimni ko‘r <span>→</span></a>
        </div>
        <div className="ach-trophy-scene" aria-label="3D trophy illustration">
          <div className="ach-orbit orbit-one" /><div className="ach-orbit orbit-two" />
          <span className="ach-spark spark-a">✦</span><span className="ach-spark spark-b">✧</span>
          <div className="ach-big-trophy">🏆</div>
          <div className="ach-crystal crystal-a">💎</div><div className="ach-crystal crystal-b">⭐</div>
          <div className="ach-scene-caption">SENING G‘ALABANG SHU YERDAN BOSHLANADI</div>
        </div>
      </section>

      <section className="ach-summary">
        <article className="ach-stat-card star-stat"><span className="ach-stat-icon"><Star fill="currentColor" /></span><div><small>Jami yulduzlar</small><b>1 250</b><em>+120 shu hafta</em></div></article>
        <article className="ach-stat-card rank-stat"><span className="ach-stat-icon"><Trophy /></span><div><small>Sinf reytingi</small><b>3-o‘rin</b><em>2 pog‘ona yuqoriga</em></div></article>
        <article className="ach-stat-card streak-stat"><span className="ach-stat-icon"><Flame fill="currentColor" /></span><div><small>O‘qish ketma-ketligi</small><b>4 kun</b><em>Maqsad: 7 kun</em></div></article>
        <article className="ach-stat-card medal-stat"><span className="ach-stat-icon"><Award /></span><div><small>Qo‘lga kiritilgan</small><b>3 medal</b><em>6 ta yangi maqsad</em></div></article>
      </section>

      <section className="ach-content-grid">
        <div className="ach-panel ach-leaderboard">
          <div className="ach-panel-heading"><div><div className="ach-kicker">SOG‘LOM RAQOBAT</div><h2>🏆 Bilimdonlar reytingi</h2></div><span className="ach-live-pill">● HAFTALIK</span></div>
          <div className="ach-controls">
            <div className="ach-tabs" role="tablist" aria-label="Reyting turi">
              <button className={board === "class" ? "active" : ""} onClick={() => setBoard("class")}>Sinf</button>
              <button className={board === "group" ? "active" : ""} onClick={() => setBoard("group")}>Guruh</button>
              <button className={board === "school" ? "active" : ""} onClick={() => setBoard("school")}>Maktab</button>
            </div>
            <select value={period} onChange={e => setPeriod(e.target.value as "week" | "month" | "all")} aria-label="Reyting davri">
              <option value="week">Haftalik</option><option value="month">Oylik</option><option value="all">Umumiy</option>
            </select>
          </div>
          <div className="ach-leaders">
            {leaders.map((person, index) => (
              <div className={`ach-leader-row ${index === 0 ? "first" : ""}`} key={person.name}>
                <span className={`ach-place place-${index + 1}`}>{index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}</span>
                <span className="ach-avatar">{person.avatar}</span>
                <div className="ach-person"><b>{person.name}</b><small>{person.grade}</small></div>
                <span className="ach-trend">↗ {person.trend}</span>
                <b className="ach-score">{person.stars.toLocaleString("uz-UZ")} ⭐</b>
              </div>
            ))}
          </div>
          <div className="ach-note">Ko‘rsatilgan reyting va ballar hozircha demo ma’lumotlar. Haqiqiy reyting o‘quvchi akkauntlari va platforma bazasi ulangach hisoblanadi.</div>
        </div>

        <aside className="ach-panel ach-quest">
          <div className="ach-kicker">BUGUNGI MISSIYA</div>
          <div className="ach-quest-art"><div className="quest-glow" /><span>🧭</span><i>✦</i></div>
          <h3>Bilim izlovchi</h3>
          <p>Bugun yana 2 ta mashqni bajargin va yangi yulduzlarni qo‘lga kirit!</p>
          <div className="ach-progress-label"><span>Kunlik maqsad</span><b>2/4</b></div>
          <div className="ach-progress"><span style={{ width: "50%" }} /></div>
          <div className="ach-reward"><span>🎁</span><div><b>Mukofot</b><small>+30 yulduz</small></div></div>
          <Link href="/dars/narsalarning-xossalari" className="ach-quest-btn">Missiyani davom ettir <span>→</span></Link>
        </aside>
      </section>

      <section className="ach-medals-section" id="medallar">
        <div className="ach-section-title"><div><div className="ach-kicker">SENING YUTUQLARING</div><h2>Medallar galereyasi</h2><p>Har bir medal mehnating va bilimingning belgisi.</p></div><div className="ach-medal-count"><Medal size={18} /> 1 / 6 qo‘lga kiritildi</div></div>
        <div className="ach-medal-grid">
          {medals.slice(0, showAll ? medals.length : 4).map(medal => (
            <article className={`ach-medal-card ${medal.earned ? "earned" : "locked"}`} key={medal.name}>
              <div className={`ach-medal-art ${medal.tone}`}><div className="medal-ribbon" /><span>{medal.icon}</span>{medal.earned && <i>✓</i>}</div>
              <div className="ach-medal-info"><b>{medal.name}</b><p>{medal.desc}</p><div className="ach-medal-progress"><span>{medal.progress}</span><div><i style={{ width: medal.earned ? "100%" : medal.progress.includes("/") ? `${(Number(medal.progress.split("/")[0]) / Number(medal.progress.split("/")[1])) * 100}%` : "25%" }} /></div></div></div>
            </article>
          ))}
        </div>
        <button className="ach-show-more" onClick={() => setShowAll(v => !v)}>{showAll ? "Kamroq ko‘rsat" : "Barcha medallarni ko‘r"} <span>{showAll ? "↑" : "↓"}</span></button>
      </section>

      <section className="ach-level-panel">
        <div className="ach-level-emblem">👑</div>
        <div className="ach-level-copy"><div className="ach-kicker">SENING DARAJANG</div><h2>4-daraja · Zukko</h2><p>Keyingi daraja: Ekspert. Yana 250 yulduz yig‘!</p><div className="ach-level-bar"><span /></div><small>1 250 / 1 500 ⭐</small></div>
        <div className="ach-level-next"><Gem size={28} /><b>Ekspert</b><small>Keyingi bosqich</small></div>
      </section>

      <footer className="ach-footer"><span>✦ 3D Interaktiv Ta’lim</span><span>Bilim olish — katta sarguzasht.</span></footer>
    </main>
  );
}
