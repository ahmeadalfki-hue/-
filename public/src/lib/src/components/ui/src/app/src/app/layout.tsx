import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { ChatbotWidget } from "@/components/chatbot-widget";

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "فزعة الذكاء - Fazaa AI",
  description: "أول مساعد ذكي للمنهج السعودي",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.className}>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
