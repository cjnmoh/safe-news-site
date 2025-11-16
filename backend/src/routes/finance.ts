import express from 'express';
import FinanceController from '../controllers/FinanceController';

const router = express.Router();

router.get('/top-stocks', FinanceController.getTopStocks);
router.get('/search', FinanceController.searchStocks);
router.get('/:symbol', FinanceController.getStockDetail);
router.get('/:symbol/chart', FinanceController.getStockChart);

export default router;