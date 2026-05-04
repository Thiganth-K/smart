'use client';

import React from 'react';
import { 
  User, 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Mail, 
  Lock, 
  Eye,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 bg-primary-navy text-white p-16 flex flex-col relative overflow-hidden hidden lg:flex">
        <Logo variant="light" className="h-12 mb-20 relative z-10" />
        
        <div className="relative z-10 mt-auto mb-20">
          <h1 className="text-6xl font-black leading-[1.1] tracking-tighter mb-8">
            The future of <br />
            <span className="text-accent-red">assessment</span> is here.
          </h1>
          <p className="text-xl text-white/60 max-w-lg font-medium leading-relaxed">
            A unified platform connecting students with opportunity through verified data and predictive analytics.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 sm:p-16">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-12">
            <Logo variant="dark" className="h-10" />
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-black text-primary-navy tracking-tight mb-3">Welcome Back</h2>
            <p className="text-muted font-medium">Choose a demo profile or enter your credentials</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { label: 'Student', desc: 'Growth & assessments', icon: User, active: true },
              { label: 'Institution', desc: 'Academic tracking', icon: Building2 },
              { label: 'Company', desc: 'Talent & analytics', icon: Briefcase },
              { label: 'Admin', desc: 'System controls', icon: ShieldCheck }
            ].map(p => (
              <div 
                key={p.label} 
                className={`p-4 border rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${
                  p.active 
                    ? 'bg-slate-50 border-info border-2' 
                    : 'bg-white border-border hover:border-info hover:bg-slate-50/50'
                }`}
              >
                <div className={`${p.active ? 'text-info' : 'text-muted'}`}>
                  <p.icon size={22} />
                </div>
                <div>
                  <strong className="block text-xs font-black text-primary-navy">{p.label}</strong>
                  <span className="text-[10px] font-bold text-muted whitespace-nowrap">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-muted uppercase tracking-widest">Email Address</label>
              <div className="flex items-center gap-3 bg-slate-50 border border-border rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-info transition-all">
                <Mail size={20} className="text-muted" />
                <input type="email" placeholder="name@example.com" className="bg-transparent border-none outline-none w-full text-sm font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-muted uppercase tracking-widest">Password</label>
              <div className="flex items-center gap-3 bg-slate-50 border border-border rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-info transition-all">
                <Lock size={20} className="text-muted" />
                <input type="password" placeholder="••••••••" className="bg-transparent border-none outline-none w-full text-sm font-medium" />
                <Eye size={18} className="text-muted cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-info focus:ring-info" />
                <span className="text-sm font-bold text-muted group-hover:text-primary-navy transition-colors">Remember me</span>
              </label>
              <Link href="/forgot" className="text-sm font-black text-accent-red hover:underline">Forgot Password?</Link>
            </div>

            <button type="button" className="w-full bg-primary-navy text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary-navy/20 hover:bg-slate-800 transition-all">
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          <p className="mt-12 text-center text-sm font-bold text-muted">
            Don't have an account? <Link href="/signup" className="text-info font-black hover:underline ml-1">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
