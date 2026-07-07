"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Users, TrendingDown, Award, Download, BookOpen, Clock, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const performanceData = [
  { subject: "الرياضيات", score: 82, fill: "#006C35" },
  { subject: "الفيزياء", score: 75, fill: "#006C35" },
  { subject: "الكيمياء", score: 88, fill: "#006C35" },
];

const strugglingStudents = [
  { name: "أحمد محمد العلي", weakSubject: "الاحتمالات", lastLogin: "2026-07-05" },
  { name: "فاطمة عبدالله السعيد", weakSubject: "الميكانيكا", lastLogin: "2026-07-03" },
  { name: "خالد سعد القحطاني", weakSubject: "الكيمياء العضوية", lastLogin: "2026-07-01" },
];

export default function TeacherDashboard() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">لوحة تحكم المعلم</h1>
            <p className="text-lg text-muted-foreground">متابعة أداء الطلاب وتحليل نتائجهم باستخدام الذكاء الاصطناعي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-primary card-hover">
              <div className="flex items-start justify-between">
                <div><p className="text-sm text-muted-foreground mb-2">عدد الطلاب</p><p className="text-4xl font-bold text-foreground">124</p><p className="text-sm text-primary mt-2 font-medium">+12 طالب هذا الشهر</p></div>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center"><Users className="h-7 w-7 text-primary" /></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-primary card-hover">
              <div className="flex items-start justify-between">
                <div><p className="text-sm text-muted-foreground mb-2">أكثر درس صعب</p><p className="text-2xl font-bold text-foreground">الاحتمالات</p><p className="text-sm text-destructive mt-2 font-medium flex items-center gap-1"><TrendingDown className="h-4 w-4" />45% من الطلاب يواجهون صعوبة</p></div>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center"><AlertCircle className="h-7 w-7 text-primary" /></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-primary card-hover">
              <div className="flex items-start justify-between">
                <div><p className="text-sm text-muted-foreground mb-2">متوسط الدرجات</p><p className="text-4xl font-bold text-primary">78%</p><p className="text-sm text-primary mt-2 font-medium">+5% عن الشهر الماضي</p></div>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center"><Award className="h-7 w-7 text-primary" /></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 card-hover">
            <div className="flex items-center justify-between mb-6">
              <div><h2 className="text-2xl font-bold text-foreground mb-2">أداء الطلاب في المواد</h2><p className="text-muted-foreground">متوسط الدرجات في المواد الرئيسية</p></div>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center"><BookOpen className="h-6 w-6 text-primary" /></div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 14 }} axisLine={{ stroke: '#E5E7EB' }} />
                  <YAxis tick={{ fill: '#6B7280', fontSize: 14 }} axisLine={{ stroke: '#E5E7EB' }} label={{ value: 'الدرجة', angle: -90, position: 'insideLeft', style: { fill: '#6B7280', fontSize: 14 } }} />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', direction: 'rtl' }} formatter={(value: number) => [`${value}%`, 'الدرجة']} labelFormatter={(label: string) => `المادة: ${label}`} />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                    {performanceData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.fill} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 card-hover">
            <div className="flex items-center justify-between mb-6">
              <div><h2 className="text-2xl font-bold text-foreground mb-2">الطلاب المتعثرين</h2><p className="text-muted-foreground">طلاب يحتاجون إلى دعم إضافي في مواد معينة</p></div>
              <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center"><AlertCircle className="h-6 w-6 text-destructive" /></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-right py-4 px-6 text-sm font-bold text-foreground">اسم الطالب</th>
                    <th className="text-right py-4 px-6 text-sm font-bold text-foreground">المادة الضعيفة</th>
                    <th className="text-right py-4 px-6 text-sm font-bold text-foreground">آخر دخول</th>
                  </tr>
                </thead>
                <tbody>
                  {strugglingStudents.map((student, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-primary font-bold text-sm">{student.name.charAt(0)}</span></div>
                          <span className="font-medium text-foreground">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive">{student.weakSubject}</span></td>
                      <td className="py-4 px-6"><div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /><span>{student.lastLogin}</span></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 gap-2 card-hover"><Download className="h-5 w-5" />تصدير تقرير الفصل PDF</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
