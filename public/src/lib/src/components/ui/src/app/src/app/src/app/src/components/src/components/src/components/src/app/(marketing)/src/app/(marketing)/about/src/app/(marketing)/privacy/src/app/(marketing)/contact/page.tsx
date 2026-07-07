"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">تواصل معنا</h1>
              <p className="text-xl text-muted-foreground">نحن هنا لمساعدتك. لا تتردد في التواصل معنا لأي استفسار</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-secondary/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
                  {submitted ? (
                    <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-8 text-center">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2">تم إرسال رسالتك بنجاح!</h3>
                      <p className="text-muted-foreground">سنرد عليك في أقرب وقت ممكن</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">الاسم الكامل</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="أدخل اسمك الكامل" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="example@email.com" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">الرسالة</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" placeholder="اكتب رسالتك هنا..." />
                      </div>
                      <Button type="submit" size="lg" className="w-full text-lg gap-2"><Send className="h-5 w-5" />إرسال الرسالة</Button>
                    </form>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                    <p className="text-muted-foreground leading-relaxed">يمكنك التواصل معنا عبر أي من القنوات التالية. فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Mail className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">البريد الإلكتروني</h3><p className="text-muted-foreground">info@fazaa-ai.sa</p><p className="text-muted-foreground">support@fazaa-ai.sa</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Phone className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">الهاتف</h3><p className="text-muted-foreground">+966 11 234 5678</p><p className="text-muted-foreground">+966 50 123 4567</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><MapPin className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">العنوان</h3><p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p><p className="text-muted-foreground">حي الملقا، طريق الملك فهد</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Clock className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="font-bold text-foreground mb-1">ساعات العمل</h3><p className="text-muted-foreground">الأحد - الخميس: 8:00 ص - 6:00 م</p><p className="text-muted-foreground">الدعم الفني: 24/7</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
