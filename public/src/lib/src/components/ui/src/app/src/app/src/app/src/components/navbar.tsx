"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">ف</span>
              </div>
              <span className="text-xl font-bold text-primary">فزعة الذكاء</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">الرئيسية</Link>
              <Link href="/solve" className="text-sm font-medium text-foreground hover:text-primary transition-colors">الحل بالذكاء</Link>
              <Link href="/teacher-dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">لوحة المعلم</Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">من نحن</Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">تواصل معنا</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" size="lg">ابدأ مجاناً</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</Link>
              <Link href="/solve" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>الحل بالذكاء</Link>
              <Link href="/teacher-dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>لوحة المعلم</Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>من نحن</Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>تواصل معنا</Link>
              <Button className="w-full" size="lg">ابدأ مجاناً</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
                }
