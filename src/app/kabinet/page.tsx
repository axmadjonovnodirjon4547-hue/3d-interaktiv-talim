"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell, BookOpen, Bot, CalendarDays, CheckCircle2, ChevronRight,
  CircleHelp, Flame, GraduationCap, Home, LayoutGrid, Play, Sparkles,
  Star, Trophy, UserRound, Users, X
} from "lucide-react";

const courses = [
  { title: "Matematika", subtitle: "Narsalarning xossalari", progress: 62, lessons: "5 / 8 dars", icon: "➗", tone: "violet", href: "/dars/narsalarning-xossalari" },
  { title: "Tabiiy fanlar", subtitle: "Atrofimizdagi olam", progress: 0, lessons: "Tez orada", icon: "🔬", tone: "mint", href: "#" },
  { title: "Ona tili", subtitle: "So‘zlar va hikoyalar", progress: 0, lessons: "Tez orada", icon: "📚", tone: "peach", href: "#" },
];

export default function StudentDashboard() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Asosiy");
  const notifications = [
    "Bugungi matematika darsi sizni kutmoqda.",
    "Yangi mashq va topshiriqlar qo‘shildi.",
    "Haftalik bilimlar reytingi yangilandi.",
  ];

  return (
    <main className="student-dashboard">
      <header className="sd-header">
        <Link href="/" className="sd-brand"><span className="sd-brand-mark">✦</span><span><b>3D Interaktiv Ta’lim</b><small>BILIM OLAMI</small></span></Link>
        <div className="sd-header-actions">
          <button className="sd-icon-button" aria-label="Bildirishnomalar" onClick={() => setNotificationsOpen(v => !v)}><Bell size={20}/><i>3</i></button>
          <Link href="/yutuqlar" className="sd-header-link"><Trophy size={17}/> Yutuqlar</Link>
          <Link href="/" className="sd-avatar" aria-label="Bosh sahifa">N</Link>
        </div>
      </header>

      {notificationsOpen && <aside className="sd-notice-panel"><div className="sd-notice-heading"><b>Bildirishnomalar</b><button onClick={() => setNotificationsOpen(false)} aria-label="Yopish"><X size={17}/></button></div>{notifications.map((item, i) => <div className="sd-notice" key={item}><span>{i === 0 ? "📘" : i === 1 ? "✨" : "🏆"}</span><p>{item}</p></div>)}<small>Namuna bildirishnomalar</small></aside>}

      <section className="sd-welcome">
        <div className="sd-welcome-copy">
          <div className="sd-eyebrow"><Sparkles size={15}/> SHAXSIY O‘QUV KABINETI</div>
          <h1>Salom, <em>Nodirjon!</em></h1>
          <p className="sd-today">Bugun — bilim sari yana bir qadam.</p>
          <div className="sd-current-course"><span className="sd-course-check"><CheckCircle2 size={18}/></span><div><b>Matematika · 1-mavzu</b><small>Narsalarning xossalari</small></div><span className="sd-current-progress">5 / 8</span></div>
          <Link href="/dars/narsalarning-xossalari" className="sd-primary"><Play size={17} fill="currentColor"/> O‘qishni davom ettirish</Link>
        </div>
        <div className="sd-hero-art" aria-label="Bilim olamidagi robot qahramon"><div className="sd-art-sun">☀</div><span className="sd-art-star star-one">✦</span><span className="sd-art-star star-two">✧</span><div className="sd-art-orbit"></div><div className="sd-robot"><div className="sd-robot-antenna"></div><div className="sd-robot-head"><i></i><i></i><b></b></div><div className="sd-robot-body">✦</div></div><div className="sd-art-caption">ROBO BILAN BILIM OLAMINI KASHF ET!</div></div>
      </section>

      <section className="sd-stats">
        <article><span className="sd-stat-icon stars"><Star fill="currentColor"/></span><div><small>Yig‘ilgan yulduzlar</small><b>1 250</b><em>Demo ko‘rsatkich</em></div></article>
        <article><span className="sd-stat-icon lessons"><BookOpen/></span><div><small>Tugatilgan darslar</small><b>5 ta</b><em>Demo ko‘rsatkich</em></div></article>
        <article><span className="sd-stat-icon streak"><Flame fill="currentColor"/></span><div><small>O‘qish ketma-ketligi</small><b>4 kun</b><em>Demo ko‘rsatkich</em></div></article>
      </section>

      <section className="sd-section">
        <div className="sd-section-title"><div><div className="sd-eyebrow">SENING TA’LIM YO‘LING</div><h2>Kurslarim</h2></div><span className="sd-grade"><GraduationCap size={16}/> 1–11-sinflar</span></div>
        <div className="sd-course-grid">{courses.map(course => <article className={`sd-course-card ${course.tone}`} key={course.title}><div className="sd-course-top"><span className="sd-course-emoji">{course.icon}</span><span className="sd-course-tag">{course.progress ? "Davom etmoqda" : "Tez orada"}</span></div><h3>{course.title}</h3><p>{course.subtitle}</p><div className="sd-progress-meta"><span>{course.lessons}</span>{course.progress > 0 && <b>{course.progress}%</b>}</div><div className="sd-progress-track"><span style={{width:`${course.progress}%`}}/></div>{course.href !== "#" ? <Link href={course.href} className="sd-course-link">Kursni davom ettirish <ChevronRight size={16}/></Link> : <span className="sd-course-disabled">Tayyorlanmoqda</span>}</article>)}</div>
      </section>

      <section className="sd-lower-grid">
        <article className="sd-panel sd-ai-panel"><div className="sd-panel-icon"><Bot size={23}/></div><div className="sd-eyebrow">DOIMIY YORDAMCHI</div><h2>AI ustoz</h2><p>Murakkab mavzularni tushunish va savollaringga javob topish uchun AI ustoz bo‘limi.</p><span className="sd-coming-soon">AI xizmati keyingi bosqichda ulanadi</span></article>
        <article className="sd-panel sd-community-panel"><div className="sd-panel-icon"><Users size={23}/></div><div className="sd-eyebrow">BILIMDONLAR JAMOASI</div><h2>Yutuqlar va reyting</h2><p>Medallaring, o‘qish natijalaring va bilimdonlar reytingini kuzat.</p><Link href="/yutuqlar" className="sd-secondary">Yutuqlarni ko‘r <ChevronRight size={16}/></Link></article>
      </section>

      <section className="sd-week-panel"><div className="sd-week-icon"><CalendarDays size={23}/></div><div><b>Bugungi kichik maqsad</b><p>Bitta darsni yakunla va bilim zaxirangni oshir.</p></div><Link href="/dars/narsalarning-xossalari" aria-label="Darsga o‘tish"><ChevronRight size={20}/></Link></section>

      <nav className="sd-bottom-nav" aria-label="Asosiy navigatsiya">
        <Link href="/kabinet" className={activeTab === "Asosiy" ? "active" : ""} onClick={() => setActiveTab("Asosiy")}><Home size={20}/><span>Asosiy</span></Link>
        <Link href="/dars/narsalarning-xossalari" className={activeTab === "Darslar" ? "active" : ""} onClick={() => setActiveTab("Darslar")}><BookOpen size={20}/><span>Darslar</span></Link>
        <a href="#ai-ustoz" className={activeTab === "Ustoz" ? "active" : ""} onClick={() => setActiveTab("Ustoz")}><CircleHelp size={20}/><span>Ustoz</span></a>
        <Link href="/yutuqlar" className={activeTab === "Yana" ? "active" : ""} onClick={() => setActiveTab("Yana")}><LayoutGrid size={20}/><span>Yana</span></Link>
      </nav>
      <footer className="sd-footer"><span>✦ 3D Interaktiv Ta’lim</span><span>O‘rgan. Kashf et. Rivojlan.</span></footer>
    </main>
  );
}
