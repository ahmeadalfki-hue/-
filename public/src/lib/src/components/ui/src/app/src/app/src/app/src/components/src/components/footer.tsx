import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">عن فزعة</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">أول مساعد ذكي للمنهج السعودي، نستخدم الذكاء الاصطناعي لدعم العملية التعليمية وتحسين مخرجات التعلم.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link href="/solve" className="text-sm text-muted-foreground hover:text-primary transition-colors">الحل بالذكاء</Link></li>
              <li><Link href="/teacher-dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">لوحة المعلم</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">تواصل</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>البريد الإلكتروني: info@fazaa-ai.sa</li>
              <li>الهاتف: +966 11 234 5678</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">بدعم من مبادرة تجذب - رؤية 2030</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">نفخر بأن نكون جزءاً من رحلة التحول الرقمي في المملكة العربية السعودية، بدعم من رؤية 2030 الطموحة.</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold">2030</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Fazaa AI. جميع الحقوق محفوظة</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">الشروط والأحكام</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
