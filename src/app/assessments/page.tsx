'use client';

import React from 'react';
import Header from '@/components/Header';
import {
  FileText,
  Trophy,
  TrendingUp,
  Clock,
  CheckCircle,
  Search,
  Filter,
  ChevronDown,
  Calendar,
  MoreVertical,
  Database,
  ShieldCheck,
  ArrowRight,
  Code2,
  Building2,
  BrainCircuit,
  Terminal,
  Layout,
  Cpu,
  Sparkles,
  Zap
} from 'lucide-react';






const assessmentStats = [
  { label: 'Tests Attempted', value: '56', sub: '12 Completed • 44 In Progress', icon: FileText, color: '#8b5cf6' },
  { label: 'Average Score', value: '76%', sub: '6% from last month', icon: Trophy, color: '#22c55e' },
  { label: 'Average Percentile', value: '78.4', sub: '5.2 from last month', icon: TrendingUp, color: '#f59e0b' },
  { label: 'Total Time Spent', value: '18h 45m', sub: '2h 30m this week', icon: Clock, color: '#3b82f6' },
  { label: 'Accuracy', value: '74.6%', sub: '4.3% from last week', icon: CheckCircle, color: '#ef4444' },
];

const assessments = [
  { id: 1, name: 'Data Structures - Advanced', type: 'Subject', difficulty: 'Hard', duration: '90 min', questions: 30, attempts: 2, bestScore: '82% (92 %ile)', status: 'Completed' },
  { id: 2, name: 'SQL Advanced Test', type: 'Subject', difficulty: 'Medium', duration: '60 min', questions: 25, attempts: 1, bestScore: '76% (78 %ile)', status: 'Completed' },
  { id: 3, name: 'TCS NQT Mock Test', type: 'Company', difficulty: 'Medium', duration: '120 min', questions: 100, attempts: 1, bestScore: '71% (76 %ile)', status: 'Completed' },
  { id: 4, name: 'Aptitude - Quantitative', type: 'Subject', difficulty: 'Easy', duration: '45 min', questions: 20, attempts: 2, bestScore: '84% (94 %ile)', status: 'Completed' },
  { id: 5, name: 'Python Programming Test', type: 'Subject', difficulty: 'Medium', duration: '60 min', questions: 25, attempts: 1, bestScore: '68% (72 %ile)', status: 'In Progress' },
];

export default function AssessmentsPage() {
  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning={true}>

      <Header title="Assessments" />

      <div className="p-8">
        <p className="text-muted text-sm font-medium -mt-4 mb-8">Evaluate your skills, track performance and improve continuously.</p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {assessmentStats.map((stat, i) => (
            <div key={i} className="card-premium flex items-center gap-4 !p-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}15`, color: stat.color }}>
                <stat.icon size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted uppercase tracking-widest leading-none mb-1">{stat.label}</div>
                <div className="text-xl font-black text-primary-navy leading-none">{stat.value}</div>
                <div className="text-[9px] text-muted font-bold mt-1 leading-tight">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-6">
          <div className="flex gap-10">
            {['All Assessments', 'Recommended', 'Company Tests', 'Subject Tests', 'Saved', 'Attempted'].map((tab, i) => (
              <button key={tab} className={`pb-4 text-sm font-bold transition-all relative ${i === 0 ? 'text-accent-red' : 'text-muted hover:text-primary-navy'}`}>
                {tab}
                {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-red"></div>}
              </button>
            ))}
          </div>
        </div>        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                {['All Types', 'All Subjects', 'All Difficulty', 'All Status'].map(f => (
                  <div key={f} className="bg-white border border-border px-3 py-1.5 rounded-lg text-[10px] font-bold text-primary-navy flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 transition-all">
                    {f} <ChevronDown size={12} />
                  </div>
                ))}
              </div>
              <div className="flex-1 min-w-[200px] bg-white border border-border px-3 py-1.5 rounded-lg flex items-center gap-2 focus-within:ring-2 focus-within:ring-accent-red/20 transition-all">
                <Search size={14} className="text-muted" />
                <input type="text" placeholder="Search assessments..." className="bg-transparent border-none outline-none text-[10px] w-full" />
              </div>
              <button className="bg-white border border-border px-3 py-1.5 rounded-lg text-[10px] font-bold text-primary-navy flex items-center gap-2 hover:bg-slate-50">
                <Filter size={14} /> Filters
              </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-premium border-slate-100">
              <div className="p-4 border-b border-slate-50 flex items-center gap-2">
                <h3 className="text-[13px] font-bold text-slate-800">All Assessments</h3>
                <span className="text-[13px] font-medium text-slate-400">(28)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50/50 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="px-2 py-3">Assessment</th>
                      <th className="px-2 py-3 text-center">Type</th>
                      <th className="px-2 py-3 text-center">Difficulty</th>
                      <th className="px-2 py-3 text-center">Duration</th>
                      <th className="px-2 py-3 text-center">Questions</th>
                      <th className="px-2 py-3 text-center">Attempts</th>
                      <th className="px-2 py-3 text-center">Best Score</th>
                      <th className="px-2 py-3 text-center">Status</th>
                      <th className="px-2 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { name: 'Data Structures - Advanced', topics: 'Arrays, Linked List, Stack, Queue, Trees', type: 'Subject', diff: 'Hard', time: '90m', qs: 30, att: 2, score: '82%', ile: '92%', status: 'Completed', icon: Code2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                      { name: 'SQL Advanced Test', topics: 'Joins, Window Functions, Subqueries', type: 'Subject', diff: 'Med', time: '60m', qs: 25, att: 1, score: '76%', ile: '78%', status: 'Completed', icon: Database, color: 'text-orange-600', bg: 'bg-orange-50' },
                      { name: 'TCS NQT Mock Test', topics: 'Quant, Reasoning, Coding', type: 'Comp', diff: 'Med', time: '120m', qs: 100, att: 1, score: '71%', ile: '76%', status: 'Completed', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
                      { name: 'Aptitude - Quantitative', topics: 'Percentages, Profit & Loss, Time', type: 'Subj', diff: 'Easy', time: '45m', qs: 20, att: 2, score: '84%', ile: '94%', status: 'Completed', icon: BrainCircuit, color: 'text-green-600', bg: 'bg-green-50' },
                      { name: 'Python Programming Test', topics: 'Loops, Functions, OOPs, Exception', type: 'Subj', diff: 'Med', time: '60m', qs: 25, att: 1, score: '68%', ile: '72%', status: 'In Prog', icon: Terminal, color: 'text-purple-600', bg: 'bg-purple-50' },
                      { name: 'System Design Fundamentals', topics: 'HLD, LLD, Scalability, Caching', type: 'Subj', diff: 'Hard', time: '90m', qs: 20, att: 0, score: '-', ile: '', status: 'Not Att.', icon: Layout, color: 'text-red-500', bg: 'bg-red-50' },
                      { name: 'Zoho Schools Test', topics: 'Aptitude, Logical, Technical', type: 'Comp', diff: 'Med', time: '90m', qs: 80, att: 0, score: '-', ile: '', status: 'Not Att.', icon: Building2, color: 'text-orange-500', bg: 'bg-orange-50' },
                      { name: 'Logical Reasoning - Adv', topics: 'Puzzles, Seating, Syllogisms', type: 'Subj', diff: 'Hard', time: '60m', qs: 25, att: 0, score: '-', ile: '', status: 'Not Att.', icon: BrainCircuit, color: 'text-green-600', bg: 'bg-green-50' },
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/30 transition-colors group">
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-md ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0`}>
                              <item.icon size={12} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-bold text-slate-800 leading-none mb-0.5 truncate max-w-[120px]">{item.name}</div>
                              <div className="text-[8px] text-slate-400 font-medium truncate max-w-[100px]">{item.topics}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-3 text-center">
                          <span className="bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded text-[8px] font-bold">{item.type}</span>
                        </td>
                        <td className="px-2 py-3 text-center">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                            item.diff === 'Hard' ? 'bg-red-50 text-red-500' :
                            item.diff === 'Med' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'
                          }`}>
                            {item.diff}
                          </span>
                        </td>
                        <td className="px-2 py-3 text-center text-[9px] font-medium text-slate-500">{item.time}</td>
                        <td className="px-2 py-3 text-center text-[9px] font-medium text-slate-500">{item.qs}</td>
                        <td className="px-2 py-3 text-center text-[9px] font-medium text-slate-500">{item.att}</td>
                        <td className="px-2 py-3 text-center">
                          <div className="text-[9px] font-bold text-slate-800 leading-none">{item.score}</div>
                          {item.ile && <div className="text-[7px] text-slate-400">{item.ile}</div>}
                        </td>
                        <td className="px-2 py-3 text-center">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                            item.status === 'Completed' ? 'bg-green-50 text-green-600' :
                            item.status === 'In Prog' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-2 py-3">
                          <div className="flex items-center justify-end gap-1.5">
                            {item.status === 'Completed' ? (
                              <button className="px-2 py-1 border border-purple-100 text-purple-600 rounded text-[8px] font-bold hover:bg-purple-50">
                                Analysis
                              </button>
                            ) : item.status === 'In Prog' ? (
                              <button className="px-2 py-1 bg-purple-600 text-white rounded text-[8px] font-bold hover:bg-purple-700">
                                Continue
                              </button>
                            ) : (
                              <button className="px-2 py-1 border border-blue-100 text-blue-600 rounded text-[8px] font-bold hover:bg-blue-50">
                                Start
                              </button>
                            )}
                            <button className="text-slate-400">
                              <MoreVertical size={12} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-3 flex justify-center border-t border-slate-50">
                <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 text-[10px] font-bold hover:bg-slate-50 flex items-center gap-2">
                  Load More <ChevronDown size={12} />
                </button>
              </div>
            </div>

            {/* Smart Insights Section */}
            <div className="card-premium !p-6 bg-gradient-to-br from-white to-slate-50/30 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-[14px] font-bold text-slate-800">Smart Insights</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  { 
                    desc: 'You perform better in topics with consistent practice. Keep it up!', 
                    link: 'View Strengths', 
                    icon: Zap, 
                    color: 'text-purple-600', 
                    bg: 'bg-purple-50' 
                  },
                  { 
                    desc: 'System Design is a key area to focus on for backend roles.', 
                    link: 'View Recommended Roadmap', 
                    icon: Layout, 
                    color: 'text-blue-600', 
                    bg: 'bg-blue-50' 
                  },
                  { 
                    desc: 'Attempt company mock tests regularly to improve selection chances.', 
                    link: 'Explore Company Tests', 
                    icon: Building2, 
                    color: 'text-green-600', 
                    bg: 'bg-green-50' 
                  },
                  { 
                    desc: 'Your accuracy is improving. Focus on speed to boost scores.', 
                    link: 'View Tips', 
                    icon: TrendingUp, 
                    color: 'text-orange-600', 
                    bg: 'bg-orange-50' 
                  }
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-2">
                    <div className={`w-10 h-10 rounded-xl ${insight.bg} ${insight.color} flex items-center justify-center flex-shrink-0`}>
                      <insight.icon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2">
                        {insight.desc}
                      </p>
                      <button className="text-[10px] font-bold text-blue-600 hover:gap-2 transition-all flex items-center gap-1 group">
                        {insight.link} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-4">
            {/* Recommended for You */}
            <div className="card-premium !p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[11px] font-bold text-slate-800">Recommended for You</h4>
                <button className="text-[9px] font-bold text-blue-600 hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'System Design Mock Test', sub: 'Improve your design skills', impact: 'High Impact', time: '90 min', icon: Database, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { title: 'Advanced DSA Practice', sub: 'Focus on Trees & Graphs', impact: 'High Impact', time: '60 min', icon: Code2, color: 'text-green-600', bg: 'bg-green-50' },
                  { title: 'Database Optimization Test', sub: 'Query tuning & indexing', impact: 'Med Impact', time: '45 min', icon: ShieldCheck, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="text-[10px] font-bold text-slate-800 leading-tight mb-0.5 truncate pr-2">{item.title}</div>
                        <div className="text-[8px] font-medium text-slate-400 whitespace-nowrap">{item.time}</div>
                      </div>
                      <div className="text-[9px] text-slate-400 font-medium mb-1.5">{item.sub}</div>
                      <div className="flex justify-between items-center">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                          item.impact === 'High Impact' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          {item.impact}
                        </span>
                        <button className="text-[9px] font-bold text-blue-600 hover:underline">Start</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Calendar */}
            <div className="card-premium !p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[11px] font-bold text-slate-800">Assessment Calendar</h4>
                <button className="text-[9px] font-bold text-blue-600 hover:underline">Full Calendar</button>
              </div>
              <div className="space-y-4">
                {[
                  { m: 'MAY', d: '25', name: 'TCS Digital Mock Test', type: 'Comp Test', time: '10:00 AM', color: 'bg-red-50 text-red-500' },
                  { m: 'MAY', d: '27', name: 'SQL Mastery Challenge', type: 'Subj Test', time: '02:00 PM', color: 'bg-blue-50 text-blue-500' },
                  { m: 'MAY', d: '30', name: 'Wipro Elite Test', type: 'Comp Test', time: '11:00 AM', color: 'bg-purple-50 text-purple-500' }
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-12 rounded-xl border border-slate-100 overflow-hidden flex flex-col flex-shrink-0 group-hover:shadow-md transition-all">
                      <div className={`h-4 flex items-center justify-center text-[8px] font-black tracking-wider ${c.color.split(' ')[0]} ${c.color.split(' ')[1]}`}>
                        {c.m}
                      </div>
                      <div className="flex-1 bg-white flex items-center justify-center text-sm font-black text-slate-800">
                        {c.d}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-slate-800 leading-tight mb-0.5 truncate pr-2">{c.name}</div>
                      <div className="text-[9px] text-slate-400 font-medium">{c.type} • {c.time}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-[8px] font-bold whitespace-nowrap">
                      Upcoming
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 border border-slate-100 rounded-lg text-blue-600 text-[9px] font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                All Scheduled Tests <ArrowRight size={12} />
              </button>
            </div>

            {/* Your Recent Performance */}
            <div className="card-premium !p-4 flex-1">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[11px] font-bold text-slate-800">Your Recent Performance</h4>
                <button className="text-[9px] font-bold text-blue-600 hover:underline">View All</button>
              </div>
              <div className="overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[8px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50">
                      <th className="pb-2">Assessment</th>
                      <th className="pb-2 text-center">Score</th>
                      <th className="pb-2 text-right">Percentile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50/50">
                    {[
                      { name: 'DSA - Mixed Test', score: '82%', ile: '92 %ile' },
                      { name: 'SQL Advanced Test', score: '76%', ile: '78 %ile' },
                      { name: 'Aptitude - Quant', score: '84%', ile: '94 %ile' },
                      { name: 'Python Test', score: '68%', ile: '72 %ile' },
                      { name: 'Verbal - Advanced', score: '71%', ile: '76 %ile' }
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                        <td className="py-2.5 text-[10px] font-bold text-slate-700 truncate max-w-[100px]">{row.name}</td>
                        <td className="py-2.5 text-[10px] font-black text-slate-900 text-center">{row.score}</td>
                        <td className="py-2.5 text-[10px] font-medium text-slate-400 text-right">{row.ile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="w-full mt-4 py-2 border border-slate-100 rounded-lg text-blue-600 text-[9px] font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View Detailed Performance <ArrowRight size={12} />
              </button>
            </div>
          </aside>




        </div>
      </div>
    </div>
  );
}
