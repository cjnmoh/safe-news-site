import axios from 'axios';

const CRYPTO_API_KEY = process.env.CRYPTO_API_KEY;
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

class CryptoController {
  static async getTopCoins(req: any, res: any) {
    try {
      const limit = req.query.limit || 10;

      const response = await axios.get(`${COINGECKO_BASE_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: limit,
          page: 1,
          sparkline: true,
        },
      });

      res.json({
        success: true,
        data: response.data,
        total: response.data.length,
      });
    } catch (error) {
      console.error('Error fetching top coins:', error);
      res.status(500).json({ error: 'Failed to fetch coins' });
    }
  }

  static async searchCoins(req: any, res: any) {
    try {
      const { q } = req.query;

      if (!q) {
        return res.status(400).json({ error: 'Search query required' });
      }

      const response = await axios.get(`${COINGECKO_BASE_URL}/search`, {
        params: { query: q },
      });

      res.json({
        success: true,
        data: response.data.coins || [],
      });
    } catch (error) {
      console.error('Error searching coins:', error);
      res.status(500).json({ error: 'Failed to search coins' });
    }
  }

  static async getCoinDetail(req: any, res: any) {
    try {
      const { id } = req.params;

      const response = await axios.get(`${COINGECKO_BASE_URL}/coins/${id}`, {
        params: {
          localization: false,
          tickers: true,
          market_data: true,
        },
      });

      res.json({
        success: true,
        data: response.data,
      });
    } catch (error) {
      console.error('Error fetching coin detail:', error);
      res.status(500).json({ error: 'Failed to fetch coin detail' });
    }
  }

  static async getCoinChart(req: any, res: any) {
    try {
      const { id } = req.params;
      const { days = '30' } = req.query;

      const response = await axios.get(
        `${COINGECKO_BASE_URL}/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: 'usd',
            days,
          },
        }
      );

      res.json({
        success: true,
        data: response.data,
      });
    } catch (error) {
      console.error('Error fetching coin chart:', error);
      res.status(500).json({ error: 'Failed to fetch chart data' });
    }
  }
}

export default CryptoController;