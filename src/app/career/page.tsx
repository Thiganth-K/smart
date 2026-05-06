'use client';

import React from 'react';
import Header from '@/components/Header';
import {
  TrendingUp,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Map,
  Building2,
  DollarSign,
  BarChart3,
  Search,
  BookOpen,
  UserCheck,
  FileText,
  Info,
  ArrowRight,
  Zap
} from 'lucide-react';

const careerPaths = [
  { rank: 1, name: 'Full Stack Developer', match: 92, tags: ['High Demand', 'Great Growth'], color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
                  { rank: 2, name: 'Backend Developer', match: 87, tags: ['High Demand', 'Stable Growth'], color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
  { rank: 3, name: 'Software Engineer', match: 82, tags: ['High Demand', 'Great Growth'], color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
];

const skillsData = [
  { name: 'HTML, CSS, JavaScript', have: 75, need: 85 },
  { name: 'React.js', have: 50, need: 70 },
  { name: 'Node.js', have: 45, need: 60 },
  { name: 'SQL', have: 65, need: 80 },
  { name: 'System Design', have: 30, need: 50 },
  { name: 'Git & Version Control', have: 60, need: 75 },
  { name: 'Problem Solving', have: 70, need: 85 },
  { name: 'Testing', have: 25, need: 45 },
];

const topSkillsToImprove = [
  { name: 'System Design', desc: 'Essential for scaling applications', priority: 'High Priority', color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Advanced JavaScript', desc: 'Closures, Promises, Async/Await', priority: 'High Priority', color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Node.js & Express', desc: 'Build scalable backend services', priority: 'Medium Priority', color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'MongoDB', desc: 'NoSQL database for modern apps', priority: 'Medium Priority', color: 'text-orange-500', bg: 'bg-orange-50' },
];

const growthPath = [
  { years: '1-2 Years', role: 'Junior Developer', desc: 'Build strong fundamentals and hands-on experience', color: 'bg-primary-purple' },
  { years: '2-4 Years', role: 'Developer', desc: 'Work on complex features and lead small projects', color: 'bg-blue-500' },
  { years: '4-7 Years', role: 'Senior Developer', desc: 'Architect scalable solutions and mentor others', color: 'bg-green-500' },
  { years: '7+ Years', role: 'Tech Lead / Architect', desc: 'Lead teams and drive technical decisions', color: 'bg-orange-500' },
];

const companies = [
  { name: 'TCS', match: 'High', logo: 'TR' },
  { name: 'Infosys', match: 'High', logo: 'IN' },
  { name: 'Microsoft', match: 'Very High', logo: 'MS' },
  { name: 'Amazon', match: 'Very High', logo: 'AM' },
  { name: 'Google', match: 'Very High', logo: 'GO' },
  { name: 'Zoho', match: 'High', logo: 'ZO' },
];

export default function CareerInsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header 
        title="Career Insights" 
        description="Discover the best career paths for you based on your skills, interests and performance." 
        showSearch={false} 
      />

      <div className="p-8 space-y-8 pb-12">


        {/* Top Section: Career Paths & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Best Fit Career Paths */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-brand-navy text-xs flex items-center gap-2 font-sora">
                Your Best Fit Career Paths <Info size={14} className="text-slate-300" />
              </h3>
              <span className="text-[9px] font-bold text-primary-purple uppercase tracking-widest font-inter">Overall Match</span>
            </div>

            <div className="space-y-5 flex-1">
              {careerPaths.map((path) => (
                <div key={path.rank} className="group cursor-pointer">
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-primary-purple/20 hover:bg-primary-purple/5/30 transition-all">
                    <div className={`w-10 h-10 ${path.bg} ${path.color} rounded-xl flex items-center justify-center font-bold text-lg`}>
                      {path.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-bold text-slate-800">{path.name}</h4>
                        <span className="text-[11px] font-black text-green-600">{path.match}% Match</span>
                      </div>
                      <div className="flex gap-2">
                        {path.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-bold px-2 py-0.5 rounded-lg bg-slate-50 text-slate-400 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-purple rounded-full" style={{ width: `${path.match}%` }} />
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-primary-purple transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 text-[10px] font-bold text-primary-purple flex items-center justify-center gap-2 hover:gap-3 transition-all">
              Explore more career options <ArrowRight size={14} />
            </button>
          </div>

          {/* Career Overview */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-purple/10 text-primary-purple rounded-2xl flex items-center justify-center shadow-sm border border-primary-purple/20 flex-shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-brand-navy">Full Stack Developer</h3>
                  <span className="text-[8px] font-black px-2 py-0.5 rounded-lg bg-green-50 text-green-600 uppercase tracking-widest">Top Match</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Build and maintain both front-end and back-end of web applications. Work with databases, APIs and modern frameworks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Avg. Salary (India)', val: '₹8.5 LPA', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
                { label: 'Job Demand', val: 'Very High', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Career Growth', val: 'Excellent', icon: Map, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <div className={`w-7 h-7 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center mb-1.5`}>
                    <stat.icon size={14} />
                  </div>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mb-0.5">{stat.label}</p>
                  <p className="text-[11px] font-black text-slate-800 whitespace-nowrap">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-purple/5 rounded-2xl p-4 mb-5 border border-primary-purple/15">
              <h4 className="text-[10px] font-black text-primary-purple uppercase tracking-widest mb-3">Why it's a good fit for you?</h4>
              <div className="space-y-2.5">
                {[
                  'Strong in Programming, Problem Solving and SQL',
                  'Good understanding of System Design fundamentals',
                  'Enjoys building projects and solving real-world problems'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={12} className="text-green-500" />
                    <span className="text-[10px] text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-auto text-[10px] font-bold text-primary-purple flex items-center justify-center gap-2 hover:gap-3 transition-all py-1.5">
              View Career Details <ArrowRight size={14} />
            </button>
          </div>

          {/* Career Readiness Gauge */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col h-full items-center text-center">
            <h3 className="font-bold text-brand-navy text-xs mb-4 w-full text-left">Hirescore</h3>

            <div className="relative w-40 h-24 flex items-center justify-center mb-1 overflow-hidden">
              <svg viewBox="0 0 200 110" className="w-full h-full">
                <defs>
                  <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#f1f5f9" strokeWidth="14" strokeLinecap="round" />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#readinessGradient)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="251.32"
                  strokeDashoffset={251.32 * (1 - 78 / 100)}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="text-[32px] font-black text-brand-navy leading-none">78%</span>
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">Ready for Full Stack Developer</p>

            <div className="w-full space-y-5">
              {[
                { label: 'Skills', val: 82 },
                { label: 'Knowledge', val: 75 },
                { label: 'Problem Solving', val: 80 },
                { label: 'Consistency', val: 75 },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500">{item.label}</span>
                    <span className="text-[10px] font-black text-slate-800">{item.val}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-purple rounded-full" style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 text-[9px] font-bold text-primary-purple hover:underline">How is this calculated? →</button>
          </div>
        </div>

        {/* Middle Section: Skills Chart & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Skills You Have vs. Needed */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-bold text-brand-navy text-sm">Skills You Have vs. Skills You Need</h3>
                <p className="text-[10px] text-slate-400 font-medium mt-1">Detailed analysis of your current skill gap.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary-purple" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase">You Have</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase">You Need</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {skillsData.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-600">{skill.name}</span>
                    <span className="text-[10px] font-black text-slate-800">{skill.need}%</span>
                  </div>
                  <div className="relative h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-slate-200 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.need}%` }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full bg-primary-purple rounded-full transition-all duration-1000 z-10"
                      style={{ width: `${skill.have}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-2.5 text-[11px] font-bold text-primary-purple bg-primary-purple/5 hover:bg-primary-purple/5 rounded-xl transition-all">
              View Detailed Skill Gap Analysis →
            </button>
          </div>

          {/* Top Skills to Improve */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col">
            <div className="mb-8">
              <h3 className="font-bold text-brand-navy text-sm">Top Skills to Improve</h3>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Focus on these skills to boost Hirescore.</p>
            </div>

            <div className="space-y-5 flex-1">
              {topSkillsToImprove.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group cursor-pointer p-1 rounded-xl hover:bg-slate-50/50 transition-all">
                  <div className={`w-10 h-10 ${skill.bg} ${skill.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Zap size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-sm font-bold text-slate-800">{skill.name}</h4>
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-lg border ${skill.priority === 'High Priority' ? 'border-red-100 text-red-500 bg-red-50' : 'border-orange-100 text-orange-500 bg-orange-50'
                        }`}>
                        {skill.priority}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium truncate">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-2.5 text-[11px] font-bold text-primary-purple border border-primary-purple/20 hover:bg-primary-purple/5 rounded-xl transition-all">
              View Learning Recommendations →
            </button>
          </div>

          {/* Career Growth Path */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-brand-navy text-sm mb-8">Career Growth Path</h3>

            <div className="relative space-y-8 pl-8">
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-100" />

              {growthPath.map((path, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-8 top-1 w-4 h-4 rounded-full ${path.color} border-4 border-white shadow-sm z-10`} />
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{path.years}</span>
                    <h4 className="text-[13px] font-bold text-slate-800">{path.role}</h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{path.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-2.5 text-[11px] font-bold text-primary-purple hover:underline">Detailed Roadmap →</button>
          </div>
        </div>

        {/* Bottom Section: Companies & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Companies Hiring */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-brand-navy text-sm mb-8">Top Companies Hiring</h3>

            <div className="grid grid-cols-6 gap-4 flex-1 items-center">
              {companies.map((company) => (
                <div key={company.name} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center font-black text-xs text-primary-purple hover:scale-110 transition-transform cursor-pointer">
                    {company.logo}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-800 mb-0.5">{company.name}</p>
                    <p className={`text-[8px] font-bold uppercase tracking-tighter ${company.match === 'Very High' ? 'text-green-500' : 'text-blue-500'
                      }`}>{company.match}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 text-[11px] font-bold text-primary-purple hover:underline text-center">View All Companies →</button>
          </div>

          {/* Explore Career Insights Resources */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-brand-navy text-sm mb-8">Explore Career Insights</h3>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { title: 'Salary Explorer', desc: 'Compare salaries by role, experience and location', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50' },
                { title: 'Job Market Trends', desc: "See what's trending in the job market", icon: BarChart3, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
                { title: 'Resume Guide', desc: 'Improve your resume for better opportunities', icon: FileText, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
                { title: 'Interview Guide', desc: 'Prepare for interviews with expert tips', icon: UserCheck, color: 'text-orange-600', bg: 'bg-orange-50' },
              ].map((res) => (
                <div key={res.title} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all cursor-pointer group border border-transparent hover:border-slate-100">
                  <div className={`w-10 h-10 ${res.bg} ${res.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <res.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 mb-1">{res.title}</h4>
                    <p className="text-[9px] text-slate-400 font-medium leading-relaxed">{res.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 text-[11px] font-bold text-primary-purple hover:underline text-center">Explore All Resources →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
