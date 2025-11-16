import axios from 'axios';

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

class FinanceController {
  static async getTopStocks(req: any, res: any) {
    try {
      const limit = req.query.limit || 10;
      // Implement logic to fetch top stocks
      // This is a simplified example
      const topStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', price: 189.95, change: 2.5 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.91, change: 1.8 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.50, change: 3.2 },
      ];

      res.json({
        success: true,
        data: topStocks.slice(0, limit),
        total: topStocks.length,
      });
    } catch (error) {
      console.error('Error fetching top stocks:', error);
      res.status(500).json({ error: 'Failed to fetch stocks' });
    }
  }

  static async searchStocks(req: any, res: any) {
    try {
      const { q } = req.query;

      if (!q) {
        return res.status(400).json({ error: 'Search query required' });
      }

      const response = await axios.get(`${FINNHUB_BASE_URL}/search`, {
        params: {
          q,
          token: FINNHUB_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data.result || [],
      });
    } catch (error) {
      console.error('Error searching stocks:', error);
      res.status(500).json({ error: 'Failed to search stocks' });
    }
  }

  static async getStockDetail(req: any, res: any) {
    try {
      const { symbol } = req.params;

      const response = await axios.get(`${FINNHUB_BASE_URL}/quote`, {
        params: {
          symbol,
          token: FINNHUB_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data,
      });
    } catch (error) {
      console.error('Error fetching stock detail:', error);
      res.status(500).json({ error: 'Failed to fetch stock detail' });
    }
  }

  static async getStockChart(req: any, res: any) {
    try {
      const { symbol } = req.params;
      const { period = 'M' } = req.query;

      const response = await axios.get(`${FINNHUB_BASE_URL}/stock/candle`, {
        params: {
          symbol,
          resolution: period,
          from: Math.floor(Date.now() / 1000) - 86400 * 365,
          to: Math.floor(Date.now() / 1000),
          token: FINNHUB_API_KEY,
        },
      });

      res.json({
        success: true,
        data: response.data,
      });
    } catch (error) {
      console.error('Error fetching stock chart:', error);
      res.status(500).json({ error: 'Failed to fetch chart data' });
    }
  }
}

export default FinanceController;