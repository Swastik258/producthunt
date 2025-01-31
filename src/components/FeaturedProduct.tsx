import React from 'react';
import { ArrowUpCircle, MessageCircle } from 'lucide-react';

interface FeaturedProductProps {
  title: string;
  description: string;
  imageUrl: string;
  upvotes: number;
  comments: number;
  tags: string[];
}

export const FeaturedProduct = ({ title, description, imageUrl, upvotes, comments, tags }: FeaturedProductProps) => {
  return (
    <div className="flex items-start space-x-4 p-6 hover:bg-gray-50 transition-colors rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="flex items-center space-x-4 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
          <ArrowUpCircle className="h-4 w-4" />
          <span className="font-medium">{upvotes}</span>
        </button>
        <button className="flex items-center space-x-1 px-3 py-1.5 text-gray-500 hover:text-gray-700">
          <MessageCircle className="h-4 w-4" />
          <span>{comments}</span>
        </button>
      </div>
    </div>
  );
};