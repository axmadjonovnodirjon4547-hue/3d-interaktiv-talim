"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Award, Flame, Gem, Medal, Sparkles, Star, Trophy } from "lucide-react";
import { DEMO_LEADERBOARDS, GAMIFICATION_SETTINGS, MEDAL_DEFINITIONS, type Board } from "@/config/gamification";

export default function AchievementsPage() {
  const [board, setBoard] = useState<Board>("class");
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  const [showAll, setShowAll] = useState(false);
  const leaders = useMemo(() => DEMO_LEADERBOARDS[board], [board]);
  const student = GAMIFICATION_SETTINGS.demoStudent;
  const medals = MEDAL_DEFINITIONS;

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
        <article className="ach-stat-card star-stat"><span className="ach-stat-icon"><Star fill="currentColor" /></span><div><small>Jami yulduzlar</small><b>{student.totalStars.toLocaleString("uz-UZ")}</b><em>+{student.weeklyStars} shu hafta</em></div></article>
        <article className="ach-stat-card rank-stat"><span className="ach-stat-icon"><Trophy /></span><div><small>Sinf reytingi</small><b>{student.classRank}-o‘rin</b><em>{student.rankChange} pog‘ona yuqoriga</em></div></article>
        <article className="ach-stat-card streak-stat"><span className="ach-stat-icon"><Flame fill="currentColor" /></span><div><small>O‘qish ketma-ketligi</small><b>{student.streakDays} kun</b><em>Maqsad: 7 kun</em></div></article>
        <article className="ach-stat-card medal-stat"><span className="ach-stat-icon"><Award /></span><div><small>Qo‘lga kiritilgan</small><b>{student.earnedMedals} medal</b><em>{medals.length} ta maqsad</em></div></article>
      </section>

      <section className="ach-content-grid">
        <div className="ach-panel ach-leaderboard">
          <div className="ach-panel-heading"><div><div className="ach-kicker">SOG‘LOM RAQOBAT</div><h2>🏆 Bilimdonlar reytingi</h2></div><span className="ach-live-pill">● {period === "week" ? "HAFTALIK" : period === "month" ? "OYLIK" : "UMUMIY"}</span></div>
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
          <div className="ach-progress-label"><span>Kunlik maqsad</span><b>{student.dailyMissionDone}/{student.dailyMissionTotal}</b></div>
          <div className="ach-progress"><span style={{ width: `${(student.dailyMissionDone / student.dailyMissionTotal) * 100}%` }} /></div>
          <div className="ach-reward"><span>🎁</span><div><b>Mukofot</b><small>+{GAMIFICATION_SETTINGS.rewards.dailyMission} yulduz</small></div></div>
          <Link href="/dars/narsalarning-xossalari" className="ach-quest-btn">Missiyani davom ettir <span>→</span></Link>
        </aside>
      </section>

      <section className="ach-medals-section" id="medallar">
        <div className="ach-section-title"><div><div className="ach-kicker">SENING YUTUQLARING</div><h2>Medallar galereyasi</h2><p>Har bir medal mehnating va bilimingning belgisi.</p></div><div className="ach-medal-count"><Medal size={18} /> {student.earnedMedals} / {medals.length} qo‘lga kiritildi</div></div>
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
        <div className="ach-level-copy"><div className="ach-kicker">SENING DARAJANG</div><h2>4-daraja · Zukko</h2><p>Keyingi daraja: Ekspert. Yana {Math.max(0, student.nextLevelAt - student.totalStars)} yulduz yig‘!</p><div className="ach-level-bar"><span style={{ width: `${Math.min(100, (student.totalStars / student.nextLevelAt) * 100)}%` }} /></div><small>{student.totalStars.toLocaleString("uz-UZ")} / {student.nextLevelAt.toLocaleString("uz-UZ")} ⭐</small></div>
        <div className="ach-level-next"><Gem size={28} /><b>Ekspert</b><small>Keyingi bosqich</small></div>
      </section>

      <footer className="ach-footer"><span>✦ 3D Interaktiv Ta’lim</span><span>Bilim olish — katta sarguzasht.</span></footer>
    </main>
  );
}
