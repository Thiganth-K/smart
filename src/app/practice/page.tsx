'use client';

import React from 'react';
import Header from '@/components/Header';
import {
  Target,
  Clock,
  Flame,
  Trophy,
  HelpCircle,
  BookOpen,
  Zap,
  Building2,
  Sliders,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Layout,
  Cpu,
  Database,
  Code2,
  CheckCircle2,
  Activity
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const performanceData = [
  { name: 'May 12', accuracy: 65, solved: 80 },
  { name: 'May 13', accuracy: 72, solved: 95 },
  { name: 'May 14', accuracy: 68, solved: 85 },
  { name: 'May 15', accuracy: 75, solved: 110 },
  { name: 'May 16', accuracy: 78, solved: 105 },
  { name: 'May 17', accuracy: 82, solved: 125 },
  { name: 'May 18', accuracy: 80, solved: 135 },
];

export default function PracticeZonePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header title="Practice Zone" showSearch={false} />

      <div className="p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-start -mt-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[#0F172A]">Practice Zone</h1>
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎮</span>
              </div>
            </div>
            <p className="text-slate-500 font-medium mt-1">
              Sharpen your skills with curated practice and track your improvement.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { label: 'Questions Solved', val: '1,248', trend: '18% this week', icon: HelpCircle, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Accuracy', val: '78%', trend: '6% improvement', icon: Target, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Practice Time', val: '15h 30m', trend: '2h 10m this week', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50' },
            { label: 'Current Streak', val: '12 Days', trend: 'Keep it going!', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
            { label: 'Rank', val: 'Top 28%', trend: 'Among active learners', icon: Trophy, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <stat.icon size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-[#0F172A] tracking-tight leading-none mb-1">{stat.val}</span>
                  <p className={`text-[10px] font-bold ${stat.color === 'text-orange-500' || stat.color === 'text-indigo-500' ? 'text-orange-500' : 'text-green-500'} flex items-center gap-1 whitespace-nowrap`}>
                    {(idx < 3) && <TrendingUp size={10} />} {stat.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Selection */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">What would you like to practice today?</h2>
              <p className="text-slate-500 text-sm mt-1">Choose a mode that fits your goal</p>
            </div>
            <button className="flex items-center gap-2 bg-white border border-indigo-100 text-indigo-600 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-all shadow-sm">
              <Sparkles size={14} className="text-indigo-500" /> AI Recommend
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { title: 'Topic Practice', desc: 'Practice specific topics to strengthen concepts', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50' },
              { title: 'Weak Areas', desc: 'Focus on your weak topics and improve', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Timed Practice', desc: 'Simulate real exam with timer', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Company Practice', desc: 'Practice company specific questions', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Custom Practice', desc: 'Create your own practice session', icon: Sliders, color: 'text-pink-600', bg: 'bg-pink-50' },
            ].map((mode, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 group cursor-pointer border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className={`w-12 h-12 ${mode.bg} ${mode.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <mode.icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">{mode.title}</h3>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-3">{mode.desc}</p>
                <div className={`w-8 h-8 rounded-full ${mode.bg} ${mode.color} flex items-center justify-center group-hover:w-full group-hover:rounded-xl transition-all duration-300`}>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Recommended for You */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-[#0F172A] text-sm">Recommended for You</h3>
                <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {[
                  { name: 'Arrays & Hashing', priority: 'High Priority', accuracy: '60%', questions: '30 Questions', icon: Code2, color: 'text-green-600', bg: 'bg-green-50', pColor: 'text-indigo-600', pBg: 'bg-indigo-50' },
                  { name: 'Dynamic Programming', priority: 'Medium Priority', accuracy: '55%', questions: '25 Questions', icon: Cpu, color: 'text-orange-600', bg: 'bg-orange-50', pColor: 'text-orange-600', pBg: 'bg-orange-50' },
                  { name: 'SQL Joins', priority: 'Medium Priority', accuracy: '62%', questions: '20 Questions', icon: Database, color: 'text-purple-600', bg: 'bg-purple-50', pColor: 'text-orange-600', pBg: 'bg-orange-50' },
                ].map((item, idx) => (
                  <div key={idx} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-[13px] font-bold text-slate-800">{item.name}</h4>
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-md ${item.pBg} ${item.pColor}`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">You got {item.accuracy} accuracy in this topic</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <p className="text-[10px] text-slate-400 font-bold">{item.questions}</p>
                      <button className="px-5 py-1.5 rounded-lg border border-indigo-100 text-indigo-600 text-[11px] font-bold hover:bg-indigo-600 hover:text-white transition-all">
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Your Practice */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-[#0F172A] text-base">Continue Your Practice</h3>
                <button className="text-blue-600 text-[11px] font-bold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {[
                  { name: 'Binary Search - Advanced', status: 'In Progress', progress: 66, questions: '12/20', icon: Code2, color: 'text-green-600', bg: 'bg-green-50' },
                  { name: 'Normalization in DBMS', status: 'In Progress', progress: 40, questions: '8/20', icon: Database, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((item, idx) => (
                  <div key={idx} className="px-8 py-[28px] flex items-center gap-6">
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={26} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 italic">
                            {item.status}
                          </span>
                        </div>
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter">{item.questions} Questions</span>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-black text-slate-500 w-12">{item.progress}%</span>
                      </div>
                    </div>
                    <button className="px-8 py-3 rounded-2xl border-2 border-indigo-100 text-indigo-600 text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm ml-4">
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Your Weak Areas */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-[#0F172A] text-base">Your Weak Areas</h3>
                <button className="text-blue-600 text-[11px] font-bold hover:underline">View All</button>
              </div>
              <div className="p-8 space-y-6">
                {[
                  { name: 'System Design', score: 48, color: 'bg-red-500' },
                  { name: 'Graph Algorithms', score: 52, color: 'bg-orange-500' },
                  { name: 'DP - Advanced', score: 55, color: 'bg-amber-500' },
                  { name: 'Operating Systems', score: 60, color: 'bg-yellow-500' },
                  { name: 'DBMS', score: 65, color: 'bg-green-500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <span className="text-xs font-bold text-slate-600 w-36 truncate">{item.name}</span>
                    <div className="flex-1 flex items-center gap-4">
                      <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-black text-slate-800 w-10">{item.score}%</span>
                    </div>
                    <button className="text-[11px] font-bold text-indigo-600 hover:underline">Practice</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Practice Performance */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-[#0F172A] text-sm">Recent Practice Performance</h3>
                <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-5 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Solved</span>
                  </div>
                </div>
                <div className="h-40 w-full -ml-8">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                        dx={-5}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '14px', border: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.06)', fontSize: '11px', fontWeight: 'bold' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="accuracy" 
                        stroke="#6366f1" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#6366f1', strokeWidth: 0 }} 
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="solved" 
                        stroke="#22c55e" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#22c55e', strokeWidth: 0 }} 
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Weekly Goal */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 flex items-center gap-10">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-500 rounded-3xl flex items-center justify-center flex-shrink-0">
              <Activity size={36} strokeWidth={2.5} />
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Weekly Goal</h3>
                  <p className="text-xl font-black text-[#0F172A]">Solve 300 questions</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#0F172A]">210 / 300</span>
                  <p className="text-[11px] text-red-500 font-bold uppercase tracking-widest mt-1">3 days left</p>
                </div>
              </div>
              <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  style={{ width: '70%' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 font-medium italic">3 days left to complete your goal</p>
            </div>
            <button className="px-8 py-3.5 bg-white text-indigo-600 rounded-2xl text-sm font-bold hover:bg-indigo-50 transition-all border border-indigo-100 shadow-sm whitespace-nowrap">
              View Goals
            </button>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-bold text-[#0F172A] text-base">Achievements Unlocked</h3>
                <p className="text-[11px] text-slate-400 font-medium mt-1">Great job! You unlocked 3 new badges this week.</p>
              </div>
              <button className="px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all border border-slate-100 whitespace-nowrap">
                View All Badges
              </button>
            </div>
            <div className="flex items-center gap-8">
              {[
                { icon: Trophy, color: 'text-indigo-400', bg: 'bg-indigo-500/10', count: '100' },
                { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10', count: '✓' },
                { icon: Zap, color: 'text-blue-400', bg: 'bg-blue-500/10', count: '⚡' },
              ].map((badge, idx) => (
                <div key={idx} className="relative group cursor-pointer">
                  <div className={`w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center shadow-2xl border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <badge.icon size={28} className={badge.color} />
                    <div className={`absolute -top-3 -right-3 w-7 h-7 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black ${badge.color} shadow-lg`}>
                      {badge.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Consistency Widget */}
      <div className="fixed left-6 bottom-32 w-60 p-7 bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] hidden xl:block shadow-2xl z-50 overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[80px] rounded-full -mr-16 -mt-16 group-hover:bg-indigo-500/30 transition-all"></div>
        <div className="relative text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full flex items-center justify-center mx-auto border border-white/5 relative group-hover:scale-110 transition-transform">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full animate-pulse"></div>
            <Target size={40} strokeWidth={1.5} className="text-indigo-400 relative" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base tracking-tight">Consistency is the key!</h4>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed px-2">
              You practiced <span className="text-indigo-400 font-bold">5 times</span> this week. Keep it up!
            </p>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-2xl text-xs font-black transition-all shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)]">
            View Streak
          </button>
        </div>
      </div>
    </div>
  );
}
