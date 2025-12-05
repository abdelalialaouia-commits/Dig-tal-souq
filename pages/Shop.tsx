import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../types';
import { Search } from 'lucide-react';

const Shop = () => {
  const [filter, setFilter] = useState<ProductType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories: { id: ProductType | 'all', label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'ebook', label: 'كتب إلكترونية' },
    { id: 'course', label: 'دورات تدريبية' },
    { id: 'design', label: 'تصاميم' },
    { id: 'software', label: 'برمجيات' },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">المتجر</h1>
        
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-dark-800 p-6 rounded-2xl border border-dark-700">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'bg-dark-900 text-slate-300 hover:bg-dark-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-900 border border-dark-700 text-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-slate-400">لا توجد منتجات تطابق بحثك.</p>
            <button 
              onClick={() => { setFilter('all'); setSearchTerm(''); }}
              className="mt-4 text-primary hover:underline"
            >
              إعادة تعيين الفلتر
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
