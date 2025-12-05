import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-secondary font-bold' : 'text-slate-300 hover:text-white transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-dark-800/80 backdrop-blur-md border-b border-dark-700 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary/50 transition-all">
            D
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            ديجي سوق
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className={isActive('/')}>الرئيسية</Link>
          <Link to="/products" className={isActive('/products')}>المنتجات</Link>
          <Link to="/contact" className={isActive('/contact')}>اتصل بنا</Link>
        </nav>

        {/* Cart & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 text-slate-300 hover:text-white transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary p-2">الرئيسية</Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary p-2">المنتجات</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary p-2">اتصل بنا</Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-primary p-2">سلة المشتريات</Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
           <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-xl font-bold text-white">ديجي سوق</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed">
            منصتك الأولى للمنتجات الرقمية الاحترافية. نوفر لك أفضل الكتب، الكورسات، والتصاميم لتطوير مهاراتك وأعمالك.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
            روابط سريعة
            <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary rounded"></span>
          </h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/products" className="hover:text-white transition-colors">جميع المنتجات</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">اتصل بنا</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">شروط الاستخدام</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
            تواصل معنا
            <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-secondary rounded"></span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span>support@digisouq.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span>+966 50 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-800 mt-12 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} ديجي سوق. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900 text-slate-100">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
