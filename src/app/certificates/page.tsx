'use client';

import React from 'react';
import Header from '@/components/Header';
import {
  Award,
  CheckCircle2,
  Clock,
  Star,
  Search,
  Filter,
  Download,
  Share2,
  MoreVertical,
  ChevronDown,
  Link2,
  MessageCircle,
  PlayCircle,
  FileDown,
  ExternalLink,
  ShieldCheck,
  Zap,
  Trophy
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const stats = [
  { label: 'Total Certificates', val: '12', trend: '↑ 3 this month', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Completed Courses', val: '18', trend: '↑ 4 this month', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'In Progress', val: '6', trend: 'Keep it up!', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Skills Certified', val: '9', trend: 'See all skills →', icon: Star, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const certificateSummary = [
  { name: 'Course Certificates', value: 8, color: '#6366f1', percent: '66.7%' },
  { name: 'Skill Certificates', value: 3, color: '#10b981', percent: '25.0%' },
  { name: 'Achievement Certificates', value: 1, color: '#f59e0b', percent: '8.3%' },
];

const certificates = [
  {
    title: 'Data Structures & Algorithms',
    type: 'Course',
    date: '10 May 2025',
    color: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'Database Management Systems',
    type: 'Course',
    date: '28 Apr 2025',
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'Operating Systems',
    type: 'Course',
    date: '15 Apr 2025',
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'SQL Mastery',
    type: 'Skill',
    date: '05 Apr 2025',
    color: 'from-orange-500/10 to-amber-500/10',
    borderColor: 'border-orange-100',
    tagColor: 'bg-green-50 text-green-600',
    variant: 'mastery'
  },
  {
    title: 'Top Performer in Assessments',
    type: 'Achievement',
    date: '01 Apr 2025',
    color: 'from-purple-500/10 to-fuchsia-500/10',
    borderColor: 'border-purple-100',
    tagColor: 'bg-orange-50 text-orange-600',
    variant: 'achievement'
  },
  {
    title: 'Web Development Fundamentals',
    type: 'Course',
    date: '22 Mar 2025',
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'Python Programming',
    type: 'Course',
    date: '10 Mar 2025',
    color: 'from-yellow-500/10 to-amber-500/10',
    borderColor: 'border-yellow-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'Machine Learning Basics',
    type: 'Course',
    date: '02 Mar 2025',
    color: 'from-red-500/10 to-rose-500/10',
    borderColor: 'border-red-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'UI/UX Design Principles',
    type: 'Course',
    date: '15 Feb 2025',
    color: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-100',
    tagColor: 'bg-blue-50 text-blue-600',
    variant: 'completion'
  },
  {
    title: 'Advanced Problem Solving',
    type: 'Skill',
    date: '10 Feb 2025',
    color: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'border-emerald-100',
    tagColor: 'bg-green-50 text-green-600',
    variant: 'mastery'
  },
  {
    title: 'JavaScript Expert',
    type: 'Skill',
    date: '25 Jan 2025',
    color: 'from-yellow-400/10 to-orange-400/10',
    borderColor: 'border-yellow-100',
    tagColor: 'bg-green-50 text-green-600',
    variant: 'mastery'
  },
  {
    title: 'Monthly Top Scorer',
    type: 'Achievement',
    date: '15 Jan 2025',
    color: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-100',
    tagColor: 'bg-orange-50 text-orange-600',
    variant: 'achievement'
  },
];

const recentAchievements = [
  { title: 'Top Performer', sub: 'Scored in top 5% in assessments', date: '01 Apr 2025', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: '7 Day Streak', sub: 'Maintained a 7 day learning streak', date: '22 Apr 2025', icon: Zap, color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'Skill Master', sub: 'Reached 90%+ in SQL', date: '05 Apr 2025', icon: Star, color: 'text-orange-600', bg: 'bg-orange-50' },
];

function CertificateThumbnail({ title, date, variant }: { title: string, date: string, variant: string }) {
  return (
    <div className={`aspect-[1.4/1] w-full bg-white border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-between relative overflow-hidden shadow-inner`}>
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-100 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-100 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-100 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-100 rounded-br-lg" />
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center rotate-12 scale-150">
         <ShieldCheck size={200} />
      </div>

      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-1 mb-2">
          <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center text-[6px] text-white font-black italic">S</div>
          <span className="text-[8px] font-black text-slate-800 tracking-tighter">SMART</span>
        </div>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certificate</h4>
        <p className="text-[6px] font-bold text-slate-400 uppercase tracking-widest">
          {variant === 'mastery' ? 'of Skill Mastery' : variant === 'achievement' ? 'of Achievement' : 'of Completion'}
        </p>
      </div>

      <div className="text-center">
        <p className="text-[6px] font-bold text-slate-400 mb-1">This is to certify that</p>
        <h3 className="text-[12px] font-serif italic text-slate-800 border-b border-slate-100 pb-1 px-4 mb-2">Arjun Kumar</h3>
        <p className="text-[6px] font-bold text-slate-400 mb-1">has successfully completed the {variant === 'mastery' ? 'skill assessment' : variant === 'achievement' ? 'achievement goal' : 'course'}</p>
        <h4 className="text-[9px] font-black text-slate-800 leading-tight px-2">{title}</h4>
      </div>

      <div className="w-full flex justify-between items-end px-2">
        <div className="text-left">
          <p className="text-[5px] font-bold text-slate-400">Completed on</p>
          <p className="text-[6px] font-black text-slate-800">{date}</p>
        </div>
        
        {/* Seal */}
        <div className="relative w-8 h-8 flex items-center justify-center">
           <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-pulse" />
           <Award className="text-amber-500 z-10" size={16} />
           <div className="absolute -bottom-1 w-2 h-4 bg-amber-500/30 rounded-sm skew-x-12" />
           <div className="absolute -bottom-1 w-2 h-4 bg-amber-500/30 rounded-sm -skew-x-12" />
        </div>

        <div className="text-right">
           <div className="h-4 border-b border-slate-200 mb-0.5" />
           <p className="text-[5px] font-black text-slate-800">Rohit Sharma</p>
           <p className="text-[4px] font-bold text-slate-400 uppercase">CEO, SMART</p>
        </div>
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]" suppressHydrationWarning={true}>
      <Header title="Certificates" showSearch={false} />

      <div className="p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-start -mt-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Certificates</h1>
            <p className="text-slate-500 font-medium mt-1">
              Track your achievements and showcase your skills.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <stat.icon size={20} />
                </div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</h3>
              </div>
              <div className="mb-auto">
                <div className="text-2xl font-black text-[#0F172A] leading-none mb-1.5">{stat.val}</div>
                <div className={`text-[10px] font-bold ${stat.trend.includes('↑') ? 'text-green-500' : 'text-blue-500'}`}>
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content: Tabs and Grid */}
          <div className="lg:col-span-9 space-y-6">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-slate-100 overflow-x-auto no-scrollbar">
              {['All Certificates', 'Course Certificates', 'Skill Certificates', 'Achievement Certificates', 'Expired Certificates'].map((tab, idx) => (
                <button key={tab} className={`text-[11px] font-bold pb-4 relative whitespace-nowrap ${
                  idx === 0 ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600 transition-colors'
                }`}>
                  {tab}
                  {idx === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
                </button>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search certificates..." 
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-[11px] font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                {['All Types', 'All Status', 'Newest First'].map((filter) => (
                  <button key={filter} className="px-3 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-center gap-2 shadow-sm hover:border-slate-200 transition-colors">
                    {filter} <ChevronDown size={14} className="text-slate-400" />
                  </button>
                ))}
                <button className="text-[10px] font-black text-blue-600 hover:underline px-2">Clear Filters</button>
              </div>
            </div>

            {/* Certificate Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <div key={idx} className="group">
                  <div className={`p-1 rounded-2xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} shadow-sm group-hover:shadow-md transition-all duration-300`}>
                    <CertificateThumbnail title={cert.title} date={cert.date} variant={cert.variant} />
                  </div>
                  <div className="mt-4 px-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-[12px] font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{cert.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase ${cert.tagColor}`}>
                        {cert.type}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium mb-3">Completed on {cert.date}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-3">
                         <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Download">
                           <Download size={14} />
                         </button>
                         <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Share">
                           <Share2 size={14} />
                         </button>
                      </div>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-all">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                Load More Certificates <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* Summary Chart */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-[#0F172A] text-sm mb-6">Your Certificate Summary</h3>
              <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>
                      <Pie
                        data={certificateSummary}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={55}
                        paddingAngle={8}
                        dataKey="value"
                      >
                        {certificateSummary.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-black text-slate-800 leading-none">12</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Total</span>
                </div>
              </div>
              <div className="space-y-3">
                {certificateSummary.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-bold text-slate-500">{item.name}</span>
                    </div>
                    <span className="font-black text-slate-800">{item.value} <span className="text-slate-300 ml-1">({item.percent})</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Certificates Matter */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-50/50 rounded-full blur-2xl" />
               <h3 className="font-bold text-[#0F172A] text-sm mb-5 relative z-10">Why Certificates Matter?</h3>
               <div className="space-y-4 relative z-10">
                 {[
                   'Showcase your skills to employers',
                   'Stand out in job applications',
                   'Build credibility and confidence',
                   'Track your learning journey',
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start gap-2.5">
                     <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <CheckCircle2 size={10} className="text-green-500" />
                     </div>
                     <span className="text-[10px] font-medium text-slate-600">{item}</span>
                   </div>
                 ))}
               </div>
               {/* Illustration Placeholder */}
               <div className="mt-6 p-4 bg-slate-50 rounded-2xl flex items-center justify-center">
                  <div className="relative">
                    <Award size={48} className="text-indigo-200" />
                    <Star size={16} className="text-amber-400 absolute -top-1 -right-1" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-200 rounded-full blur-sm" />
                  </div>
               </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#0F172A] text-sm">Recent Achievements</h3>
                <button className="text-blue-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-5">
                {recentAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-medium truncate">{item.sub}</p>
                      <p className="text-[8px] font-bold text-slate-300 mt-0.5">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Success */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
               <h3 className="text-sm font-bold mb-2">Share Your Success</h3>
               <p className="text-[10px] text-slate-400 mb-6">Download or share your certificates on professional platforms.</p>
               <div className="flex items-center gap-3 mb-6">
                 {[Link2, MessageCircle, PlayCircle].map((Icon, idx) => (
                   <button key={idx} className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                     <Icon size={16} />
                   </button>
                 ))}
               </div>
               <button className="w-full py-2.5 bg-white text-slate-900 rounded-xl text-[11px] font-black flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                 <FileDown size={16} /> Download All
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
