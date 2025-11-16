export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  source: string;
  publishedAt: string;
  author?: string;
  category?: string;
  content?: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: number;
  volume?: number;
  image?: string;
}

export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap?: number;
  market_cap_rank?: number;
  price_change_percentage_24h?: number;
  circulating_supply?: number;
  total_volume?: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ChartData {
  timestamp: string;
  price: number;
  [key: string]: any;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}