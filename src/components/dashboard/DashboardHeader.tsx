import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">ProductLaunch</h1>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};