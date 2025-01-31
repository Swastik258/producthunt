import React, { useState } from 'react';
import { Rocket, Flame, Sparkles, Calendar, Search } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';
import { FeaturedProduct } from './FeaturedProduct';

interface LandingPageProps {
  onAuthenticate: () => void;
}

const FEATURED_PRODUCTS = [
  {
    title: 'Notion AI',
    description: 'Your second brain powered by artificial intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    upvotes: 1234,
    comments: 89,
    tags: ['AI', 'Productivity', 'Tools'],
  },
  {
    title: 'Figma 2024',
    description: 'The collaborative interface design tool reimagined',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    upvotes: 892,
    comments: 45,
    tags: ['Design', 'Collaboration'],
  },
  {
    title: 'DevSpace',
    description: 'All-in-one platform for developers to showcase their work',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    upvotes: 567,
    comments: 34,
    tags: ['Developer Tools', 'Portfolio'],
  },
];

export const LandingPage = ({ onAuthenticate }: LandingPageProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthOpen = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthOpen(false);
    onAuthenticate();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Rocket className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold">ProductLaunch</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-900 flex items-center space-x-1">
                  <Flame className="h-4 w-4" />
                  <span>Popular</span>
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-900 flex items-center space-x-1">
                  <Sparkles className="h-4 w-4" />
                  <span>Newest</span>
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-900 flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Upcoming</span>
                </button>
              </div>
            </div>
            
            <div className="flex-1 max-w-lg mx-8 hidden lg:block">
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
              <button
                onClick={() => handleAuthOpen('login')}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthOpen('signup')}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Where Products Launch and Grow
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our vibrant community of makers and early adopters. Discover the next big thing in tech, daily.
            </p>
            <button
              onClick={() => handleAuthOpen('signup')}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Join the Community
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Today's Featured Products</h2>
            <button className="text-orange-500 hover:text-orange-600">
              View All
            </button>
          </div>
          <div className="space-y-2 divide-y divide-gray-100">
            {FEATURED_PRODUCTS.map((product) => (
              <FeaturedProduct key={product.title} {...product} />
            ))}
          </div>
        </section>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        mode={authMode}
        onSwitchMode={() => setAuthMode(mode => mode === 'login' ? 'signup' : 'login')}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};