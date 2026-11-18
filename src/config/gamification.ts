/**
 * Gamification configuration.
 * Keep tunable rewards, levels, badges and demo leaderboard data here.
 * Replace demo data with database-backed services when authentication/backend is added.
 */
export type Board = "class" | "group" | "school";
export type Learner = { name: string; grade: string; stars: number; avatar: string; trend: string };
export type MedalDefinition = {
  name: string;
  desc: string;
  icon: string;
  tone: "blue" | "gold" | "violet" | "orange" | "mint" | "pink";
  progress: string;
  earned: boolean;
};

export const GAMIFICATION_SETTINGS = {
  enabled: true,
  rewards: {
    lessonCompleted: 10,
    perfectQuiz: 20,
    dailyTask: 15,
    sevenDayStreak: 50,
    dailyMission: 30,
  },
  levels: [
    { name: "Boshlovchi", minStars: 0 },
    { name: "Izlanuvchi", minStars: 100 },
    { name: "Bilimdon", minStars: 250 },
    { name: "Zukko", minStars: 500 },
    { name: "Ekspert", minStars: 1000 },
    { name: "Professor", minStars: 2000 },
    { name: "Afsonaviy bilimdon", minStars: 5000 },
  ],
  demoStudent: {
    totalStars: 1250,
    weeklyStars: 120,
    classRank: 3,
    rankChange: 2,
    streakDays: 4,
    earnedMedals: 1,
    nextLevelAt: 1500,
    dailyMissionDone: 2,
    dailyMissionTotal: 4,
  },
} as const;

export const DEMO_LEADERBOARDS: Record<Board, Learner[]> = {
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

export const MEDAL_DEFINITIONS: MedalDefinition[] = [
  { name: "Birinchi qadam", desc: "Birinchi darsni tugat", icon: "🚀", tone: "blue", progress: "1/1", earned: true },
  { name: "Aniq nishon", desc: "5 ta testni xatosiz yech", icon: "🎯", tone: "gold", progress: "3/5", earned: false },
  { name: "Bilim izlovchi", desc: "10 ta darsni yakunla", icon: "📚", tone: "violet", progress: "7/10", earned: false },
  { name: "Tinimsiz", desc: "7 kun ketma-ket o‘qi", icon: "🔥", tone: "orange", progress: "4/7", earned: false },
  { name: "Fan ustasi", desc: "Bir fandagi barcha mavzularni tugat", icon: "🧠", tone: "mint", progress: "2/8", earned: false },
  { name: "Chempion", desc: "Haftalik reytingda top-3 ga kir", icon: "👑", tone: "pink", progress: "Top 10", earned: false },
];
