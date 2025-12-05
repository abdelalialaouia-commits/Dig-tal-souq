import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart size={40} className="text-slate-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">سلة المشتريات فارغة</h2>
        <p className="text-slate-400 mb-8">لم تقم بإضافة أي منتجات للسلة بعد.</p>
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          تصفح المنتجات <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">سلة المشتريات</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-dark-800 p-4 rounded-xl border border-dark-700 flex gap-4 items-center">
                <div className="w-24 h-24 bg-dark-900 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-bold text-white text-lg mb-1">{item.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">${item.price}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-dark-900 rounded-lg p-1 border border-dark-700">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 hover:text-primary disabled:opacity-50 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="p-1 hover:text-primary transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="text-xl font-bold text-primary">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 sticky top-24">
              <h3 className="text-xl font-bold mb-6">ملخص الطلب</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>المجموع الفرعي</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                   <span>الضرائب</span>
                   <span>$0.00</span>
                </div>
                <div className="border-t border-dark-700 pt-3 flex justify-between text-xl font-bold text-white">
                  <span>الإجمالي</span>
                  <span className="text-primary">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-3 rounded-xl font-bold block text-center transition-all shadow-lg shadow-primary/20"
              >
                إتمام الشراء
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;