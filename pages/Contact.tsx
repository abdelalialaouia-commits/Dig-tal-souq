import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">اتصل بنا</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-4 text-white">نحن هنا لمساعدتك</h3>
            <p className="text-slate-400 text-lg">
              هل لديك استفسار حول منتجاتنا أو واجهت مشكلة في التحميل؟ فريق الدعم جاهز للإجابة على جميع استفساراتك.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">البريد الإلكتروني</h4>
                  <p className="text-slate-400">support@digisouq.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">الهاتف</h4>
                  <p className="text-slate-400">+966 50 000 0000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700">
                <div className="w-12 h-12 bg-pink-500/20 text-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">الموقع</h4>
                  <p className="text-slate-400">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700 shadow-xl">
            {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                   <Send size={40} />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">تم الإرسال!</h3>
                 <p className="text-slate-400">سنتواصل معك في أقرب وقت ممكن.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-6 text-primary hover:underline">
                   إرسال رسالة أخرى
                 </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">الاسم</label>
                  <input required type="text" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">البريد الإلكتروني</label>
                  <input required type="email" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">الرسالة</label>
                  <textarea required rows={5} className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30"
                >
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
