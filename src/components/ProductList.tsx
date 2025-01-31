import React from 'react';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/mockData';

export const ProductList = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Today's Products</h2>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Popular</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      <div className="space-y-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};