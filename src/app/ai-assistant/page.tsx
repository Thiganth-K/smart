'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import {
  Compass,
  Code2,
  BookOpen,
  FileText,
  Users,
  Send,
  Sparkles,
  MessageSquare,
  Search,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  Zap,
  Star,
  CheckCircle2,
  Trophy,
  History,
  MoreVertical,
  Paperclip,
  Mic,
  ArrowRight,
  Layout,
  Target,
  FileSearch,
  Map,
  Clock,
  Award
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const capabilities = [
  { title: 'Career Guidance', desc: 'Help me choose the right career path', icon: Compass, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: 'Skill Advice', desc: 'What skills should I learn next?', icon: Code2, color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'Learning Help', desc: 'Suggest resources to learn DSA', icon: BookOpen, color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: 'Resume Review', desc: 'Review my resume and improve it', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Interview Prep', desc: 'Help me prepare for technical interviews', icon: Users, color: 'text-red-600', bg: 'bg-red-50' },
];

const insightsData = [
  { name: 'Completed', value: 85, color: '#6366f1' },
  { name: 'Remaining', value: 15, color: '#f1f5f9' },
];

const recommendedContent = [
  { title: 'Master DSA with Java', type: 'Course', info: '42 Lessons', match: '94% Match', icon: Code2, color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'System Design Interview Guide', type: 'Guide', info: '18 Sections', match: '91% Match', icon: Layout, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'React.js Complete Guide', type: 'Course', info: '36 Lessons', match: '88% Match', icon: Zap, color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

const quickActions = [
  { title: 'Skill Gap Analysis', desc: 'Find skills to improve', icon: BrainCircuit, color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'Resume Builder', desc: 'Create/Improve resume', icon: FileSearch, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Mock Interview', desc: 'Practice with AI', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: 'Roadmap Generator', desc: 'Get personalized plan', icon: Map, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const popularQuestions = [
  'What skills should I learn to get a high paying job?',
  'Which programming language should I learn next?',
  'How to prepare for coding interviews?',
  'How to get an internship in the 3rd year?',
  'What are the best projects to build for my portfolio?',
  'How can I improve my communication skills?'
];

export default function AIAssistantPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      content: "Hi Arjun! 👋 I'm your AI career assistant. How can I help you today?",
      suggestions: [
        "What are the best career options for me?",
        "Which skills are most in-demand in 2025?",
        "Create a study plan for Data Structures",
        "How can I improve my problem solving skills?"
      ]
    },
    {
      role: 'user',
      content: "What are the best career options for me?"
    },
    {
      role: 'bot',
      content: "Based on your skills, interests and assessments, here are the top career paths that suit you:",
      careerPaths: [
        { id: 1, name: 'Full Stack Developer', tags: ['High Demand', 'Great Growth'], match: '92% Match' },
        { id: 2, name: 'Software Engineer', tags: ['High Demand', 'Stable Growth'], match: '87% Match' },
        { id: 3, name: 'Backend Developer', tags: ['High Demand', 'Great Growth'], match: '85% Match' },
      ],
      actions: ['Yes, show details', 'Maybe later']
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]" suppressHydrationWarning={true}>
      <Header 
        title="AI Assistant" 
        description="Your intelligent career companion to guide, support and help you grow." 
        showSearch={false} 
      />

      <div className="p-8 space-y-8 pb-12">


        {/* Capabilities Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center gap-4 group cursor-pointer hover:border-primary-purple/20 transition-all">
              <div className={`w-11 h-11 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                <item.icon size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] font-black text-slate-800 mb-0.5 truncate">{item.title}</h3>
                <p className="text-[10px] text-slate-400 font-medium leading-tight line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chat Section */}
          <div className="lg:col-span-9 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm min-h-[600px] flex flex-col relative overflow-hidden">
              {/* Messages Area */}
              <div className="flex-1 p-8 space-y-8 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-4`}>
                    {msg.role === 'bot' && (
                      <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                        <Sparkles size={18} />
                      </div>
                    )}
                    <div className={`max-w-[80%] space-y-4 ${msg.role === 'user' ? 'order-1' : 'order-2'}`}>
                      <div className={`p-5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary-purple text-white shadow-primary-purple/20 shadow-xl rounded-tr-none' 
                          : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
                      }`}>
                        {msg.content}
                        
                        {msg.careerPaths && (
                          <div className="mt-6 space-y-3">
                            {msg.careerPaths.map((path) => (
                              <div key={path.id} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <span className="text-[11px] font-black text-primary-purple bg-primary-purple/10 w-6 h-6 rounded-lg flex items-center justify-center">{path.id}</span>
                                  <div>
                                    <h5 className="font-bold text-slate-800 text-[12px]">{path.name}</h5>
                                    <div className="flex gap-2 mt-1">
                                      {path.tags.map(tag => (
                                        <span key={tag} className="text-[8px] font-black uppercase text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">{tag}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[10px] font-black text-green-600">{path.match}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {msg.actions && (
                          <div className="flex gap-3 mt-6">
                            {msg.actions.map((action, i) => (
                              <button key={action} suppressHydrationWarning className={`px-4 py-2 rounded-xl text-[11px] font-bold transition-all ${
                                i === 0 ? 'bg-primary-purple text-white hover:bg-primary-light shadow-lg shadow-primary-purple/20' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                              }`}>
                                {action}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {msg.suggestions && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {msg.suggestions.map((s, i) => (
                            <button key={i} suppressHydrationWarning className="text-left p-3 rounded-xl border border-slate-100 bg-white hover:border-primary-purple/30 hover:bg-primary-purple/5 transition-all text-[11px] font-bold text-slate-600 flex items-center gap-2 group">
                              <MessageSquare size={14} className="text-primary-purple/60 group-hover:text-primary-purple" />
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                <div className="relative flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      suppressHydrationWarning
                      placeholder="Ask anything about careers, skills, learning, jobs..." 
                      className="w-full pl-5 pr-14 py-4 bg-white border border-slate-100 rounded-2xl text-[13px] font-medium focus:outline-none focus:ring-4 focus:ring-primary-purple/5 focus:border-primary-purple transition-all shadow-sm"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                       <button suppressHydrationWarning className="p-2 text-slate-400 hover:text-primary-purple transition-colors">
                         <Paperclip size={18} />
                       </button>
                       <button suppressHydrationWarning className="p-2 text-slate-400 hover:text-primary-purple transition-colors">
                         <Mic size={18} />
                       </button>
                    </div>
                  </div>
                  <button suppressHydrationWarning className="p-4 bg-primary-purple text-white rounded-2xl shadow-lg shadow-primary-purple/20 hover:bg-primary-light transition-all hover:scale-105 active:scale-95">
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 text-center">AI responses may not always be accurate. Please verify important information.</p>
              </div>
            </div>

            {/* Popular Questions Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-black text-slate-800 text-sm uppercase tracking-wider">Popular Questions</h3>
                <button suppressHydrationWarning className="text-primary-purple text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularQuestions.map((q, idx) => (
                  <button key={idx} suppressHydrationWarning className="bg-white border border-slate-100 rounded-2xl p-4 text-left group hover:border-primary-purple/20 hover:shadow-sm transition-all flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-600">{q}</span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-primary-purple transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* My Insights */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-brand-navy text-sm">My Insights</h3>
                <button suppressHydrationWarning className="text-primary-purple text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 flex-shrink-0">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">

                    <PieChart>
                      <Pie
                        data={insightsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={28}
                        outerRadius={45}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {insightsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}

                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-lg font-black text-slate-800 leading-none">85%</span>
                    <span className="text-[7px] font-bold text-slate-400 uppercase text-center leading-tight mt-0.5">Profile<br/>Completeness</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { label: 'Assessments Completed', val: '6/6', icon: CheckCircle2, color: 'text-green-500' },
                    { label: 'Skills Identified', val: '24', icon: Target, color: 'text-blue-500' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-start gap-2">
                       <stat.icon size={12} className={stat.color} />
                       <div>
                         <p className="text-[10px] font-bold text-slate-700">{stat.val}</p>
                         <p className="text-[8px] text-slate-400 font-medium">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-slate-50">
                 {[
                   { label: 'Learning Hours', val: '48h 30m', icon: Clock },
                   { label: 'Practice Questions', val: '1,248', icon: BookOpen },
                   { label: 'Certificates Earned', val: '12', icon: Award },
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-2">
                        <stat.icon size={14} className="text-slate-400" />
                        <span className="font-bold text-slate-500">{stat.label}</span>
                      </div>
                      <span className="font-black text-slate-800">{stat.val}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Motivational Card */}
            <div className="bg-gradient-to-br from-primary-purple to-primary-light rounded-3xl p-6 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                   <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                     <Trophy size={22} className="text-amber-300" />
                   </div>
                 </div>
                 <h4 className="font-bold text-sm mb-2">Keep it up, Arjun! 🚀</h4>
                 <p className="text-[11px] text-white/80 leading-relaxed">You're on the right track. Stay consistent and you'll achieve your goals soon.</p>
               </div>
            </div>

            {/* Recommended for You */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-brand-navy text-sm">Recommended for You</h3>
                <button className="text-primary-purple text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recommendedContent.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                    <div className={`w-9 h-9 ${item.bg} ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <item.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-slate-800 truncate">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-medium">{item.type} • {item.info}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[8px] font-black text-green-600">{item.match}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
               <h3 className="font-bold text-brand-navy text-sm">Quick Actions</h3>
               <div className="grid grid-cols-2 gap-3">
                 {quickActions.map((action, idx) => (
                   <button key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-start gap-3 hover:border-primary-purple/20 hover:shadow-sm transition-all group text-left">
                     <div className={`w-9 h-9 ${action.bg} ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                       <action.icon size={18} />
                     </div>
                     <div>
                       <h4 className="text-[10px] font-black text-slate-800 leading-tight">{action.title}</h4>
                       <p className="text-[9px] text-slate-400 font-medium mt-0.5">{action.desc}</p>
                     </div>
                   </button>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
