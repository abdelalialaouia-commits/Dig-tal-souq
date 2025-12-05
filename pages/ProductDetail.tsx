import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, Check, ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">المنتج غير موجود</h2>
        <Link to="/products" className="text-primary hover:underline">العودة للمتجر</Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">المنتجات</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-dark-800 rounded-3xl overflow-hidden border border-dark-700 shadow-2xl h-fit">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                 {product.category === 'ebook' && 'كتاب إلكتروني'}
                 {product.category === 'course' && 'دورة تدريبية'}
                 {product.category === 'design' && 'تصميم'}
                 {product.category === 'software' && 'برمجيات'}
              </span>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <Star size={14} fill="currentColor" />
                <span>{product.rating} (50+ تقييم)</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{product.name}</h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 mb-8">
              <h3 className="font-bold text-xl mb-4 text-white">ماذا ستحصل عليه:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="bg-green-500/20 text-green-500 p-1 rounded-full">
                      <Check size={16} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center pt-6 border-t border-dark-700">
              <div className="text-4xl font-bold text-white">
                ${product.price}
                <span className="text-sm font-normal text-slate-500 block">شراء مرة واحدة</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <ShoppingCart size={24} />
                أضف للسلة الآن
              </button>
            </div>
            
            <div className="mt-8 text-sm text-slate-500 flex gap-4 justify-center sm:justify-start">
               <span>✓ ضمان استرداد الأموال لمدة 30 يوم</span>
               <span>✓ دفع آمن ومشفر</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
