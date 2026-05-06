'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  BrainCircuit,
  BookOpen,
  Target,
  Compass,
  Briefcase,
  BarChart3,
  Award,
  Trophy,
  Bot
} from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: FileText, label: 'Assessments', href: '/assessments' },
  { icon: BrainCircuit, label: 'Skill Intelligence', href: '/skill-intelligence' },
  { icon: BookOpen, label: 'Learning Hub', href: '/learning-hub' },
  { icon: Target, label: 'Practice Zone', href: '/practice' },
  { icon: Compass, label: 'Career Insights', href: '/career' },
  { icon: Briefcase, label: 'Opportunities', href: '/opportunities' },
  { icon: BarChart3, label: 'Progress', href: '/progress' },
  { icon: Award, label: 'Certificates', href: '/certificates' },
  { icon: Trophy, label: 'Achievements', href: '/achievements' },
  { icon: Bot, label: 'AI Assistant', href: '/ai-assistant', badge: 'New' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 h-screen text-white flex flex-col fixed left-0 top-0 z-[100] border-r border-white/10"
      style={{ backgroundColor: '#0A0A0A' }}
      suppressHydrationWarning={true}
    >
      <div className="relative pt-6 pb-2 px-6">
        <Logo tagline="INDUSTRY READINESS INTELLIGENCE SYSTEM" />
      </div>

      <nav className="relative flex-1 overflow-y-auto px-3 scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 mb-1 relative group
                ${isActive
                  ? 'bg-[#7A5CFF]/20 text-white shadow-lg backdrop-blur-sm border border-[#7A5CFF]/30'
                  : 'text-white/60 hover:bg-[#7A5CFF]/10 hover:text-white border border-transparent'
                }`}
            >
              <item.icon 
                size={18} 
                className={isActive 
                  ? 'text-[#7A5CFF] drop-shadow-[0_0_8px_rgba(122,92,255,0.8)]' 
                  : 'text-white/50 group-hover:text-[#7A5CFF] transition-all duration-300 group-hover:drop-shadow-[0_0_5px_rgba(122,92,255,0.5)]'} 
              />
              <span className="text-[13px] font-semibold tracking-tight font-sora">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="relative p-5">
        <div
          className="rounded-2xl p-5 text-center relative overflow-hidden border border-white/10"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)' }}
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#7A5CFF]/20"
              style={{ backgroundColor: '#7A5CFF' }}>
              <Bot size={20} className="text-white" />
            </div>
            <p className="font-semibold text-sm mb-1 font-sora">Need Guidance?</p>
            <p className="text-[10px] text-white/70 mb-4">Ask your AI Assistant</p>
            <button
              suppressHydrationWarning
              className="text-white w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 border border-white/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
