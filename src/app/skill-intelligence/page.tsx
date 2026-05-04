'use client';

import React from 'react';
import Header from '@/components/Header';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  LineChart,
  Line
} from 'recharts';
import { 
  BrainCircuit, 
  TrendingUp, 
  Target, 
  ChevronRight,
  Info,
  Code2,
  Database,
  Layout,
  ShieldCheck
} from 'lucide-react';

const radarData = [
  { subject: 'Programming', A: 85, B: 70, fullMark: 100 },
  { subject: 'Data Structures', A: 82, B: 65, fullMark: 100 },
  { subject: 'Algorithms', A: 78, B: 60, fullMark: 100 },
  { subject: 'Database', A: 75, B: 65, fullMark: 100 },
  { subject: 'System Design', A: 48, B: 60, fullMark: 100 },
  { subject: 'Problem Solving', A: 80, B: 70, fullMark: 100 },
  { subject: 'Tools & Tech', A: 68, B: 55, fullMark: 100 },
  { subject: 'Soft Skills', A: 70, B: 65, fullMark: 100 },
];

const skillBreakdown = [
  { name: 'Data Structures', score: 76, industryAvg: 68, percentile: 78, level: 'Proficient', trend: [65, 70, 72, 75, 76] },
  { name: 'Algorithms', score: 62, industryAvg: 64, percentile: 62, level: 'Proficient', trend: [58, 60, 62, 61, 62] },
  { name: 'Python Programming', score: 85, industryAvg: 72, percentile: 88, level: 'Expert', trend: [78, 80, 82, 84, 85] },
  { name: 'SQL', score: 78, industryAvg: 70, percentile: 80, level: 'Proficient', trend: [72, 74, 76, 77, 78] },
  { name: 'System Design', score: 48, industryAvg: 65, percentile: 42, level: 'Developing', trend: [40, 42, 45, 46, 48] },
];

export default function SkillIntelligencePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Skill Intelligence" />
      
      <div className="p-8">
        <p className="text-muted text-sm font-medium -mt-4 mb-8">Understand your strengths, identify gaps and get personalized recommendations.</p>

        {/* Tabs */}
        <div className="border-b border-border mb-8">
          <div className="flex gap-10">
            {['Overview', 'Skill Rating', 'Skill Comparison', 'Strengths', 'Improvement Areas', 'Learning Path'].map((tab, i) => (
              <button key={tab} className={`pb-4 text-sm font-bold transition-all relative ${i === 0 ? 'text-accent-red' : 'text-muted hover:text-primary-navy'}`}>
                {tab}
                {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-red"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          {/* Gauge Chart */}
          <div className="card-premium flex flex-col items-center p-6">
            <h3 className="text-[13px] font-bold text-slate-800 w-full mb-6 text-left">Overall Skill Index</h3>
            <div className="relative w-52 h-32 flex items-center justify-center mb-4 overflow-hidden">
              <svg viewBox="0 0 200 110" className="w-full h-full">
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="33%" stopColor="#f59e0b" />
                    <stop offset="66%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                {/* Background Track */}
                <path 
                  d="M 20 100 A 80 80 0 0 1 180 100" 
                  fill="none" 
                  stroke="#f1f5f9" 
                  strokeWidth="18" 
                  strokeLinecap="round" 
                />
                {/* Active Progress */}
                <path 
                  d="M 20 100 A 80 80 0 0 1 180 100" 
                  fill="none" 
                  stroke="url(#gaugeGradient)" 
                  strokeWidth="18" 
                  strokeLinecap="round"
                  strokeDasharray="251.32"
                  strokeDashoffset={251.32 * (1 - 72 / 100)}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-[34px] font-black text-slate-800 leading-none">72%</span>
                <span className="text-[11px] font-bold text-success uppercase tracking-widest">On Track</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[13px] font-medium text-slate-500 mb-4">You are improving well!</p>
              <div className="bg-green-50/50 text-green-600 px-5 py-2 rounded-full text-[11px] font-bold flex items-center gap-2 border border-green-100/50">
                <TrendingUp size={14} /> 8% improvement from last month
              </div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="card-premium p-4 flex flex-col">
            <h3 className="text-[12px] font-bold text-slate-800 mb-3">Skills by Category</h3>
            <div className="h-44 w-full flex-1">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">

                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#64748b', fontSize: 8, fontWeight: 600 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} hide tick={false} />
                  <Radar
                    name="Your Score"
                    dataKey="A"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.15}
                    strokeWidth={1.5}
                  />
                  <Radar
                    name="Industry Average"
                    dataKey="B"
                    stroke="#94a3b8"
                    strokeDasharray="3 3"
                    fill="transparent"
                    strokeWidth={1}
                  />
                </RadarChart>
              </ResponsiveContainer>
              )}
            </div>

            <div className="flex justify-center items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-[8px] font-bold text-slate-500">Your Score</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-0.5 border-t border-dashed border-slate-400" />
                <span className="text-[8px] font-bold text-slate-500">Industry Average</span>
              </div>
            </div>
          </div>

          {/* Top Strengths & Focus Areas */}
          <div className="card-premium p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[12px] font-bold text-slate-800">Top Strengths</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Python Programming', score: 85, color: 'bg-green-500', icon: Code2, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
                  { name: 'Problem Solving', score: 80, color: 'bg-green-500', icon: BrainCircuit, iconColor: 'text-green-600', iconBg: 'bg-green-50' },
                  { name: 'SQL', score: 78, color: 'bg-green-500', icon: Database, iconColor: 'text-green-600', iconBg: 'bg-green-50' }
                ].map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-md ${s.iconBg} ${s.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <s.icon size={10} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-700">{s.name}</span>
                      </div>
                      <span className="text-[9px] font-black text-slate-800">{s.score}%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-[12px] font-bold text-slate-800 mb-2">Focus Areas</h3>
              <div className="space-y-2">
                {[
                  { name: 'System Design', score: 48, color: 'bg-orange-400', icon: Layout, iconColor: 'text-orange-600', iconBg: 'bg-orange-50' },
                  { name: 'Advanced DSA', score: 52, color: 'bg-orange-400', icon: Code2, iconColor: 'text-orange-600', iconBg: 'bg-orange-50' },
                  { name: 'DevOps Basics', score: 55, color: 'bg-orange-400', icon: ShieldCheck, iconColor: 'text-orange-600', iconBg: 'bg-orange-50' }
                ].map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-md ${s.iconBg} ${s.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <s.icon size={10} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-700">{s.name}</span>
                      </div>
                      <span className="text-[9px] font-black text-slate-800">{s.score}%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




        {/* Breakdown Card */}
        <div className="card-premium mb-8 !p-0 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-white">
            <h3 className="text-[14px] font-bold text-slate-800">Detailed Skill Breakdown</h3>
            <button className="text-[10px] font-bold text-blue-600 hover:underline">View All Skills</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3">Skill</th>
                  <th className="px-4 py-3">Your Score</th>
                  <th className="px-4 py-3">Industry Avg.</th>
                  <th className="px-4 py-3 text-center">Percentile</th>
                  <th className="px-4 py-3 text-center">Level</th>
                  <th className="px-6 py-3 text-center">Trend (Last 3 Months)</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Data Structures', score: 76, avg: 68, per: '78th', level: 'Proficient', trend: [65, 70, 72, 78, 80, 76], status: 'Improve', color: 'text-indigo-600', bg: 'bg-indigo-50', icon: Code2 },
                  { name: 'Algorithms', score: 62, avg: 64, per: '62nd', level: 'Proficient', trend: [55, 60, 65, 62, 68, 62], status: 'Improve', color: 'text-blue-600', bg: 'bg-blue-50', icon: BrainCircuit },
                  { name: 'Python Programming', score: 85, avg: 72, per: '88th', level: 'Expert', trend: [75, 80, 82, 85, 88, 85], status: 'Maintain', color: 'text-green-600', bg: 'bg-green-50', icon: Code2 },
                  { name: 'SQL', score: 78, avg: 70, per: '80th', level: 'Proficient', trend: [70, 72, 75, 78, 80, 78], status: 'Maintain', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: Database },
                  { name: 'System Design', score: 48, avg: 65, per: '42nd', level: 'Developing', trend: [40, 45, 42, 48, 50, 48], status: 'Improve', color: 'text-red-500', bg: 'bg-red-50', icon: Layout },
                  { name: 'Database', score: 60, avg: 58, per: '60th', level: 'Proficient', trend: [50, 55, 58, 60, 62, 60], status: 'Improve', color: 'text-orange-600', bg: 'bg-orange-50', icon: Database },
                  { name: 'Problem Solving', score: 80, avg: 72, per: '82nd', level: 'Expert', trend: [70, 75, 78, 80, 82, 80], status: 'Maintain', color: 'text-teal-600', bg: 'bg-teal-50', icon: BrainCircuit },
                  { name: 'Git & Version Control', score: 68, avg: 60, per: '66th', level: 'Proficient', trend: [60, 62, 65, 68, 70, 68], status: 'Improve', color: 'text-amber-600', bg: 'bg-amber-50', icon: ShieldCheck },
                  { name: 'DevOps Basics', score: 55, avg: 50, per: '55th', level: 'Developing', trend: [45, 50, 48, 55, 58, 55], status: 'Improve', color: 'text-orange-500', bg: 'bg-orange-50', icon: ShieldCheck },
                  { name: 'Communication', score: 70, avg: 65, per: '72nd', level: 'Proficient', trend: [65, 68, 72, 70, 75, 70], status: 'Maintain', color: 'text-slate-600', bg: 'bg-slate-100', icon: Target },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-6 py-2.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={14} />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-800 w-7">{item.score}%</span>
                        <div className="flex-1 h-1.5 w-16 bg-slate-50 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${item.score < 60 ? 'bg-orange-400' : 'bg-green-500'}`} style={{ width: `${item.score}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500 w-7">{item.avg}%</span>
                        <div className="flex-1 h-1.5 w-16 bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.avg}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-center text-[10px] font-bold text-slate-700">{item.per}</td>
                    <td className="px-4 py-2.5 text-center">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                        item.level === 'Expert' ? 'bg-green-50 text-green-600' :
                        item.level === 'Proficient' ? 'bg-green-50/50 text-green-500' : 'bg-orange-50 text-orange-600'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="px-6 py-2.5">
                      <div className="h-8 w-24 mx-auto">
                        {mounted && (
                          <ResponsiveContainer width="100%" height="100%">

                          <LineChart data={item.trend.map(val => ({ val }))}>
                            <Line 
                              type="monotone" 
                              dataKey="val" 
                              stroke={item.score < 60 ? '#fb923c' : '#22c55e'} 
                              strokeWidth={1.5} 
                              dot={{ r: 1.5, fill: item.score < 60 ? '#fb923c' : '#22c55e' }} 
                            />
                          </LineChart>
                        </ResponsiveContainer>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-2.5 text-right">
                      <button className={`px-3 py-1 rounded text-[9px] font-bold border transition-colors ${
                        item.status === 'Improve' 
                        ? 'border-indigo-100 text-indigo-600 hover:bg-indigo-50' 
                        : 'border-green-100 text-green-600 hover:bg-green-50'
                      }`}>
                        {item.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/30">
            <p className="text-[9px] text-slate-400 font-medium">
              * Percentile shows your ranking compared to other students on the platform.
            </p>
          </div>
        </div>

        {/* Bottom Grid: Readiness & Level Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch">
          {/* Skill Readiness for Roles */}
          <div className="card-premium p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[14px] font-bold text-slate-800">Skill Readiness for Roles</h3>
              <button className="text-[10px] font-bold text-blue-600 hover:underline">View All Roles</button>
            </div>
            <div className="space-y-7 flex-1 flex flex-col justify-center">
              {[
                { name: 'Backend Developer', progress: 68, status: 'On Track', color: 'bg-green-500', statusColor: 'text-green-600' },
                { name: 'Data Analyst', progress: 74, status: 'On Track', color: 'bg-green-500', statusColor: 'text-green-600' },
                { name: 'SDE - Intern', progress: 63, status: 'Improving', color: 'bg-blue-500', statusColor: 'text-blue-500' },
                { name: 'Full Stack Developer', progress: 66, status: 'Improving', color: 'bg-blue-500', statusColor: 'text-blue-500' },
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span className="text-[11px] font-bold text-slate-600 w-32">{role.name}</span>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden">
                      <div className={`h-full ${role.color} rounded-full`} style={{ width: `${role.progress}%` }} />
                    </div>
                    <span className="text-[11px] font-black text-slate-800 w-8">{role.progress}%</span>
                  </div>
                  <span className={`text-[10px] font-bold w-16 text-right ${role.statusColor}`}>{role.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Level Guide */}
          <div className="card-premium p-6">
            <h3 className="text-[14px] font-bold text-slate-800 mb-6">Skill Level Guide</h3>
            <div className="space-y-5">
              {[
                { level: 'Expert (80-100%)', desc: 'Industry ready. Maintain and keep growing.', color: 'bg-green-500' },
                { level: 'Proficient (60-79%)', desc: 'Good skills. Keep practicing to reach expert level.', color: 'bg-blue-500' },
                { level: 'Developing (40-59%)', desc: 'Needs improvement. Focus and consistent practice required.', color: 'bg-orange-400' },
                { level: 'Beginner (0-39%)', desc: 'Start learning the fundamentals and build a strong base.', color: 'bg-red-500' },
              ].map((guide, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${guide.color} mt-1 flex-shrink-0`} />
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-800">{guide.level}</h5>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personalized Skill Roadmap */}
        <div className="card-premium p-6">
          <div className="mb-6">
            <h3 className="text-[14px] font-bold text-slate-800">Personalized Skill Roadmap</h3>
            <p className="text-[11px] text-slate-500 font-medium mt-1">A smart path curated for you to become industry ready faster.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between">
            {[
              { title: '1. Strengthen DSA', desc: 'Solve 200+ problems', icon: BrainCircuit, color: 'text-green-600', bg: 'bg-green-50' },
              { title: '2. Learn System Design', desc: 'Complete 10+ modules', icon: Layout, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: '3. Build Projects', desc: 'Apply your learnings', icon: Code2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { title: '4. Practice Mock Interviews', desc: 'Get interview ready', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-4 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50 flex-1 min-w-[200px]">
                  <div className={`w-10 h-10 rounded-lg ${step.bg} ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon size={18} />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-800">{step.title}</h5>
                    <p className="text-[10px] text-slate-500 font-medium">{step.desc}</p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex items-center justify-center w-12">
                    <div className="w-8 h-0.5 border-t-2 border-dashed border-slate-200" />
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="lg:ml-6 flex-shrink-0 w-full lg:w-auto">
              <button className="w-full lg:w-auto px-6 py-2.5 rounded-xl border-2 border-indigo-100 text-indigo-600 text-[11px] font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                View Full Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
