"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronRight, RotateCcw, Star, Volume2 } from "lucide-react";

const tasks = [
  { prompt: "Qaysi buyum doira shakliga o‘xshaydi?", choices: ["⚽ To‘p", "📕 Kitob", "🚪 Eshik"], answer: 0, explain: "To‘p dumaloq, doira shakliga o‘xshaydi." },
  { prompt: "Qaysi shaklning rangi sariq?", choices: ["🔵 Ko‘k doira", "🟨 Sariq kvadrat", "🔺 Qizil uchburchak"], answer: 1, explain: "Sariq kvadratni topding!" },
  { prompt: "Qaysi doira kichikroq?", choices: ["🔵 Katta doira", "🟢 Kichik doira"], answer: 1, explain: "Kichik doira o‘lchami bilan farq qiladi." },
];

export default function LessonClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [stars, setStars] = useState(0);
  const [saved, setSaved] = useState(false);
  const task = tasks[step - 1];
  const complete = step > tasks.length;
  const correct = task && answers[step] === task.answer;

  useEffect(() => {
    const raw = localStorage.getItem("bilim-olami-progress");
    if (raw) { try { const data = JSON.parse(raw); setStars(data.stars ?? 0); } catch {} }
  }, []);
  useEffect(() => {
    localStorage.setItem("bilim-olami-progress", JSON.stringify({ stars, completed: complete }));
  }, [stars, complete]);

  function choose(index: number) { if (!checked) setAnswers(prev => ({...prev, [step]: index})); }
  function verify() {
    if (answers[step] === undefined) return;
    setChecked(true);
    if (answers[step] === task.answer) setStars(v => v + 1);
  }
  function next() { setStep(v => v + 1); setChecked(false); }
  function restart() { setStep(0); setAnswers({}); setChecked(false); setSaved(false); }

  return <main className="lesson-shell">
    <header className="lesson-top"><Link href="/" className="back"><ArrowLeft size={18}/> Bosh sahifa</Link><div className="lesson-brand">✦ Bilim Olami</div><div className="lesson-score"><Star fill="#f4bd39" stroke="#f4bd39"/> {stars}</div></header>
    <div className="lesson-progress"><span style={{width: `${Math.min(100, step / (tasks.length + 1) * 100)}%`}}/></div>
    <section className="lesson-heading"><div className="eyebrow">1-SINF · MATEMATIKA · 1-MAVZU</div><h1>Narsalarning xossalari</h1><p>Shakli, o‘lchami va rangi bo‘yicha tanish narsalarni taqqoslashni o‘rganamiz.</p></section>
    <section className="lesson-layout">
      <article className="lesson-stage">
        {step === 0 ? <div className="intro-scene"><div className="intro-cloud">☁️</div><div className="intro-sun">☀️</div><div className="intro-mascot">🤖</div><div className="intro-objects"><span>🔵</span><span>🟨</span><span>🔺</span></div><div className="intro-caption">Shakllar olamiga xush kelibsan!</div></div> :
        complete ? <div className="finish"><div>🏆</div><h2>Sayohat yakunlandi!</h2><p>{stars} ta yulduz yig‘ding. Har bir mashq yangi bilim berdi.</p><button className="primary-btn" onClick={restart}><RotateCcw size={17}/> Qayta o‘ynash</button></div> :
        <div className="task-view"><div className="task-kicker">TOPSHIRIQ {step} / {tasks.length}</div><div className="task-visual">{step === 1 ? "⚽　📕　🚪" : step === 2 ? "🔵　🟨　🔺" : "🔵　🟢"}</div><h2>{task.prompt}</h2><div className="choice-grid">{task.choices.map((c,i)=><button key={c} onClick={()=>choose(i)} className={`choice ${answers[step]===i?"selected":""} ${checked && i===task.answer?"right":""}`}>{c}{checked && i===task.answer && <Check size={17}/>}</button>)}</div>
        {checked && <div className={`answer-feedback ${correct?"success":"tryagain"}`}>{correct ? "⭐ To‘g‘ri javob!" : "Yana urinib ko‘r!"} <small>{task.explain}</small></div>}
        {!checked ? <button className="primary-btn" onClick={verify} disabled={answers[step]===undefined}>Javobni tekshirish <ChevronRight size={17}/></button> : <button className="primary-btn" onClick={correct ? next : ()=>setChecked(false)}>{correct ? "Keyingi mashq" : "Qayta urinish"} <ChevronRight size={17}/></button>}
        </div>}
        {step===0 && <button className="primary-btn start-btn" onClick={()=>setStep(1)}>Darsni boshlash <ChevronRight size={17}/></button>}
      </article>
      <aside className="robo-card"><div className="robo-avatar">🤖</div><div><b>Robo do‘st</b><small>Sening yordamching</small></div><div className="robo-speech">{step===0?"Salom! Bugun atrofimizdagi narsalarning shakli, rangi va o‘lchamini birga o‘rganamiz.":complete?"Ajoyib harakat qilding! Bilim yulduzlaringni sanab ko‘r.":checked?(correct?"Barakalla! Javobing to‘g‘ri.":"Xato qilishdan qo‘rqma. Yana bir bor kuzatib ko‘r."):"Rasmga diqqat bilan qara. To‘g‘ri javobni tanla!"}</div><div className="robo-stars"><span>⭐ Yulduzlar</span><b>{stars}</b></div><button className="reset-btn" onClick={restart}><RotateCcw size={14}/> Darsni qayta boshlash</button></aside>
    </section>
    <footer className="lesson-footer"><span>✦ Bilim Olami</span><span>Har kuni ozgina o‘rgan, katta natijaga erish.</span></footer>
  </main>;
}
