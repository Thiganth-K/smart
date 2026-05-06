'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  CheckCircle2, 
  PlayCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Bot,
  MoreVertical,
  Code2,
  Layout,
  Database
} from 'lucide-react';

const learningStats = [
  { label: 'Courses Enrolled', value: '8', sub: '2 in progress', icon: BookOpen, color: '#8b5cf6' },
  { label: 'Lessons Completed', value: '46', sub: '12 this week', icon: CheckCircle2, color: '#22c55e' },
  { label: 'Study Time', value: '18h 45m', sub: '2h 30m this week', icon: Clock, color: '#3b82f6' },
  { label: 'Certificates Earned', value: '3', sub: 'View all', icon: Trophy, color: '#f59e0b' },
];

const learningPath = [
  { name: 'Data Structures & Algorithms', desc: 'Master the fundamentals of DSA with hands-on practice.', progress: 65, lessons: '28 / 45', time: '12h 30m', color: '#8b5cf6' },
  { name: 'System Design Fundamentals', desc: 'Learn how to design scalable and reliable systems.', progress: 35, lessons: '14 / 40', time: '6h 15m', color: '#22c55e' },
  { name: 'Database Management Systems', desc: 'Understand SQL, normalization, indexing and more.', progress: 50, lessons: '20 / 40', time: '8h 10m', color: '#f59e0b' },
];

export default function LearningHubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        title="Learning Hub" 
        description="Personalized learning to strengthen your skills and accelerate your career."
      />
      
      <div className="p-8">


        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          {/* Your Learning Journey (Larger) */}
          <div className="lg:col-span-5 card-premium p-8 flex flex-col justify-between">
            <h3 className="text-[18px] font-bold text-slate-800 mb-10">Your Learning Journey</h3>
            <div className="flex flex-col md:flex-row gap-10 items-center flex-1">
              {/* Left Side: Circular Progress */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <defs>
                      <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                    <circle 
                      cx="88" cy="88" r="78" 
                      fill="none" 
                      stroke="#f1f5f9" 
                      strokeWidth="10" 
                    />
                    <circle 
                      cx="88" cy="88" r="78" 
                      fill="none" 
                      stroke="url(#journeyGradient)" 
                      strokeWidth="10" 
                      strokeDasharray="490.09"
                      strokeDashoffset={490.09 * (1 - 0.68)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[32px] font-black text-slate-800 tracking-tighter">68%</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Overall Progress</span>
                  </div>
                </div>
                <p className="text-[13px] font-medium text-slate-500 mt-8 text-center max-w-[180px] leading-relaxed">
                  Great job! You're making strong progress 🎉
                </p>
              </div>

              {/* Right Side: Roadmap Details */}
              <div className="flex-1 space-y-10 w-full flex flex-col justify-center">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Current Roadmap</span>
                  <h4 className="text-[20px] font-black text-slate-800 mb-4 tracking-tight">Full Stack Developer</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" style={{ width: '68%' }} />
                    </div>
                    <span className="text-[14px] font-black text-slate-800">68%</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3">Next Milestone</span>
                  <div className="space-y-2">
                    <h5 className="text-[15px] font-bold text-slate-700">Complete System Design Module</h5>
                    <div className="flex items-center gap-2 text-slate-500">
                      <TrendingUp size={14} className="text-green-500" />
                      <span className="text-[11px] font-bold">38 topics completed</span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-[13px] font-bold text-primary-purple hover:gap-3 transition-all group mt-2">
                  View Roadmap <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid (Middle) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {learningStats.map((stat, i) => (
              <div key={i} className="card-premium !p-4 flex flex-col justify-between">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}15`, color: stat.color }}>
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest leading-none mb-1 mt-3">{stat.label}</div>
                  <div className="text-lg font-black text-primary-navy leading-none">{stat.value}</div>
                  <div className="text-[8px] text-muted font-bold mt-1">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Learning (Modernized) */}
          <div className="lg:col-span-3 card-premium p-5 flex flex-col h-full">
            <h3 className="text-[14px] font-bold text-slate-800 mb-6">Continue Learning</h3>
            
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden mb-6 shadow-sm flex flex-col flex-1">
              <div className="relative h-32 w-full overflow-hidden">
                <Image 
                  src="/system-design.png" 
                  alt="System Design" 
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500" 
                />
                <div className="absolute top-3 right-3">
                   <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-primary-purple text-[9px] font-bold shadow-sm">In Progress</span>
                </div>
              </div>
              
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="mb-4">
                  <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1">System Design Fundamentals</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Scalability, HLD, LLD & Caching</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-end mb-1.5">
                      <span className="text-[10px] font-bold text-slate-500">Progress</span>
                      <span className="text-[11px] font-black text-primary-purple">35%</span>
                    </div>
                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-purple rounded-full shadow-[0_0_8px_rgba(79,70,229,0.3)] transition-all duration-1000" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-purple text-white py-3 rounded-xl font-bold text-[13px] shadow-lg shadow-primary-purple/20 hover:bg-primary-light transition-all flex items-center justify-center gap-2">
                    <PlayCircle size={16} />
                    Continue Lesson
                  </button>
                </div>
              </div>
            </div>

            <button className="text-[11px] font-bold text-primary-purple hover:underline flex items-center justify-center gap-1.5">
              View My Courses <ArrowRight size={14} />
            </button>
          </div>
        </div>



        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-8 border-b border-slate-100 w-full">
                <button className="text-[13px] font-bold text-primary-purple border-b-2 border-primary-purple pb-3">In Progress (4)</button>
                <button className="text-[13px] font-medium text-slate-400 hover:text-slate-600 pb-3 transition-colors">Upcoming (2)</button>
                <button className="text-[13px] font-medium text-slate-400 hover:text-slate-600 pb-3 transition-colors">Completed (3)</button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {[
                  { name: 'Data Structures & Algorithms', desc: 'Master the fundamentals of DSA with hands-on practice.', progress: 65, lessons: '28 / 45', time: '12h 30m', color: 'text-primary-purple', bg: 'bg-primary-purple/10', icon: Code2 },
                  { name: 'System Design Fundamentals', desc: 'Learn how to design scalable and reliable systems.', progress: 35, lessons: '16 / 40', time: '6h 15m', color: 'text-green-600', bg: 'bg-green-50', icon: Layout },
                  { name: 'Database Management Systems', desc: 'Understand SQL, normalization, indexing and more.', progress: 50, lessons: '20 / 40', time: '8h 10m', color: 'text-orange-600', bg: 'bg-orange-50', icon: Database },
                  { name: 'Advanced JS Patterns', desc: 'Deep dive into closures, prototypes, and async patterns.', progress: 25, lessons: '10 / 35', time: '4h 45m', color: 'text-blue-600', bg: 'bg-blue-50', icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="card-premium flex items-center gap-6 group hover:border-primary-purple/20 transition-all p-4">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105`}>
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h4 className="text-[14px] font-bold text-slate-800">{item.name}</h4>
                        <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-4 max-w-sm">
                        <div className="flex-1 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${item.bg.replace('bg-', 'bg-').replace('50', '500')}`} style={{ width: `${item.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{item.progress}% Complete</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 px-6 border-l border-slate-50">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1.5 text-slate-400 mb-1">
                          <BookOpen size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">{item.lessons}</span>
                        </div>
                        <div className="text-[9px] font-medium text-slate-400 uppercase">Lessons</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1.5 text-slate-400 mb-1">
                          <Clock size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">{item.time}</span>
                        </div>
                        <div className="text-[9px] font-medium text-slate-400 uppercase">Time Spent</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="bg-white border border-primary-purple/20 text-primary-purple px-4 py-2 rounded-xl text-[11px] font-bold hover:bg-primary-purple/5 transition-all">
                        Continue
                      </button>
                      <button className="text-slate-300 hover:text-slate-500">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-auto pt-6 text-[11px] font-bold text-primary-purple hover:underline flex items-center justify-center gap-1.5">
                View All Enrolled Courses <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <aside className="w-full lg:w-80 space-y-6">
            <div className="card-premium !p-5">
              <h4 className="text-[12px] font-bold text-slate-800 mb-5">Recommended</h4>
              <div className="space-y-5">
                {[
                  { name: 'Advanced SQL', desc: 'Optimize complex queries.', meta: 'Intermediate • 4h 30m', icon: Database, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
                  { name: 'React.js Basics', desc: 'Build modern UIs.', meta: 'Beginner • 5h 20m', icon: Code2, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { name: 'Operating Systems', desc: 'Understand OS concepts.', meta: 'Intermediate • 6h 15m', icon: Layout, color: 'text-orange-600', bg: 'bg-orange-50' }
                ].map((r, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl ${r.bg} ${r.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <r.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-bold text-slate-800 leading-tight mb-1">{r.name}</div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mb-1">{r.desc}</div>
                      <div className="text-[9px] font-bold text-slate-400">{r.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium !p-5">
              <h4 className="text-[12px] font-bold text-slate-800 mb-5">Featured Learning Resources</h4>
              <div className="space-y-4">
                {[
                  { name: 'Top 50 DSA Questions', desc: 'Curated list of must-do problems.', icon: BookOpen, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
                  { name: 'System Design Cheatsheet', desc: 'High-level guide with diagrams.', icon: Layout, color: 'text-green-600', bg: 'bg-green-50' },
                  { name: 'Frontend Developer Roadmap', desc: 'Step-by-step learning path.', icon: Sparkles, color: 'text-red-500', bg: 'bg-red-50' }
                ].map((res, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg ${res.bg} ${res.color} flex items-center justify-center flex-shrink-0`}>
                      <res.icon size={14} />
                    </div>
                    <div>
                      <h6 className="text-[11px] font-bold text-slate-800 leading-tight">{res.name}</h6>
                      <p className="text-[9px] text-slate-400 font-medium mt-0.5">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Roadmap Timeline */}
        <div className="mt-8 card-premium !p-8">
          <h3 className="text-[14px] font-bold text-slate-800 mb-10">Learning Roadmap</h3>
          <div className="relative flex justify-between">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-100 -z-0"></div>
            {[
              { title: 'Strengthen DSA', desc: '200+ problems', status: 'Completed', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-500' },
              { title: 'Learn System Design', desc: 'Core concepts', status: 'Completed', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-500' },
              { title: 'Build Projects', desc: 'Real-world projects', status: 'In Progress', icon: PlayCircle, color: 'text-primary-purple', bg: 'bg-primary-purple/10', border: 'border-primary-purple' },
              { title: 'Advanced Topics', desc: 'Deep dive', status: 'Upcoming', icon: Sparkles, color: 'text-slate-300', bg: 'bg-white', border: 'border-slate-100' },
              { title: 'Interview Ready', desc: 'Mock interviews', status: 'Upcoming', icon: Trophy, color: 'text-slate-300', bg: 'bg-white', border: 'border-slate-100' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center w-40">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 bg-white mb-4 ${step.border} ${step.color} shadow-sm`}>
                  <step.icon size={20} />
                </div>
                <h6 className="text-[11px] font-bold text-slate-800 mb-1">{step.title}</h6>
                <p className="text-[9px] text-slate-400 font-medium mb-2">{step.desc}</p>
                <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                  step.status === 'Completed' ? 'bg-green-50 text-green-600' :
                  step.status === 'In Progress' ? 'bg-primary-purple/10 text-primary-purple' : 'bg-slate-50 text-slate-400'
                }`}>
                  {step.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 text-[11px] font-bold text-primary-purple hover:underline flex items-center justify-center gap-1.5">
            View Full Roadmap <ArrowRight size={14} />
          </button>
        </div>

        {/* Bottom AI Modules */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-premium !bg-primary-purple/10/30 border-primary-purple/20 p-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-purple">
                <Bot size={28} />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-1">AI Learning Assistant</h4>
                <p className="text-[11px] text-slate-500 font-medium max-w-[280px]">
                  Not sure what to learn next? I can help you create a personalized study plan.
                </p>
              </div>
            </div>
            <button className="bg-primary-purple text-white px-5 py-2.5 rounded-xl text-[11px] font-bold hover:bg-primary-light transition-all shadow-md shadow-primary-purple/20">
              Ask AI Assistant
            </button>
          </div>

          <div className="card-premium !bg-amber-50/30 border-amber-100 p-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-500">
                <Sparkles size={28} />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-1">Smart Recommendation</h4>
                <p className="text-[11px] text-slate-500 font-medium max-w-[280px]">
                  Based on your performance, we recommend focusing on System Design to improve readiness.
                </p>
              </div>
            </div>
            <button className="bg-white border border-amber-100 text-amber-600 px-5 py-2.5 rounded-xl text-[11px] font-bold hover:bg-amber-50 transition-all shadow-sm">
              View Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
