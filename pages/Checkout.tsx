import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-3xl font-bold mb-4">تم الدفع بنجاح!</h1>
        <p className="text-slate-400 mb-8 max-w-md">
          شكراً لشرائك من ديجي سوق. تم إرسال روابط تحميل المنتجات إلى بريدك الإلكتروني بنجاح.
        </p>
        <Link to="/" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
     // Redirect logic ideally, but for now simple message
     return <div className="p-20 text-center">السلة فارغة</div>;
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">إتمام الشراء</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <div>
             <form onSubmit={handlePayment} className="space-y-6">
                <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
                  <h3 className="text-xl font-bold mb-4">بيانات التواصل</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1">الاسم الكامل</label>
                      <input required type="text" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 focus:border-primary focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1">البريد الإلكتروني</label>
                      <input required type="email" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 focus:border-primary focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                     <span>بيانات الدفع</span>
                     <div className="flex gap-2">
                       <CreditCard size={20} className="text-slate-400" />
                       <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded flex items-center gap-1">
                         <Lock size={10} /> مشفر وآمن
                       </span>
                     </div>
                  </h3>
                  
                  {/* Fake Card Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1">رقم البطاقة</label>
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 focus:border-primary focus:outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label className="block text-slate-400 text-sm mb-1">تاريخ الانتهاء</label>
                        <input required type="text" placeholder="MM/YY" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 focus:border-primary focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm mb-1">CVV</label>
                        <input required type="text" placeholder="123" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 focus:border-primary focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-dark-900 rounded-lg border border-dark-600 text-sm text-slate-400">
                     هذه عملية دفع تجريبية. لن يتم خصم أي مبالغ حقيقية.
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? 'جاري المعالجة...' : `ادفع $${cartTotal.toFixed(2)} الآن`}
                  {!isProcessing && <CreditCard size={20} />}
                </button>
             </form>
          </div>

          {/* Order Summary Right Side */}
          <div>
            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
              <h3 className="text-xl font-bold mb-4">محتويات السلة</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover bg-dark-900" />
                    <div className="flex-grow">
                      <p className="font-bold text-sm text-white line-clamp-1">{item.name}</p>
                      <p className="text-slate-400 text-xs">الكمية: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-primary text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark-600 mt-6 pt-4">
                 <div className="flex justify-between items-center text-xl font-bold text-white">
                   <span>الإجمالي المستحق</span>
                   <span>${cartTotal.toFixed(2)}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
