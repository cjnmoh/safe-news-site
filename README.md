# Safe News - News, Finance & Crypto Aggregator

A comprehensive full-stack web application that consolidates news, finance, and cryptocurrency content in one unified platform with strong SEO, dark mode support, and user authentication.

## ✨ Features

### 📰 News Aggregation
- Real-time trending news from multiple sources
- Category-based filtering (Business, Technology, Entertainment, etc.)
- Advanced search functionality
- News detail pages with rich content
- Social sharing capabilities

### 📈 Finance Tracking
- Real-time stock prices and market data
- Popular stocks tracking
- Technical analysis charts
- Market indices
- Search stocks by symbol

### 🪙 Cryptocurrency Data
- Live cryptocurrency prices
- Top coins by market cap
- Price charts and trends
- Search cryptocurrencies
- Market data visualization

### 👤 User Features
- User registration and authentication
- Secure login/logout
- User profiles and preferences
- Favorite articles and watchlists
- Personalized dashboard
- Account settings and password management

### 🎨 User Experience
- Responsive mobile-first design
- Dark/Light theme toggle
- Fast, optimized performance
- Accessibility (WCAG compliant)
- Real-time data updates
- Smooth animations and transitions

### 🔍 SEO Optimization
- Server-side rendering (SSR)
- Dynamic meta tags and Open Graph
- Structured data (schema.org)
- Sitemap and robots.txt
- Twitter Card integration
- Multi-language support ready

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Charts**: Recharts
- **HTTP Client**: Axios
- **SEO**: Next-SEO
- **Date Handling**: date-fns

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Security**: Helmet, CORS, bcryptjs
- **API Integrations**: NewsAPI, Finnhub, CoinGecko

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (Frontend), Heroku/Railway (Backend)

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Docker & Docker Compose (optional)
- MongoDB (or use Docker)

### API Keys Required
1. **NewsAPI** - Get from [newsapi.org](https://newsapi.org)
2. **Finnhub** - Get from [finnhub.io](https://finnhub.io)
3. **CoinGecko** - Optional, free API at [coingecko.com](https://coingecko.com)

### Installation

#### Option 1: Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/cjnmoh/safe-news-site.git
cd safe-news-site

# Create environment file
cp .env.example .env

# Update .env with your API keys
# Edit .env and add:
# NEWS_API_KEY=your_key
# FINNHUB_API_KEY=your_key

# Start all services
docker-compose up

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:3001