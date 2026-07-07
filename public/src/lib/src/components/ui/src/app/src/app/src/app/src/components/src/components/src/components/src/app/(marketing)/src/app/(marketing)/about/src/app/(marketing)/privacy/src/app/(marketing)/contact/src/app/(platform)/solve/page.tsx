"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, Download, RefreshCw, BookOpen, CheckCircle2, PlayCircle } from "lucide-react";

export default function SolvePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"answer" | "steps" | "video">("answer");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setIsLoading(true);
        setTimeout(() => { setIsLoading(false); setShowResults(true); }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => { setUploadedImage(null); setShowResults(false); setActiveTab("answer"); };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">الحل بالذكاء الاصطناعي</h1>
            <p className="text-lg text-muted-foreground">ارفع صورة السؤال وسيقوم فزعة AI بحله وشرحه لك بالخطوات</p>
          </div>

          {!showResults && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-primary/30 p-12 text-center hover:border-primary/50 transition-all card-hover">
                {!uploadedImage ? (
                  <>
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"><Upload className="h-10 w-10 text-primary" /></div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">ارفع صورة السؤال هنا</h3>
                    <p className="text-muted-foreground mb-6">يدعم صيغ JPG, PNG</p>
                    <label className="cursor-pointer">
                      <input type="file" accept="image/jpeg,image/png" onChange={handleImageUpload} className="hidden" />
                      <Button size="lg" className="text-lg px-8 card-hover"><Upload className="h-5 w-5 ml-2" />اختر صورة</Button>
                    </label>
                  </>
                ) : isLoading ? (
                  <div className="space-y-6">
                    <Loader2 className="h-16 w-16 text-primary animate-spin mx-auto" />
                    <h3 className="text-2xl font-bold text-foreground">فزعة AI يفكر...</h3>
                    <p className="text-lg text-muted-foreground">جاري تحليل السؤال</p>
                    <div className="flex justify-center gap-2">
                      <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img src={uploadedImage} alt="السؤال" className="max-h-64 mx-auto rounded-lg shadow-md" />
                    <p className="text-muted-foreground">جاري المعالجة...</p>
                  </div>
                )}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">يدعم المنهج السعودي 1447 | الرياضيات - الفيزياء - الكيمياء</p>
            </div>
          )}

          {showResults && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6 card-hover">
                <div className="flex items-center gap-4">
                  <img src={uploadedImage!} alt="السؤال" className="h-20 w-20 rounded-lg object-cover border-2 border-primary/20" />
                  <div><p className="text-sm text-muted-foreground mb-1">السؤال المرفوع</p><p className="font-medium text-foreground">تم التحليل بنجاح</p></div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="border-b bg-secondary/50 flex">
                  {[
                    { id: "answer", label: "الحل النهائي", icon: CheckCircle2 },
                    { id: "steps", label: "الشرح خطوة بخطوة", icon: BookOpen },
                    { id: "video", label: "فيديو الشرح", icon: PlayCircle }
                  ].map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-all ${activeTab === tab.id ? "bg-white text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}>
                      <tab.icon className="h-4 w-4 inline ml-2" />{tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {activeTab === "answer" && (
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><CheckCircle2 className="h-5 w-5 text-white" /></div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-3">الحل النهائي</h3>
                          <div className="bg-white rounded-lg p-4 border border-primary/10"><p className="text-2xl font-bold text-primary text-center py-4">x = 5</p></div>
                          <p className="text-sm text-muted-foreground mt-4">تم حل المعادلة بنجاح باستخدام القانون العام للمعادلات التربيعية</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "steps" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-foreground mb-4">الشرح خطوة بخطوة</h3>
                      {["تحديد المعادلة: x² - 5x + 6 = 0", "تطبيق القانون العام: x = (-b ± √(b² - 4ac)) / 2a", "حساب المميز: b² - 4ac = 1", "إيجاد الحلول: x = 5"].map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0"><div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{i + 1}</div></div>
                          <div className="flex-1 bg-secondary/50 rounded-lg p-4"><p className="text-muted-foreground">{step}</p></div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === "video" && (
                    <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
                      <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="شرح الحل" frameBorder="0" allowFullScreen></iframe>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 gap-2 card-hover"><Download className="h-5 w-5" />تحميل التقرير PDF</Button>
                <Button variant="outline" size="lg" className="text-lg px-8 gap-2 card-hover" onClick={handleReset}><RefreshCw className="h-5 w-5" />حل سؤال آخر</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
