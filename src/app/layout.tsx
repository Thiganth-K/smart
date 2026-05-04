'use client';

import { usePathname } from 'next/navigation';
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="en">
      <body className="antialiased">
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
