'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  Bookmark,
  CheckCircle2,
  Calendar,
  Filter,
  ArrowRight,
  Target,
  FileText,
  UserCheck,
  TrendingUp,
  Zap,
  Building2,
  Trophy,
  HelpCircle,
  Clock3,
  Database
} from 'lucide-react';

const stats = [
  { label: 'Active Opportunities', val: '48', trend: '↑ 12 new this week', color: 'text-indigo-600', bg: 'bg-indigo-50', icon: Briefcase },
  { label: 'Applied', val: '12', trend: '2 in assessment', color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle2 },
  { label: 'In Progress', val: '5', trend: 'Assessments / Interviews', color: 'text-orange-600', bg: 'bg-orange-50', icon: Clock },
  { label: 'Shortlisted', val: '3', trend: 'Keep it up!', color: 'text-blue-600', bg: 'bg-blue-50', icon: UserCheck },
  { label: 'Offers', val: '1', trend: 'Congratulations!', color: 'text-pink-600', bg: 'bg-pink-50', icon: Trophy },
];

const opportunities = [
  {
    company: 'TCS',
    logo: '/tcs.png',
    tag: 'NQT',
    role: 'TCS Ninja',
    batch: '2025 Batch',
    type: 'Full Time',
    location: 'PAN India',
    ctc: '₹3.36 - 7 LPA',
    deadline: '25 May 2025',
    tags: ['B.E/B.Tech', '2025 Batch', 'Multiple Roles'],
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    company: 'Infosys',
    logo: '/infosys.png',
    tag: 'Hiring',
    role: 'Systems Engineer',
    batch: '2025 Batch',
    type: 'Full Time',
    location: 'PAN India',
    ctc: '₹3.6 - 8.5 LPA',
    deadline: '28 May 2025',
    tags: ['B.E/B.Tech', '2025 Batch', 'IT Services'],
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    company: 'Wipro',
    logo: '/wipro.png',
    tag: 'Elite',
    role: 'Project Engineer',
    batch: '2024/2025 Batch',
    type: 'Full Time',
    location: 'PAN India',
    ctc: '₹3.5 - 6 LPA',
    deadline: '26 May - 31 May',
    tags: ['B.E/B.Tech', '2024, 2025 Batch', 'Multiple Roles'],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    company: 'Zoho',
    logo: '/zoho.png',
    tag: 'Internship',
    role: 'Software Development Intern',
    batch: 'Summer Internship - 2025',
    type: 'Internship',
    location: '2 - 6 Months',
    ctc: '₹20K - 40K / Month',
    deadline: '30 May 2025',
    tags: ['B.E/B.Tech', 'All Branches', 'Work from Home'],
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    company: 'Amazon',
    logo: '/amazon.png',
    tag: 'Hiring',
    role: 'SDE I',
    batch: '2025 Batch',
    type: 'Full Time',
    location: 'Bangalore',
    ctc: '₹18 - 24 LPA',
    deadline: '05 June 2025',
    tags: ['B.E/B.Tech', '2025 Batch', 'SDE'],
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  }
];

const recommendations = [
  { company: 'Microsoft', role: 'Software Engineer', batch: '2025 Batch', location: 'Bangalore', match: 92, tags: ['High Match', 'In Demand'], color: 'text-blue-600', bg: 'bg-blue-50' },
  { company: 'Adobe', role: 'Software Development Engineer', batch: '2025 Batch', location: 'Noida', match: 88, tags: ['High Match', 'Good Package'], color: 'text-red-600', bg: 'bg-red-50' },
  { company: 'Paytm', role: 'Backend Developer', batch: '2025 Batch', location: 'Noida', match: 85, tags: ['High Match', 'Growth Role'], color: 'text-blue-500', bg: 'bg-blue-50' },
];

const tracker = [
  { company: 'TCS Ninja', status: 'Applied', date: 'Applied on 20 May 2025', color: 'text-green-600', bg: 'bg-green-50' },
  { company: 'Infosys Systems Engineer', status: 'In Progress', date: 'Shortlisted for Test', color: 'text-blue-600', bg: 'bg-blue-50' },
  { company: 'Wipro Project Engineer', status: 'In Progress', date: 'Test Scheduled on 27 May', color: 'text-blue-600', bg: 'bg-blue-50' },
  { company: 'Zoho Internship', status: 'Applied', date: 'Applied on 18 May 2025', color: 'text-green-600', bg: 'bg-green-50' },
  { company: 'Amazon SDE I', status: 'Shortlisted', date: 'Resume Shortlisted', color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

const upcomingDeadlines = [
  { company: 'TCS Ninja', date: '25', month: 'MAY', desc: 'Registration closes' },
  { company: 'Infosys Internship', date: '28', month: 'MAY', desc: 'Application closes' },
  { company: 'Wipro Elite', date: '31', month: 'MAY', desc: 'Test window closes' },
];

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]" suppressHydrationWarning={true}>
      <Header title="Opportunities" showSearch={false} />

      <div className="p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex justify-between items-start -mt-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Opportunities</h1>
            <p className="text-slate-500 font-medium mt-1">
              Discover and apply to the best job drives, internships and career opportunities.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <stat.icon size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-[#0F172A] tracking-tight leading-none mb-1">{stat.val}</span>
                  <p className={`text-[9px] font-bold ${stat.label === 'Offers' ? 'text-green-500' : 'text-slate-400'} whitespace-nowrap`}>
                    {stat.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Middle Column: Opportunities List */}
          <div className="lg:col-span-9 space-y-6">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-slate-100 overflow-x-auto no-scrollbar pb-1">
              {['All Opportunities', 'Job Drives', 'Internships', 'Apprenticeships', 'On-campus', 'Off-campus'].map((tab, idx) => (
                <button key={tab} className={`text-[11px] font-bold whitespace-nowrap pb-3 relative ${
                  idx === 0 ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600 transition-colors'
                }`}>
                  {tab}
                  {idx === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                  type="text" 
                  placeholder="Search by company, role or skill..." 
                  className="w-full h-10 pl-9 pr-4 bg-white border border-slate-100 rounded-xl text-[11px] font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                />
              </div>
              {['Job Role', 'Location', 'Experience', 'CTC Range'].map((filter) => (
                <button key={filter} className="h-10 px-4 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-colors">
                  {filter} <ChevronDown size={14} className="text-slate-400" />
                </button>
              ))}
              <button className="h-10 px-4 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-colors">
                More Filters <Filter size={14} className="text-slate-400" />
              </button>
              <div className="h-10 px-4 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-400 flex items-center gap-2">
                Sort by: Recently Added <ChevronDown size={14} />
              </div>
            </div>

            {/* Opportunities List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#0F172A] mb-4">Latest Opportunities</h3>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-50">
                  {opportunities.map((opp, idx) => (
                    <div key={idx} className="p-7 flex items-center gap-8 hover:bg-slate-50/50 transition-all group">
                      {/* Company Logo */}
                      <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden p-2">
                        <Image 
                          src={opp.logo} 
                          alt={opp.company} 
                          width={64} 
                          height={64} 
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Main Info */}
                      <div className="flex-1 grid grid-cols-12 items-center gap-4">
                        <div className="col-span-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-slate-400">{opp.company}</span>
                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md ${opp.bg} ${opp.color} uppercase tracking-widest`}>{opp.tag}</span>
                          </div>
                          <h4 className="text-[15px] font-black text-slate-800 mb-1 leading-tight">{opp.role}</h4>
                          <p className="text-[11px] text-slate-400 font-medium mb-3">{opp.batch} • {opp.type}</p>
                          <div className="flex gap-2">
                            {opp.tags.map(tag => (
                              <span key={tag} className="text-[8px] font-bold px-2 py-0.5 rounded-lg bg-slate-50 text-slate-400 uppercase tracking-tighter">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Location */}
                        <div className="col-span-2 flex items-center gap-3">
                          <MapPin size={18} className="text-slate-300" />
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">Location</p>
                            <p className="text-[11px] font-black text-slate-700">{opp.location}</p>
                          </div>
                        </div>

                        {/* CTC */}
                        <div className="col-span-2 flex items-center gap-3">
                          <TrendingUp size={18} className="text-slate-300" />
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">CTC</p>
                            <p className="text-[11px] font-black text-slate-700">{opp.ctc}</p>
                          </div>
                        </div>

                        {/* Deadline */}
                        <div className="col-span-2 flex items-center gap-3">
                          {opp.deadline.includes('May - 31 May') ? (
                            <Clock3 size={18} className="text-slate-300" />
                          ) : (
                            <Calendar size={18} className="text-slate-300" />
                          )}
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">
                              {opp.deadline.includes('May - 31 May') ? 'Test Window' : 'Application Deadline'}
                            </p>
                            <p className="text-[11px] font-black text-slate-700">{opp.deadline}</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="col-span-2 flex flex-col items-end gap-2">
                          <div className="flex gap-2">
                            <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-[11px] font-black shadow-sm hover:shadow-indigo-200 hover:scale-105 transition-all">
                              Apply Now
                            </button>
                            <button className="w-9 h-9 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                              <Bookmark size={18} />
                            </button>
                          </div>
                          <button className="text-[10px] font-bold text-indigo-600 hover:underline mr-11">View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 text-[11px] font-bold text-slate-400 border border-dashed border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                View More Opportunities <ChevronDown size={14} className="inline ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Recommendations & Tracker */}
          <div className="lg:col-span-3 space-y-6">
            {/* Recommended for You */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-[#0F172A] text-xs">Recommended for You</h3>
                <button className="text-indigo-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {recommendations.map((rec, idx) => (
                  <div key={idx} className="p-5 hover:bg-slate-50/50 transition-colors group cursor-pointer">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center font-black text-xs text-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                        {rec.company[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-0.5">
                          <h4 className="text-[11px] font-bold text-slate-800">{rec.company}</h4>
                          <span className="text-[10px] font-black text-green-600">{rec.match}% Match</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium truncate">{rec.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1.5">
                        {rec.tags.map(tag => (
                          <span key={tag} className="text-[7px] font-bold px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-[9px] text-slate-400 font-medium">{rec.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Tracker */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#0F172A] text-xs">Application Tracker</h3>
                <button className="text-indigo-600 text-[10px] font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-6 relative">
                <div className="absolute left-[5px] top-1 bottom-1 w-0.5 bg-slate-50" />
                {tracker.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className={`absolute left-0 top-1 w-3 h-3 rounded-full ${item.bg} border-2 border-white shadow-sm flex items-center justify-center z-10`}>
                      <div className={`w-1 h-1 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                    </div>
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="text-[11px] font-bold text-slate-800 truncate pr-4">{item.company}</h4>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-md ${item.bg} ${item.color} uppercase`}>{item.status}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 font-medium">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Improve to Unlock More */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col">
              <h3 className="font-bold text-[#0F172A] text-xs mb-1">Improve to Unlock More</h3>
              <p className="text-[10px] text-slate-400 font-medium mb-6">Strengthen these skills to get more opportunities.</p>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'DSA', level: 'Advanced', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { label: 'System Design', level: 'Intermediate', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { label: 'SQL', level: 'Intermediate', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Communication', level: 'Beginner', icon: HelpCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((skill) => (
                  <div key={skill.label} className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 ${skill.bg} ${skill.color} rounded-xl flex items-center justify-center mb-2 hover:scale-110 transition-transform cursor-pointer`}>
                      <skill.icon size={18} />
                    </div>
                    <p className="text-[8px] font-black text-slate-800 uppercase leading-none mb-1">{skill.label}</p>
                    <p className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">{skill.level}</p>
                  </div>
                ))}
              </div>

              <button className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-[11px] font-black shadow-sm hover:shadow-indigo-200 transition-all">
                Go to Skill Intelligence
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
