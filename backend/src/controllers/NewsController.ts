import axios from 'axios';

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

class NewsController {
  static async getTrendingNews(req: any, res: any) {
    try {
      const limit = req.query.limit || 10;
      const response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines`, {
        params: {
          country: 'us',
          pageSize: limit,
          apiKey: NEWS_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data.articles,
        total: response.data.totalResults,
      });
    } catch (error) {
      console.error('Error fetching trending news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }

  static async searchNews(req: any, res: any) {
    try {
      const { q, limit = 20 } = req.query;

      if (!q) {
        return res.status(400).json({ error: 'Search query required' });
      }

      const response = await axios.get(`${NEWS_API_BASE_URL}/everything`, {
        params: {
          q,
          sortBy: 'publishedAt',
          pageSize: limit,
          apiKey: NEWS_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data.articles,
        total: response.data.totalResults,
      });
    } catch (error) {
      console.error('Error searching news:', error);
      res.status(500).json({ error: 'Failed to search news' });
    }
  }

  static async getNewsByCategory(req: any, res: any) {
    try {
      const { category } = req.params;
      const limit = req.query.limit || 10;

      const response = await axios.get(`${NEWS_API_BASE_URL}/top-headlines`, {
        params: {
          category,
          pageSize: limit,
          apiKey: NEWS_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data.articles,
        total: response.data.totalResults,
      });
    } catch (error) {
      console.error('Error fetching category news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }

  static async getNewsDetail(req: any, res: any) {
    try {
      const { id } = req.params;
      // Implement detail fetching logic
      res.json({ success: true, message: 'News detail endpoint' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch news detail' });
    }
  }
}

export default NewsController;