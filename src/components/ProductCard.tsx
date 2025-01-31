import React from 'react';
import { ChevronUp, MessageSquare, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-3">{product.description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{product.category}</span>
            <div className="flex space-x-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100">
            <ChevronUp className="h-6 w-6 text-gray-600" />
            <span className="text-sm font-medium">{product.upvotes}</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};