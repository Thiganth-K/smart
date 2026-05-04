'use client';

import React from 'react';
import { Bell, Search, User, Crown } from 'lucide-react';

const Header = ({ title = "Dashboard", showSearch = true }: { title?: string, showSearch?: boolean }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-background sticky top-0 z-50 border-b border-border" suppressHydrationWarning={true}>
      <div className="flex items-center gap-4">
        <h1 className="text-2xl brand-heading text-primary-navy">{title}</h1>
      </div>
      
      <div className="flex-1 flex items-center justify-end gap-4 ml-12">
        {showSearch && (
          <div className="flex-1 max-w-xl flex items-center bg-white border border-border rounded-xl px-4 h-12 gap-3 focus-within:ring-2 focus-within:ring-accent-red/20 transition-all">
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search for assessments, skills..." 
              className="border-none outline-none w-full text-sm bg-transparent"
            />
          </div>
        )}

        <div className="bg-white border border-border px-5 h-12 rounded-xl flex items-center gap-4 hidden md:flex hover:shadow-sm transition-all min-w-[240px]">
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shadow-sm">
            <Crown size={18} fill="currentColor" fillOpacity={0.15} />
          </div>
          <div className="flex flex-row items-center gap-2.5">
            <span className="brand-subtitle text-muted whitespace-nowrap">Current Plan</span>
            <div className="w-[1px] h-3 bg-border"></div>
            <span className="text-sm font-bold text-primary-navy">Premium</span>
          </div>
        </div>

        <button className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white border border-border text-primary-navy hover:bg-slate-50 transition-all">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-accent-red text-white text-[9px] rounded-full flex items-center justify-center border-2 border-white font-bold">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border h-12">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-primary-navy leading-none mb-1">Arjun Kumar</div>
            <div className="text-[10px] text-muted font-medium leading-none">B.Tech CSE • 3rd Year</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-muted overflow-hidden flex-shrink-0">
            <User size={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
