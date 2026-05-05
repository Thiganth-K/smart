'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import {
  TrendingUp,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Zap,
  Building2,
  Sparkles,
  Info,
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  Target,
  BrainCircuit,
  Monitor,
  ChevronDown,
  Flame,
  Trophy,
  Bot,
  Award,
  Clock,
  Star,
  Crown
} from 'lucide-react';







import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList
} from 'recharts';


const upcomingAssessments = [
  { name: 'TCS NQT Mock Test', type: 'Company Mock', date: 'May 25, 2025', time: '10:00 AM', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'System Design Assessment', type: 'Skill Test', date: 'May 28, 2025', time: '02:00 PM', icon: Layout, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'SQL Advanced Test', type: 'Technical Test', date: 'May 30, 2025', time: '11:00 AM', icon: Database, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const recentPerformance = [
  { name: 'DSA - Mixed Test', date: 'May 18, 2025', score: '78%', grade: 'Good', color: 'text-green-600' },
  { name: 'Python Advanced Test', date: 'May 14, 2025', score: '82%', grade: 'Great', color: 'text-green-600' },
  { name: 'Aptitude - Quantitative', date: 'May 10, 2025', score: '74%', grade: 'Good', color: 'text-green-600' },
  { name: 'SQL Fundamentals', date: 'May 07, 2025', score: '88%', grade: 'Excellent', color: 'text-green-600' },
];

const trendData = [
  { name: 'Dec', value: 48 },
  { name: 'Jan', value: 52 },
  { name: 'Feb', value: 56 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 64 },
  { name: 'May', value: 68 },
];

const roleFitData = [
  { name: 'Backend Developer', value: 82, color: '#22C55E' },
  { name: 'Data Analyst', value: 78, color: '#3B82F6' },
  { name: 'SDE - Intern', value: 65, color: '#8B5CF6' },
  { name: 'QA Engineer', value: 55, color: '#F59E0B' },
];

const companyFitData = [
  { name: 'TCS', value: 82, status: 'Great Fit', color: 'text-green-600', logo: '/tcs.png' },
  { name: 'Infosys', value: 78, status: 'Good Fit', color: 'text-green-600', logo: '/infosys.png' },
  { name: 'Zoho', value: 63, status: 'Moderate Fit', color: 'text-orange-500', logo: '/zoho.png' },
  { name: 'Wipro', value: 55, status: 'Build More Skills', color: 'text-slate-500', logo: '/wipro.png' },
];

export default function Dashboard() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning={true}>

      <Header title="Dashboard" />

      <div className="p-6 flex-1">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl brand-heading text-primary-navy mb-1">Good morning, Arjun! 👋</h2>
            <p className="text-muted text-sm font-medium">You're on track! Keep going and achieve your dream career.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-4 mb-6">
          {/* Readiness Score */}
          <div className="card-premium h-[280px] flex flex-col items-center p-3 xl:col-span-2">
            <div className="flex justify-between w-full mb-4">
              <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Hirescore</h3>
              <Info size={14} className="text-muted" />
            </div>

            <div className="relative w-full aspect-[2/1.2] flex items-center justify-center mb-1">
              <svg viewBox="0 0 200 120" className="w-full max-w-[220px]">
                <defs>
                  <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="40%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gauge-gradient)" strokeWidth="12" strokeLinecap="round" strokeDasharray="251.32" strokeDashoffset={251.32 * (1 - 0.68)} className="transition-all duration-1000 ease-in-out" />
              </svg>
              <div className="absolute bottom-2 flex flex-col items-center">
                <span className="text-5xl font-black text-slate-900 leading-none tracking-tighter">68%</span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-[11px] font-bold text-success">On Track</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-muted text-center mb-3 px-4 leading-tight w-full">
              You're making great progress. Focus on critical gaps to reach the next level.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-bold text-success bg-success/5 border border-success/10 px-3 py-1.5 rounded-lg mt-auto mx-auto">
              <TrendingUp size={12} className="text-success" />
              <span>+8% improvement</span>
            </div>
          </div>

          {/* Probability */}
          <div className="card-premium h-[280px] flex flex-col p-4 xl:col-span-2">
            <div className="flex justify-between w-full mb-8">
              <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Interview Readiness Score</h3>
              <Info size={14} className="text-muted" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 pt-2">
                <div className="text-5xl font-black text-slate-900 mb-1 tracking-tighter">64%</div>
                <div className="text-[11px] font-bold text-orange-500">Medium</div>
              </div>

              <div className="flex-1 h-20">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">

                  <AreaChart data={[
                    { v: 30 }, { v: 35 }, { v: 28 }, { v: 45 }, { v: 42 }, { v: 50 }, { v: 48 }, { v: 65 }, { v: 55 }, { v: 64 }
                  ]}>
                    <defs>
                      <linearGradient id="colorProb" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#8B5CF6"
                      fillOpacity={1}
                      fill="url(#colorProb)"
                      strokeWidth={2}
                      dot={{ r: 2, fill: '#8B5CF6', strokeWidth: 0 }}
                      activeDot={{ r: 3, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                )}
              </div>

            </div>

            <p className="text-[11px] text-muted mb-4 leading-relaxed text-center w-full px-4">
              Keep improving your technical skills to reach the 80%+ threshold for top-tier companies.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-bold text-success bg-success/5 border border-success/10 px-3 py-1.5 rounded-lg mt-auto mx-auto">
              <TrendingUp size={12} className="text-success" />
              <span>+9% growth</span>
            </div>
          </div>

          {/* Role Fit */}
          <div className="card-premium h-[280px] flex flex-col p-4 xl:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Role Fit Summary</h3>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
            </div>

            <div className="space-y-0">
              {roleFitData.map((role) => (
                <div key={role.name} className="flex items-center gap-4 h-12">
                  <div className="text-[11px] font-bold text-slate-700 w-32 truncate">{role.name}</div>
                  <div className="text-[11px] font-black text-slate-900 w-10">{role.value}%</div>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${role.value}%`, backgroundColor: role.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Company Fit */}
          <div className="card-premium h-[280px] flex flex-col p-4 xl:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Top Company Fit</h3>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">View All</button>
            </div>

            <div className="space-y-0">
              {companyFitData.map((company) => (
                <div key={company.name} className="flex items-center gap-3 h-12 border-b border-slate-50 last:border-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-border shadow-sm overflow-hidden bg-white flex-shrink-0`}>
                    <Image 
                      src={company.logo} 
                      alt={company.name} 
                      width={32}
                      height={32}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="text-[10px] font-bold text-slate-700 w-16 truncate">{company.name}</div>
                  <div className="text-[10px] font-black text-slate-900">{company.value}%</div>
                  <div className={`text-[9px] font-bold ${company.color} uppercase tracking-wider flex-1 text-right`}>
                    {company.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">

          {/* Strengths */}
          <div className="card-premium lg:col-span-2 h-[320px] flex flex-col p-4">
            <h3 className="text-sm font-bold text-primary-navy mb-4 uppercase tracking-wider">Strengths & Improvements</h3>
            
            <div className="grid grid-cols-2 gap-4 flex-1 overflow-hidden">
              {/* Strengths Column */}
              <div className="bg-green-50/40 rounded-2xl p-4 border border-green-100/50 flex flex-col">
                <h4 className="text-sm font-bold text-green-700 mb-4 uppercase tracking-tighter">Your Strengths</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Data Structures', val: '85%', icon: Code2, color: 'text-green-600', bg: 'bg-green-100' },
                    { name: 'Python Programming', val: '82%', icon: Terminal, color: 'text-green-600', bg: 'bg-green-100' },
                    { name: 'SQL', val: '78%', icon: Database, color: 'text-green-600', bg: 'bg-green-100' },
                    { name: 'Aptitude', val: '76%', icon: Target, color: 'text-green-600', bg: 'bg-green-100' }
                  ].map(s => (
                    <div key={s.name} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <s.icon size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-700 flex-1 truncate">{s.name}</span>
                      <span className="text-sm font-black text-green-600">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Column */}
              <div className="bg-red-50/40 rounded-2xl p-4 border border-red-100/50 flex flex-col">
                <h4 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-tighter">Focus Areas</h4>
                <div className="space-y-4">
                  {[
                    { name: 'System Design', level: 'High', icon: Layout, color: 'text-red-500', bg: 'bg-red-100' },
                    { name: 'Advanced DSA', level: 'High', icon: Cpu, color: 'text-red-500', bg: 'bg-red-100' },
                    { name: 'DB Optimization', level: 'Medium', icon: BrainCircuit, color: 'text-red-500', bg: 'bg-red-100' }
                  ].map(s => (
                    <div key={s.name} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <s.icon size={16} />
                      </div>
                      <span className="text-xs font-bold text-slate-700 flex-1 truncate">{s.name}</span>
                      <span className={`text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-wider ${
                        s.level === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                      }`}>
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 pt-3 border-t border-slate-50">
              <button className="flex items-center gap-2 text-sm font-bold text-info hover:gap-3 transition-all">
                View Skill Intelligence <ArrowRight size={16} />
              </button>
            </div>
          </div>


          {/* Actions */}
          <div className="card-premium lg:col-span-1 h-[320px] flex flex-col p-4">

            <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-6">Recommended Next Actions</h3>
            <div className="space-y-8 flex-1 overflow-y-auto pr-1">

              {[
                { 
                  name: 'Solve 15 DSA Problems (Medium-Hard)', 
                  meta: 'Arrays, Graphs, DP', 
                  val: '5 / 15', 
                  due: '3 days', 
                  progress: 33,
                  icon: Code2, 
                  color: 'text-green-600', 
                  bg: 'bg-green-50' 
                },
                { 
                  name: 'Complete System Design Module', 
                  meta: 'Scalability, HLD, LLD', 
                  val: '20%', 
                  due: '5 days', 
                  progress: 20,
                  icon: Monitor, 
                  color: 'text-blue-600', 
                  bg: 'bg-blue-50' 
                },
                { 
                  name: 'DB Optimization Practice', 
                  meta: 'Queries, Indexing, Normalization', 
                  val: '30%', 
                  due: '4 days', 
                  progress: 30,
                  icon: Database, 
                  color: 'text-purple-600', 
                  bg: 'bg-purple-50' 
                }
              ].map((a, idx) => (
                <div key={a.name} className="relative">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-8 h-8 ${a.bg} ${a.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <a.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-0.5">
                        <div className="text-[10px] font-bold text-slate-800 leading-tight truncate">{a.name}</div>
                        <div className="text-[10px] font-black text-slate-900 whitespace-nowrap">{a.val}</div>
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <div className="text-[9px] text-slate-500 font-medium truncate">{a.meta}</div>
                        <div className="text-[9px] font-bold text-red-500 whitespace-nowrap">Due in {a.due}</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        idx === 0 ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${a.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 pt-3 border-t border-slate-50">
              <button className="flex items-center gap-2 text-[11px] font-bold text-info hover:gap-3 transition-all">
                View Full Roadmap <ArrowRight size={14} />
              </button>
            </div>
          </div>
          {/* Trend */}
          <div className="card-premium lg:col-span-1 h-[320px] flex flex-col p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Readiness Trend</h3>
              <div className="flex items-center gap-2 bg-white border border-border px-2 py-1 rounded-lg shadow-sm cursor-pointer">
                <span className="text-[10px] font-bold text-slate-700">6 Months</span>
                <ChevronDown size={12} className="text-muted" />
              </div>
            </div>
            <div className="h-40 w-full -ml-4 pr-2">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={trendData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F8FAFC" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fill: '#94A3B8', fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fill: '#94A3B8', fontWeight: 600 }}
                    ticks={[0, 25, 50, 75, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8B5CF6" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#8B5CF6', strokeWidth: 0 }}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  >
                    <LabelList 
                      dataKey="value" 
                      position="top" 
                      offset={10} 
                      content={(props: any) => {
                        const { x, y, value } = props;
                        return (
                          <text x={x} y={y - 8} fill="#1E293B" fontSize={10} fontWeight={800} textAnchor="middle">
                            {value}%
                          </text>
                        );
                      }}
                    />
                  </Area>
                </AreaChart>
              </ResponsiveContainer>
            )}


            </div>
            <div className="flex items-center gap-3 mt-auto p-2.5 bg-green-50 rounded-xl border border-green-100">
              <div className="text-success flex-shrink-0"><TrendingUp size={16} /></div>
              <p className="text-[10px] font-bold text-success/80 leading-tight flex-1">Great consistency! You improved 20% in the last 6 months.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">


          {/* Upcoming Assessments */}
          <div className="card-premium lg:col-span-1 flex flex-col">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-primary-navy">Upcoming Assessments</h3>
              <button className="text-[11px] font-bold text-info hover:underline">View All</button>
            </div>
            <div className="space-y-0 flex-1 overflow-y-auto overflow-x-hidden pr-2">
              {upcomingAssessments.map(test => (
                <div key={test.name} className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-all rounded-xl">
                  <div className={`w-9 h-9 ${test.bg} ${test.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <test.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0 flex items-center gap-2">
                    <div className="text-[11px] font-bold text-primary-navy truncate">{test.name}</div>
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-lg whitespace-nowrap flex-shrink-0 ${
                      test.type === 'Company Mock' ? 'bg-blue-50 text-blue-600' : 
                      test.type === 'Skill Test' ? 'bg-orange-50 text-orange-600' : 
                      'bg-purple-50 text-purple-600'
                    }`}>
                      {test.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 border-l border-slate-100">
                    <Calendar size={14} className="text-slate-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-slate-700 whitespace-nowrap">{test.date}</div>
                      <div className="text-[9px] font-medium text-slate-400 whitespace-nowrap">{test.time}</div>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-info border border-info/30 px-4 py-2 rounded-lg hover:bg-info hover:text-white transition-all whitespace-nowrap shadow-sm">
                    Start Prep
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Assessment Performance */}
          <div className="card-premium lg:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-primary-navy">Recent Performance</h3>
              <button className="text-[11px] font-bold text-info hover:underline">View All</button>
            </div>
            <div className="space-y-0">
              {recentPerformance.map(perf => (
                <div key={perf.name} className="flex items-center gap-4 py-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-all px-2 -mx-2 rounded-xl">
                  <div className="text-[11px] font-bold text-primary-navy flex-1 truncate">{perf.name}</div>
                  <div className="text-[10px] font-medium text-slate-400 w-24 text-center">{perf.date}</div>
                  <div className="text-[11px] font-black text-primary-navy w-12 text-center">{perf.score}</div>
                  <div className={`text-[10px] font-bold ${
                    perf.grade === 'Excellent' ? 'text-green-600' : 
                    perf.grade === 'Great' ? 'text-green-500' : 'text-blue-500'
                  } w-20 text-right`}>
                    {perf.grade}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Learning Streak */}
          <div className="card-premium">
            <div className="flex items-start gap-5 mb-6">
              <div className="text-4xl animate-bounce-slow">🔥</div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-700 leading-none mb-2">Learning Streak</h4>
                <div className="text-3xl font-black text-primary-navy leading-none">7 Days</div>
                <p className="text-[11px] text-slate-400 font-medium mt-3">Keep your streak alive!</p>
              </div>
            </div>
            
            <div className="flex justify-between px-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-400">{day}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    i < 6 
                      ? 'bg-green-500 text-white shadow-lg shadow-green-100' 
                      : 'bg-white border-2 border-red-200 text-red-300'
                  }`}>
                    {i < 6 ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-black">{day}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Achievements */}
          <div className="card-premium">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[13px] font-bold text-slate-700">Achievements</h3>
              <button className="text-[11px] font-bold text-info hover:underline">View All</button>
            </div>
            <div className="flex items-center justify-around mb-6">
              {[
                { icon: Star, color: 'text-red-500', border: 'border-red-900/20' },
                { icon: Code2, color: 'text-yellow-500', border: 'border-yellow-900/20' },
                { icon: Target, color: 'text-blue-500', border: 'border-blue-900/20' },
                { icon: Flame, color: 'text-orange-500', border: 'border-orange-900/20' },
                { icon: Crown, color: 'text-amber-500', border: 'border-amber-900/20' },
              ].map((badge, i) => (
                <div key={i} className="group relative cursor-pointer">
                  <div className={`w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg border-2 ${badge.border} rotate-45 group-hover:rotate-0 transition-all duration-300`}>
                    <div className="-rotate-45 group-hover:rotate-0 transition-all duration-300">
                      <badge.icon size={20} className={badge.color} />
                    </div>
                  </div>
                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full bg-current ${badge.color}`}></div>
                </div>
              ))}
            </div>
            <div className="text-[11px] font-bold text-slate-400 text-center">12 Badges Earned</div>
          </div>
        </div>

        {/* AI Recommendation Section (Full Width) */}

        <div className="card-premium bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 mb-6 border-slate-100 flex flex-col min-h-[160px] relative">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-indigo-100">
              <Bot size={28} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-primary-navy leading-tight">AI Recommendation for You</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-success uppercase tracking-wider">Live Analysis</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between gap-12">
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed max-w-3xl">
              Based on your recent performance in <span className="text-primary-navy font-bold">SQL</span> and <span className="text-primary-navy font-bold">Python</span>, we've identified key areas for improvement. Focus on <span className="font-bold text-primary-navy">System Design</span> and <span className="font-bold text-primary-navy">Advanced DSA</span> to become interview ready.
            </p>
            <button className="bg-indigo-600 text-white text-[12px] font-bold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 flex-shrink-0">
              Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Action Task Cards (Row Below) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Task 1 */}
          <div className="card-premium p-6 flex items-center gap-4 hover:border-red-100 hover:bg-red-50/10 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Target size={22} className="text-red-500" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-primary-navy mb-1">Improve System Design</h4>
              <p className="text-[11px] text-slate-400 font-medium">Will increase your readiness <span className="font-bold text-slate-700">by 18%</span></p>
            </div>
          </div>

          {/* Task 2 */}
          <div className="card-premium p-6 flex items-center gap-4 hover:border-green-100 hover:bg-green-50/10 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Code2 size={22} className="text-green-600" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-primary-navy mb-1">Solve 20 DSA Problems</h4>
              <p className="text-[11px] text-slate-400 font-medium">Can boost your score <span className="font-bold text-slate-700">by 12%</span></p>
            </div>
          </div>

          {/* Task 3 */}
          <div className="card-premium p-6 flex items-center gap-4 hover:border-orange-100 hover:bg-orange-50/10 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Trophy size={22} className="text-orange-500" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-primary-navy mb-1">Practice Mock Interviews</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-tight">Increase confidence and communication skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

