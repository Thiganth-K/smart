'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import {
  Trophy,
  Award,
  Flame,
  Gem,
  Target,
  Search,
  ChevronDown,
  Star,
  Zap,
  Code2,
  BookOpen,
  Layout,
  CheckCircle2,
  TrendingUp,
  Clock,
  MoreVertical,
  User,
  ShieldCheck,
  Activity,
  Share2
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const stats = [
  { label: 'Total Points', val: '2,450', trend: '↑ 350 this month', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Achievements Unlocked', val: '28', sub: 'Out of 45', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Current Streak', val: '12 Days', sub: 'Keep it up!', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Rank', val: 'Gold Learner', sub: 'Top 8% of learners', icon: Gem, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Next Milestone', val: '2,950', sub: 'Points', icon: Target, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50', progress: 85 },
];

const earnedAchievements = [
  { title: 'First Step', desc: 'Complete your first assessment', date: '10 Apr 2025', points: '+50', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '7 Day Streak', desc: 'Maintain a 7 day learning streak', date: '22 Apr 2025', points: '+100', icon: Flame, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Assessment Master', desc: 'Complete 10 assessments', date: '05 May 2025', points: '+150', icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Practice Pro', desc: 'Answer 500 practice questions', date: '14 May 2025', points: '+150', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: 'Top Performer', desc: 'Score in top 10% in an assessment', date: '20 May 2025', points: '+200', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
  { title: 'Code Explorer', desc: 'Complete 5 coding challenges', date: '27 May 2025', points: '+100', icon: Code2, color: 'text-red-600', bg: 'bg-red-50' },
  { title: 'Skill Builder', desc: 'Improve 5 different skills', date: '02 Jun 2025', points: '+200', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Milestone Maker', desc: 'Earn 2000 achievement points', date: '07 Jun 2025', points: '+250', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: 'Daily Hero', desc: 'Complete 5 assessments in a day', date: '12 Jun 2025', points: '+150', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  { title: 'Social Butterfly', desc: 'Share 10 certificates', date: '15 Jun 2025', points: '+100', icon: Share2, color: 'text-pink-500', bg: 'bg-pink-50' },
  { title: 'Night Owl', desc: 'Complete a lesson after 12 AM', date: '18 Jun 2025', points: '+50', icon: Clock, color: 'text-indigo-400', bg: 'bg-indigo-50' },
  { title: 'Speed Demon', desc: 'Finish assessment in 5 mins', date: '20 Jun 2025', points: '+200', icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-50' },
];

const inProgress = [
  { title: '30 Day Streak', sub: 'Maintain a 30 day learning streak', progress: '12 / 30', points: '+300', icon: Flame, color: 'text-red-500', bg: 'bg-red-50', pct: 40 },
  { title: '100 Assessments', sub: 'Complete 100 assessments', progress: '28 / 100', points: '+500', icon: Award, color: 'text-green-500', bg: 'bg-green-50', pct: 28 },
  { title: 'Skill Expert', sub: 'Reach level 5 in any 10 skills', progress: '6 / 10', points: '+500', icon: Zap, color: 'text-indigo-500', bg: 'bg-indigo-50', pct: 60 },
  { title: 'All Rounder', sub: 'Improve 20 different skills', progress: '12 / 20', points: '+400', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-50', pct: 60 },
];

const summaryData = [
  { name: 'Earned', value: 28, color: '#10b981' },
  { name: 'In Progress', value: 12, color: '#6366f1' },
  { name: 'Locked', value: 5, color: '#cbd5e1' },
];

const leaderboard = [
  { name: 'Riya Sharma', points: '2,950 pts', rank: 1, avatar: '/avatars/riya.png' },
  { name: 'Arjun Kumar (You)', points: '2,450 pts', rank: 2, avatar: '/avatars/arjun.png', highlight: true },
  { name: 'Karan Mehta', points: '2,150 pts', rank: 3, avatar: '/avatars/karan.png' },
  { name: 'Sneha Patel', points: '1,980 pts', rank: 4, avatar: '/avatars/sneha.png' },
  { name: 'Aditya Verma', points: '1,750 pts', rank: 5, avatar: '/avatars/aditya.png' },
];

const streakData = [
  { day: 'Mon', val: 10 },
  { day: 'Tue', val: 12 },
  { day: 'Wed', val: 11 },
  { day: 'Thu', val: 14 },
  { day: 'Fri', val: 13 },
  { day: 'Sat', val: 16 },
  { day: 'Sun', val: 15 },
];

export default function AchievementsPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]" suppressHydrationWarning={true}>
      <Header title="Achievements" showSearch={false} />

      <div className="p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-start -mt-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Achievements</h1>
            <p className="text-slate-500 font-medium mt-1">
              Celebrate your milestones and track your success journey.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] h-full relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                  <stat.icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 truncate">{stat.label}</h3>
                  <div className="text-lg font-black text-[#0F172A] leading-none mb-1">{stat.val}</div>
                  <div className={`text-[10px] font-bold truncate ${stat.trend ? 'text-green-500' : 'text-slate-400'}`}>
                    {stat.sub || stat.trend}
                  </div>
                </div>
              </div>
              {stat.progress !== undefined && (
                <div className="mt-4 space-y-1.5">
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-fuchsia-500 rounded-full" style={{ width: `${stat.progress}%` }} />
                  </div>
                  <p className="text-[9px] font-bold text-slate-400">500 points to go</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            {/* Tabs and Filters */}
            <div className="space-y-6">
              <div className="flex items-center gap-8 border-b border-slate-100">
                {['All Achievements', 'In Progress', 'Locked', 'Special Achievements'].map((tab, idx) => (
                  <button key={tab} className={`text-[11px] font-bold pb-4 relative ${
                    idx === 0 ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600 transition-colors'
                  }`}>
                    {tab}
                    {idx === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[200px] relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search achievements..." 
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-[11px] font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div className="flex items-center gap-2">
                  {['All Categories', 'All Status'].map((f) => (
                    <button key={f} className="px-3 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-center gap-2">
                      {f} <ChevronDown size={14} className="text-slate-400" />
                    </button>
                  ))}
                  <div className="h-4 w-px bg-slate-100 mx-2" />
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    Sort by: <span className="text-slate-800 flex items-center gap-1 cursor-pointer">Recently Earned <ChevronDown size={14} /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Earned Achievements Section */}
            <div className="space-y-6">
              <h3 className="font-black text-slate-800 text-sm uppercase tracking-wider">Earned Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {earnedAchievements.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center group hover:border-indigo-100 transition-all hover:shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3">
                       <span className="text-[10px] font-black text-amber-500 flex items-center gap-0.5">
                         {item.points} <Star size={10} fill="currentColor" />
                       </span>
                    </div>
                    <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm`}>
                       <item.icon size={28} />
                    </div>
                    <h4 className="text-[13px] font-black text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium mb-4 leading-tight">{item.desc}</p>
                    <div className="mt-auto pt-3 border-t border-slate-50 w-full">
                       <p className="text-[9px] font-bold text-slate-300">Earned on</p>
                       <p className="text-[10px] font-black text-slate-400">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center pt-4">
                <button suppressHydrationWarning className="px-6 py-2 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm flex items-center gap-2">
                  View More Achievements <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* In Progress Section */}
            <div className="space-y-6">
              <h3 className="font-black text-slate-800 text-sm uppercase tracking-wider">In Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {inProgress.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-black text-slate-800 truncate">{item.title}</h4>
                        <p className="text-[9px] text-slate-400 font-medium truncate">{item.sub}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-black">
                        <span className="text-slate-400">{item.progress}</span>
                        <span className="text-amber-500 flex items-center gap-0.5">{item.points} <Star size={10} fill="currentColor" /></span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color.replace('text-', 'bg-')} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* Achievement Summary */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-[#0F172A] text-sm mb-6">Your Achievement Summary</h3>
              <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">

                  <PieChart>
                    <Pie
                      data={summaryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {summaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  </ResponsiveContainer>
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-black text-slate-800 leading-none">28</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Total</span>
                </div>
              </div>
              <div className="space-y-3">
                {summaryData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-bold text-slate-500">{item.name}</span>
                    </div>
                    <span className="font-black text-slate-800">
                      {item.value} <span className="text-slate-300 ml-1">({Math.round(item.value / 45 * 100)}%)</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Longest Streak Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-[#0F172A] text-sm mb-5">Longest Streak</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                    <Flame size={22} />
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-800 leading-none">12 Days</div>
                    <p className="text-[9px] font-bold text-slate-400 mt-1">Best: 18 Days</p>
                  </div>
                </div>
                <div className="h-10 w-24">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={streakData}>
                      <Line type="monotone" dataKey="val" stroke="#f97316" strokeWidth={2.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                  )}
                </div>

              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#0F172A] text-sm">Leaderboard (This Month)</h3>
                <button suppressHydrationWarning className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {leaderboard.map((user, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-2 rounded-2xl transition-all ${user.highlight ? 'bg-indigo-50 border border-indigo-100 shadow-sm' : ''}`}>
                    <span className={`text-[10px] font-black w-4 ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-slate-400' : 'text-slate-300'}`}>{user.rank}</span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
                       <Image 
                         src={user.avatar} 
                         alt={user.name} 
                         width={40} 
                         height={40} 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-slate-800 truncate">{user.name}</h4>
                    </div>
                    <div className="text-[10px] font-black text-slate-700">{user.points}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently Unlocked */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#0F172A] text-sm">Recently Unlocked</h3>
                <button suppressHydrationWarning className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Milestone Maker', sub: 'Earn 2000 achievement points', date: '07 Jun 2025', points: '+250', color: 'text-purple-500', bg: 'bg-purple-50', icon: Trophy },
                  { title: 'Skill Builder', sub: 'Improve 5 different skills', date: '02 Jun 2025', points: '+200', color: 'text-emerald-500', bg: 'bg-emerald-50', icon: CheckCircle2 },
                  { title: 'Practice Pro', sub: 'Answer 500 practice questions', date: '14 May 2025', points: '+150', color: 'text-orange-500', bg: 'bg-orange-50', icon: Target },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-slate-800 truncate">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-medium truncate">{item.sub}</p>
                      <p className="text-[8px] font-bold text-slate-300 mt-0.5">{item.date}</p>
                    </div>
                    <div className="text-[10px] font-black text-amber-500 flex items-center gap-0.5">{item.points} <Star size={10} fill="currentColor" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
