import React, { useState } from 'react';
import { Plus, LayoutGrid, Heart, Bell, Settings, Upload } from 'lucide-react';
import { DashboardHeader } from './DashboardHeader';
import { ProductGrid } from './ProductGrid';
import { UploadModal } from './UploadModal';

export const Dashboard = () => {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'my-products' | 'upvoted' | 'all'>('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid className="h-5 w-5 inline-block mr-2" />
                All Products
              </button>
              <button
                onClick={() => setActiveTab('my-products')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'my-products'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Upload className="h-5 w-5 inline-block mr-2" />
                My Products
              </button>
              <button
                onClick={() => setActiveTab('upvoted')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'upvoted'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className="h-5 w-5 inline-block mr-2" />
                Upvoted
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setUploadModalOpen(true)}
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Submit Product
            </button>
          </div>
        </div>

        <ProductGrid activeTab={activeTab} />
      </div>

      <UploadModal isOpen={isUploadModalOpen} onClose={() => setUploadModalOpen(false)} />
    </div>
  );
};