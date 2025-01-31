import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Tech', slug: 'tech' },
  { id: '2', name: 'Design', slug: 'design' },
  { id: '3', name: 'Marketing', slug: 'marketing' },
  { id: '4', name: 'Productivity', slug: 'productivity' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Design System Kit',
    description: 'A complete design system for modern web applications',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    websiteUrl: 'https://example.com',
    category: 'design',
    tags: ['design', 'ui', 'tools'],
    upvotes: 423,
    launchDate: new Date().toISOString(),
    maker: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Product Designer',
      productsLaunched: [],
      upvotedProducts: [],
    },
    comments: [],
  },
  // Add more mock products as needed
];