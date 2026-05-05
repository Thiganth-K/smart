'use client';

import React from 'react';
import Header from '@/components/Header';
import {
  TrendingUp,
  Award,
  BookOpen,
  Clock,
  CheckCircle2,
  BarChart3,
  Flame,
  ChevronRight,
  MoreVertical,
  Target,
  Zap,
  Layout,
  Cpu,
  Database,
  Code2,
  PlayCircle,
  Activity
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const stats = [
  { label: 'Overall Progress', val: '68%', sub: 'Completed', trend: '+ 12% from last month', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50', type: 'circle' },
  { label: 'Skills Improved', val: '16', sub: 'Out of 24', trend: '↑ 3 this month', icon: Zap, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Assessments Taken', val: '28', sub: 'Out of 45 Planned', trend: '↑ 5 this month', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Practice Questions', val: '1,248', sub: 'Questions Solved', trend: '↑ 156 this month', icon: HelpCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Study Time', val: '48h 30m', sub: 'Total Time Spent', trend: '↑ 6h 20m this month', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Current Streak', val: '12 Days', sub: 'Keep it up!', trend: '', icon: Flame, color: 'text-red-500', bg: 'bg-red-50' },
];

const progressData = [
  { name: 'Apr 22', val: 35 },
  { name: 'Apr 29', val: 45 },
  { name: 'May 6', val: 58 },
  { name: 'May 13', val: 52 },
  { name: 'May 20', val: 65 },
  { name: 'May 27', val: 68 },
  { name: 'Jun 3', val: 65 },
  { name: 'Jun 10', val: 78 },
  { name: 'Jun 17', val: 75 },
];

const categoryProgress = [
  { name: 'Programming', val: 82, color: 'bg-green-500' },
  { name: 'Data Structures & Algorithms', val: 75, color: 'bg-blue-500' },
  { name: 'Database Management', val: 68, color: 'bg-orange-500' },
  { name: 'Operating Systems', val: 62, color: 'bg-yellow-500' },
  { name: 'System Design', val: 55, color: 'bg-red-500' },
  { name: 'Web Development', val: 48, color: 'bg-indigo-500' },
  { name: 'Aptitude', val: 70, color: 'bg-purple-500' },
];

const timeInvestmentData = [
  { name: 'Learning', value: 42, color: '#6366f1', time: '20h 15m' },
  { name: 'Practice', value: 32, color: '#3b82f6', time: '15h 30m' },
  { name: 'Assessments', value: 18, color: '#10b981', time: '8h 45m' },
  { name: 'Other Activities', value: 8, color: '#f59e0b', time: '4h 00m' },
];

const assessmentPerformance = [
  { name: 'Excellent', value: 28, color: '#10b981', count: 8 },
  { name: 'Good', value: 43, color: '#3b82f6', count: 12 },
  { name: 'Average', value: 21, color: '#f59e0b', count: 6 },
  { name: 'Below Average', value: 7, color: '#ef4444', count: 2 },
];

const subjectSkills = [
  { name: 'Arrays & Strings', progress: 80, assessments: '4/5', practice: '120/150', trend: 'up' },
  { name: 'Dynamic Programming', progress: 65, assessments: '3/5', practice: '80/120', trend: 'up' },
  { name: 'Database SQL', progress: 70, assessments: '3/4', practice: '95/130', trend: 'stable' },
  { name: 'System Design Basics', progress: 60, assessments: '2/4', practice: '60/100', trend: 'up' },
  { name: 'Operating Systems', progress: 55, assessments: '2/4', practice: '50/90', trend: 'down' },
  { name: 'HTML, CSS, JavaScript', progress: 85, assessments: '4/4', practice: '180/200', trend: 'stable' },
];

const milestones = [
  { title: 'First Assessment', sub: 'Completed your first assessment', date: 'Completed on 10 Apr 2025', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '7 Day Streak', sub: 'Maintained a 7 day learning streak', date: 'Completed on 22 Apr 2025', icon: Flame, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '10 Assessments', sub: 'Completed 10 assessments', date: 'Completed on 05 May 2025', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '50 Practice Sessions', sub: 'Complete 50 practice sessions', progress: '35 / 50', icon: Target, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: 'Skill Master', sub: 'Reach 90% in any 5 skills', progress: '2 / 5', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Pro Learner', sub: 'Study for 100 hours', progress: '48h 30m / 100h', icon: BookOpen, color: 'text-slate-600', bg: 'bg-slate-50' },
];

import { FileText, HelpCircle } from 'lucide-react';

export default function ProgressPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]" suppressHydrationWarning={true}>
      <Header title="Progress" showSearch={false} />

      <div className="p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-start -mt-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Progress</h1>
            <p className="text-slate-500 font-medium mt-1">
              Track your learning journey and improvement over time.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col h-full">
              {stat.type === 'circle' ? (
                <>
                  <h3 className="text-[11px] font-bold text-slate-800 mb-4">{stat.label}</h3>
                  <div className="flex items-center gap-4 mb-auto">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="28" cy="28" r="24" stroke="#f1f5f9" strokeWidth="5" fill="none" />
                        <circle cx="28" cy="28" r="24" stroke="#6366f1" strokeWidth="5" fill="none" strokeDasharray="150.8" strokeDashoffset={150.8 * (1 - 0.68)} strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#0F172A] leading-none">68%</div>
                      <div className="text-[10px] font-bold text-slate-400 mt-1">Completed</div>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-green-500 mt-4 flex items-center gap-1">
                    <TrendingUp size={10} /> {stat.trend}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <stat.icon size={18} />
                    </div>
                    <h3 className="text-[10px] font-bold text-slate-500 leading-tight">{stat.label}</h3>
                  </div>
                  <div className="mb-auto">
                    <div className="text-2xl font-black text-[#0F172A] leading-none mb-1.5">{stat.val}</div>
                    <div className="text-[10px] font-bold text-slate-400">{stat.sub}</div>
                  </div>
                  {stat.trend && (
                    <p className="text-[9px] font-bold text-green-500 mt-4 flex items-center gap-1">
                      <TrendingUp size={10} /> {stat.trend}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Progress Over Time, Category, and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Progress Over Time (6 spans) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-[#0F172A] text-sm flex items-center gap-2">
                  Progress Over Time <Info size={14} className="text-slate-300" />
                </h3>
                <div className="flex items-center gap-5 mt-3">
                  {['Overall', 'Assessments', 'Practice', 'Study Time'].map((tab, idx) => (
                    <button key={tab} className={`text-[10px] font-bold pb-1.5 relative ${
                      idx === 0 ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600 transition-colors'
                    }`}>
                      {tab}
                      {idx === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 cursor-pointer">
                Last 8 Weeks <ChevronDown size={12} />
              </div>
            </div>

            <div className="h-[200px] w-full">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">

                <LineChart data={progressData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                    dy={5}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                    domain={[0, 100]}
                    ticks={[0, 50, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="val" 
                    stroke="#6366f1" 
                    strokeWidth={2.5} 
                    dot={{ r: 3, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
              )}
            </div>

          </div>

          {/* Progress by Category (3 spans) */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 h-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-[#0F172A] text-sm">Progress by Category</h3>
              <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {categoryProgress.slice(0, 5).map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 truncate pr-2">{item.name}</span>
                    <span className="text-[10px] font-black text-slate-800">{item.val}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Performance (3 spans) */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 h-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-[#0F172A] text-sm">Assessment Performance</h3>
              <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-6">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">

                  <PieChart>
                    <Pie
                      data={assessmentPerformance}
                      cx="50%"
                      cy="50%"
                      innerRadius={24}
                      outerRadius={40}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {assessmentPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-sm font-black text-slate-800 leading-none">72%</span>
                </div>
              </div>
              <div className="w-full space-y-2">
                {assessmentPerformance.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[9px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-bold text-slate-400 truncate">{item.name}</span>
                    </div>
                    <span className="font-black text-slate-700">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Subject/Skill Progress and Time Investment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Subject / Skill Progress (8 spans) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-[#0F172A] text-sm">Subject / Skill Progress</h3>
              <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-50">
                    <th className="px-6 py-3 text-left text-[8px] font-black text-slate-400 uppercase tracking-widest">Skill</th>
                    <th className="px-6 py-3 text-left text-[8px] font-black text-slate-400 uppercase tracking-widest">Progress</th>
                    <th className="px-6 py-3 text-center text-[8px] font-black text-slate-400 uppercase tracking-widest">Assessments</th>
                    <th className="px-6 py-3 text-center text-[8px] font-black text-slate-400 uppercase tracking-widest">Practice</th>
                    <th className="px-6 py-3 text-center text-[8px] font-black text-slate-400 uppercase tracking-widest">Trend</th>
                    <th className="px-6 py-3 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {subjectSkills.map((skill, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-500">
                            {idx === 0 ? <Code2 size={14} /> : idx === 1 ? <Zap size={14} /> : idx === 2 ? <Database size={14} /> : idx === 3 ? <Layout size={14} /> : <Cpu size={14} />}
                          </div>
                          <span className="text-[10px] font-bold text-slate-700">{skill.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <div className="w-24 flex items-center gap-2">
                          <div className="h-1 flex-1 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.progress}%` }} />
                          </div>
                          <span className="text-[9px] font-black text-slate-800">{skill.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center text-[10px] font-bold text-slate-500">{skill.assessments}</td>
                      <td className="px-6 py-3 text-center text-[10px] font-bold text-slate-500">{skill.practice}</td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex justify-center">
                          <div className="w-10 h-5">
                            <svg className="w-full h-full" viewBox="0 0 40 20">
                              <path 
                                d={skill.trend === 'up' ? "M0 15 L10 12 L20 18 L30 8 L40 5" : skill.trend === 'down' ? "M0 5 L10 8 L20 12 L30 18 L40 20" : "M0 10 L10 12 L20 9 L30 11 L40 10"} 
                                fill="none" 
                                stroke={skill.trend === 'up' ? "#22c55e" : skill.trend === 'down' ? "#ef4444" : "#f59e0b"} 
                                strokeWidth="2" 
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button className="text-slate-300 hover:text-slate-500 transition-colors">
                          <MoreVertical size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Time Investment (4 spans) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-[#0F172A] text-base">Time Investment</h3>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">
                This Month <ChevronDown size={14} />
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="relative w-40 h-40 flex-shrink-0">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={timeInvestmentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {timeInvestmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-black text-slate-800 leading-none">48h</span>
                  <span className="text-[12px] font-bold text-slate-400 mt-1">30m</span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                {timeInvestmentData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-bold text-slate-500 truncate">{item.name}</span>
                    </div>
                    <span className="font-black text-slate-700 ml-4">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Milestones & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12 flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-5 min-w-[280px] flex-shrink-0">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-slate-800">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium mb-2 truncate">{item.sub}</p>
                  {item.date ? (
                    <p className="text-[9px] font-black text-green-600">{item.date}</p>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black text-slate-800">{item.progress}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color.replace('text-', 'bg-')} rounded-full`} style={{ width: '65%' }} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center px-8 border border-dashed border-slate-200 rounded-2xl group cursor-pointer hover:bg-slate-50 transition-colors min-w-[140px]">
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">View All</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
           <p className="text-[10px] text-slate-400 flex items-center gap-2">
             <Info size={12} /> Progress is updated every 24 hours. Keep learning consistently to see better results!
           </p>
        </div>
      </div>
    </div>
  );
}

import { Info, ChevronDown } from 'lucide-react';
