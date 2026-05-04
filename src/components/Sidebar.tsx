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
    <aside className="w-64 h-screen bg-primary-navy text-white flex flex-col fixed left-0 top-0 z-[100] border-r border-white/10" suppressHydrationWarning={true}>
      <div className="p-8">
        <Logo variant="light" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 mb-1 relative
                ${isActive 
                  ? 'bg-accent-red text-white shadow-lg shadow-accent-red/30' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-violet-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5 text-center">
          <div className="bg-accent-red w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-accent-red/20">
            <Bot size={24} className="text-white" />
          </div>
          <p className="font-semibold text-sm mb-1">Need Guidance?</p>
          <p className="text-[10px] text-white/60 mb-4">Ask your AI Assistant</p>
          <button className="bg-accent-red text-white w-full py-2 rounded-lg text-xs font-bold hover:bg-red-700 transition-colors">
            Chat Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
