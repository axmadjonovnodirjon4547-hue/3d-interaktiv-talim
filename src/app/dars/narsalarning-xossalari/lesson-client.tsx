"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, ChevronRight, RotateCcw, Star } from "lucide-react";

type Language = "uz" | "ru" | "en";
type Task = { prompt: string; choices: string[]; answer: number; explain: string };

const STORAGE_KEY = "3d-interaktiv-talim-progress";
const LEGACY_STORAGE_KEY = "bilim-olami-progress";

const copy = {
  uz: {
    home: "Bosh sahifa", brand: "3D Interaktiv Ta’lim", grade: "1-SINF · MATEMATIKA · 1-MAVZU",
    title: "Narsalarning xossalari", subtitle: "Shakli, o‘lchami va rangi bo‘yicha tanish narsalarni taqqoslashni o‘rganamiz.",
    intro: "Shakllar olamiga xush kelibsan!", start: "Darsni boshlash", task: "TOPSHIRIQ",
    check: "Javobni tekshirish", next: "Keyingi mashq", retry: "Qayta urinish",
    correct: "⭐ To‘g‘ri javob!", wrong: "Yana urinib ko‘r!", finish: "Sayohat yakunlandi!",
    earned: "ta yulduz yig‘ding. Har bir mashq yangi bilim berdi.", replay: "Qayta o‘ynash",
    friend: "Robo do‘st", helper: "Sening yordamching", stars: "Yulduzlar",
    greeting: "Salom! Bugun atrofimizdagi narsalarning shakli, rangi va o‘lchamini birga o‘rganamiz.",
    celebrate: "Ajoyib harakat qilding! Bilim yulduzlaringni sanab ko‘r.",
    hint: "Rasmga diqqat bilan qara. To‘g‘ri javobni tanla!",
    praise: "Barakalla! Javobing to‘g‘ri.", encourage: "Xato qilishdan qo‘rqma. Yana bir bor kuzatib ko‘r.",
    reset: "Darsni qayta boshlash", footer: "Har kuni ozgina o‘rgan, katta natijaga erish.",
    tasks: [
      { prompt: "Qaysi buyum doira shakliga o‘xshaydi?", choices: ["⚽ To‘p", "📕 Kitob", "🚪 Eshik"], answer: 0, explain: "To‘p dumaloq, doira shakliga o‘xshaydi." },
      { prompt: "Qaysi shaklning rangi sariq?", choices: ["🔵 Ko‘k doira", "🟨 Sariq kvadrat", "🔺 Qizil uchburchak"], answer: 1, explain: "Sariq kvadratni topding!" },
      { prompt: "Qaysi doira kichikroq?", choices: ["🔵 Katta doira", "🟢 Kichik doira"], answer: 1, explain: "Kichik doira o‘lchami bilan farq qiladi." },
    ] as Task[],
  },
  ru: {
    home: "Главная", brand: "3D Интерактивное обучение", grade: "1 КЛАСС · МАТЕМАТИКА · ТЕМА 1",
    title: "Свойства предметов", subtitle: "Научимся сравнивать знакомые предметы по форме, размеру и цвету.",
    intro: "Добро пожаловать в мир фигур!", start: "Начать урок", task: "ЗАДАНИЕ",
    check: "Проверить ответ", next: "Следующее задание", retry: "Попробовать снова",
    correct: "⭐ Правильный ответ!", wrong: "Попробуй ещё раз!", finish: "Путешествие завершено!",
    earned: "звёзд ты собрал(а). Каждое упражнение принесло новые знания.", replay: "Играть снова",
    friend: "Друг Робо", helper: "Твой помощник", stars: "Звёзды",
    greeting: "Привет! Сегодня мы вместе изучим форму, цвет и размер окружающих предметов.",
    celebrate: "Отличная работа! Посчитай свои учебные звёзды.",
    hint: "Внимательно посмотри на картинку и выбери правильный ответ!",
    praise: "Молодец! Ответ правильный.", encourage: "Не бойся ошибаться. Попробуй ещё раз.",
    reset: "Начать урок заново", footer: "Учись понемногу каждый день и достигай больших результатов.",
    tasks: [
      { prompt: "Какой предмет похож на круг?", choices: ["⚽ Мяч", "📕 Книга", "🚪 Дверь"], answer: 0, explain: "Мяч круглый и похож на круг." },
      { prompt: "Какая фигура жёлтого цвета?", choices: ["🔵 Синий круг", "🟨 Жёлтый квадрат", "🔺 Красный треугольник"], answer: 1, explain: "Ты нашёл жёлтый квадрат!" },
      { prompt: "Какой круг меньше?", choices: ["🔵 Большой круг", "🟢 Маленький круг"], answer: 1, explain: "Маленький круг отличается размером." },
    ] as Task[],
  },
  en: {
    home: "Home", brand: "3D Interactive Learning", grade: "GRADE 1 · MATHEMATICS · TOPIC 1",
    title: "Properties of Objects", subtitle: "Learn to compare familiar objects by their shape, size, and color.",
    intro: "Welcome to the world of shapes!", start: "Start lesson", task: "TASK",
    check: "Check answer", next: "Next activity", retry: "Try again",
    correct: "⭐ Correct answer!", wrong: "Try once more!", finish: "Journey complete!",
    earned: "stars earned. Every activity brought new knowledge.", replay: "Play again",
    friend: "Robo Friend", helper: "Your learning buddy", stars: "Stars",
    greeting: "Hello! Today we'll explore the shapes, colors, and sizes of objects around us.",
    celebrate: "Fantastic effort! Count your learning stars.",
    hint: "Look carefully at the picture and choose the correct answer!",
    praise: "Well done! Your answer is correct.", encourage: "Don't be afraid of mistakes. Take another look.",
    reset: "Restart lesson", footer: "Learn a little every day and achieve great things.",
    tasks: [
      { prompt: "Which object looks like a circle?", choices: ["⚽ Ball", "📕 Book", "🚪 Door"], answer: 0, explain: "A ball is round and looks like a circle." },
      { prompt: "Which shape is yellow?", choices: ["🔵 Blue circle", "🟨 Yellow square", "🔺 Red triangle"], answer: 1, explain: "You found the yellow square!" },
      { prompt: "Which circle is smaller?", choices: ["🔵 Big circle", "🟢 Small circle"], answer: 1, explain: "The small circle is different in size." },
    ] as Task[],
  },
} satisfies Record<Language, {
  home: string; brand: string; grade: string; title: string; subtitle: string; intro: string; start: string;
  task: string; check: string; next: string; retry: string; correct: string; wrong: string; finish: string;
  earned: string; replay: string; friend: string; helper: string; stars: string; greeting: string;
  celebrate: string; hint: string; praise: string; encourage: string; reset: string; footer: string; tasks: Task[];
}>;

export default function LessonClient() {
  const [language, setLanguage] = useState<Language>("uz");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [stars, setStars] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const t = copy[language];
  const tasks = t.tasks;
  const task = tasks[step - 1];
  const complete = step > tasks.length;
  const correct = task && answers[step] === task.answer;

  useEffect(() => {
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      const raw = current ?? legacy;
      if (raw) {
        const data = JSON.parse(raw);
        setStars(typeof data.stars === "number" ? data.stars : 0);
        if (!current && legacy) localStorage.setItem(STORAGE_KEY, JSON.stringify({ stars: data.stars ?? 0, completed: Boolean(data.completed) }));
      }
      const savedLanguage = localStorage.getItem("3d-interaktiv-talim-language");
      if (savedLanguage === "uz" || savedLanguage === "ru" || savedLanguage === "en") setLanguage(savedLanguage);
    } catch {
      // Ignore invalid browser storage and keep the lesson usable.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ stars, completed: complete }));
  }, [stars, complete, hydrated]);

  useEffect(() => {
    document.documentElement.lang = language;
    if (hydrated) localStorage.setItem("3d-interaktiv-talim-language", language);
  }, [language, hydrated]);

  function choose(index: number) {
    if (!checked) setAnswers(prev => ({ ...prev, [step]: index }));
  }
  function verify() {
    if (answers[step] === undefined || !task) return;
    setChecked(true);
    if (answers[step] === task.answer) setStars(value => value + 1);
  }
  function next() { setStep(value => value + 1); setChecked(false); }
  function restart() { setStep(0); setAnswers({}); setChecked(false); }

  return <main className="lesson-shell">
    <header className="lesson-top">
      <Link href="/" className="back"><ArrowLeft size={18}/> {t.home}</Link>
      <div className="lesson-brand">✦ {t.brand}</div>
      <div className="lesson-actions">
        <div className="language-switch" aria-label="Language">
          {(["uz", "ru", "en"] as Language[]).map(code => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={language === code ? "active" : ""}>{code.toUpperCase()}</button>)}
        </div>
        <div className="lesson-score"><span className="lesson-score-star"><Star size={18} fill="currentColor" stroke="currentColor"/></span><b>{stars}</b></div>
      </div>
    </header>
    <div className="lesson-progress"><span style={{ width: `${Math.min(100, step / (tasks.length + 1) * 100)}%` }}/></div>
    <section className="lesson-heading"><div className="eyebrow">{t.grade}</div><h1>{t.title}</h1><p>{t.subtitle}</p></section>
    <section className="lesson-layout">
      <article className="lesson-stage">
        {step === 0 ? <div className="intro-scene"><div className="intro-cloud">☁️</div><div className="intro-sun">☀️</div><div className="intro-mascot">🤖</div><div className="intro-objects"><span>🔵</span><span>🟨</span><span>🔺</span></div><div className="intro-caption">{t.intro}</div></div> :
        complete ? <div className="finish"><div>🏆</div><h2>{t.finish}</h2><p>{stars} {t.earned}</p><button className="primary-btn" onClick={restart}><RotateCcw size={17}/> {t.replay}</button></div> :
        <div className="task-view"><div className="task-kicker">{t.task} {step} / {tasks.length}</div><div className="task-visual">{step === 1 ? "⚽　📕　🚪" : step === 2 ? "🔵　🟨　🔺" : "🔵　🟢"}</div><h2>{task.prompt}</h2><div className="choice-grid">{task.choices.map((choice, index) => <button key={choice} onClick={() => choose(index)} className={`choice ${answers[step] === index ? "selected" : ""} ${checked && index === task.answer ? "right" : ""}`}>{choice}{checked && index === task.answer && <Check size={17}/>}</button>)}</div>
          {checked && <div className={`answer-feedback ${correct ? "success" : "tryagain"}`}>{correct ? t.correct : t.wrong}<small>{task.explain}</small></div>}
          {!checked ? <button className="primary-btn" onClick={verify} disabled={answers[step] === undefined}>{t.check} <ChevronRight size={17}/></button> : <button className="primary-btn" onClick={correct ? next : () => setChecked(false)}>{correct ? t.next : t.retry} <ChevronRight size={17}/></button>}
        </div>}
        {step === 0 && <button className="primary-btn start-btn" onClick={() => setStep(1)}>{t.start} <ChevronRight size={17}/></button>}
      </article>
      <aside className="robo-card"><div className="robo-avatar">🤖</div><div><b>{t.friend}</b><small>{t.helper}</small></div><div className="robo-speech">{step === 0 ? t.greeting : complete ? t.celebrate : checked ? (correct ? t.praise : t.encourage) : t.hint}</div><div className="robo-stars"><span className="robo-stars-label"><span className="robo-star-medallion"><Star size={21} fill="currentColor" stroke="currentColor"/></span><span><strong>{t.stars}</strong><small>Har bir to‘g‘ri javob uchun</small></span></span><b className="robo-stars-total">{stars}</b></div><button className="reset-btn" onClick={restart}><RotateCcw size={14}/> {t.reset}</button></aside>
    </section>
    <footer className="lesson-footer"><span>✦ {t.brand}</span><span>{t.footer}</span></footer>
  </main>;
}
