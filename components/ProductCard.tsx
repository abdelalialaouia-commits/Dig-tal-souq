import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-dark-800 rounded-2xl overflow-hidden shadow-lg border border-dark-700 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-dark-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-white border border-dark-600">
          {product.category === 'ebook' && 'كتاب إلكتروني'}
          {product.category === 'course' && 'دورة تدريبية'}
          {product.category === 'design' && 'تصميم'}
          {product.category === 'software' && 'برنامج/قالب'}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2 text-yellow-400">
          <Star size={14} fill="currentColor" />
          <span className="text-slate-300 text-sm">{product.rating}</span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-700">
          <span className="text-xl font-bold text-primary">${product.price}</span>
          
          <div className="flex gap-2">
            <Link 
              to={`/product/${product.id}`}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              تفاصيل
            </Link>
            <button 
              onClick={() => addToCart(product)}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
