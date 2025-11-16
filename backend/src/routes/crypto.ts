import express from 'express';
import CryptoController from '../controllers/CryptoController';

const router = express.Router();

router.get('/top-coins', CryptoController.getTopCoins);
router.get('/search', CryptoController.searchCoins);
router.get('/:id', CryptoController.getCoinDetail);
router.get('/:id/chart', CryptoController.getCoinChart);

export default router;