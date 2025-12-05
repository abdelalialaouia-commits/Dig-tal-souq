import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Shield } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-dark-800 border border-dark-700 text-primary text-sm font-semibold animate-fade-in-up">
            🚀 متجر المنتجات الرقمية الأفضل عربياً
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            اكتشف مستقبل <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              الإبداع الرقمي
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            احصل على أفضل المصادر الرقمية، من كتب إلكترونية، كورسات تعليمية، وقوالب تصميم احترافية لتطوير مهاراتك وأعمالك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
              تصفح المنتجات <ArrowLeft size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-dark-800 hover:bg-dark-700 text-white border border-dark-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dark-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-900 p-6 rounded-2xl border border-dark-700 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">تحميل فوري</h3>
              <p className="text-slate-400">احصل على منتجك فور إتمام عملية الدفع مباشرة بدون أي انتظار.</p>
            </div>
            <div className="bg-dark-900 p-6 rounded-2xl border border-dark-700 text-center">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">دفع آمن 100%</h3>
              <p className="text-slate-400">نستخدم أحدث تقنيات التشفير لضمان حماية بياناتك ومعاملاتك المالية.</p>
            </div>
            <div className="bg-dark-900 p-6 rounded-2xl border border-dark-700 text-center">
              <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
              <p className="text-slate-400">جميع المنتجات الرقمية مراجعة بعناية لضمان أعلى معايير الجودة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">منتجات مميزة</h2>
              <p className="text-slate-400">أكثر المنتجات طلباً هذا الأسبوع</p>
            </div>
            <Link to="/products" className="text-primary hover:text-white transition-colors flex items-center gap-1">
              عرض الكل <ArrowLeft size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">جاهز للبدء في رحلة التعلم؟</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                انضم إلى الآلاف من العملاء السعداء الذين غيروا حياتهم المهنية من خلال منتجاتنا الرقمية.
              </p>
              <Link 
                to="/products"
                className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-colors inline-block"
              >
                تصفح المتجر الآن
              </Link>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
