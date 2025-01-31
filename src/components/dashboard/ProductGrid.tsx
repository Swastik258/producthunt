import React from 'react';
import { ProductCard } from '../ProductCard';
import { mockProducts } from '../../data/mockData';

interface ProductGridProps {
  activeTab: 'my-products' | 'upvoted' | 'all';
}

export const ProductGrid = ({ activeTab }: ProductGridProps) => {
  // In a real app, we would filter products based on the activeTab
  // and fetch data from an API
  const filteredProducts = mockProducts;

  return (
    <div className="grid grid-cols-1 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};