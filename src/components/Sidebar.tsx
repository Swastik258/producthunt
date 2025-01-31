import React from 'react';
import { categories } from '../data/mockData';

export const Sidebar = () => {
  return (
    <aside className="w-64 fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Categories
          </h3>
          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="block px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Time Period
          </h3>
          <div className="mt-4 space-y-2">
            <button className="block w-full px-3 py-2 text-left rounded-lg text-gray-900 hover:bg-gray-100">
              Today
            </button>
            <button className="block w-full px-3 py-2 text-left rounded-lg text-gray-900 hover:bg-gray-100">
              This Week
            </button>
            <button className="block w-full px-3 py-2 text-left rounded-lg text-gray-900 hover:bg-gray-100">
              This Month
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};