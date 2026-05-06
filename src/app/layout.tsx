'use client';

import { usePathname } from 'next/navigation';
import { Sora, Inter } from 'next/font/google';
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased font-inter" suppressHydrationWarning>
        {!isLoginPage ? (
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 min-w-0 bg-background">
              {children}
            </main>
          </div>
        ) : (
          <main className="min-h-screen">
            {children}
          </main>
        )}
      </body>
    </html>
  );
}
