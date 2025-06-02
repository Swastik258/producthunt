export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  productsLaunched: Product[];
  upvotedProducts: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  category: string;
  tags: string[];
  upvotes: number;
  launchDate: string;
  maker: User;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  slug: string;
}
