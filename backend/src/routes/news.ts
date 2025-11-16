import express from 'express';
import NewsController from '../controllers/NewsController';

const router = express.Router();

router.get('/trending', NewsController.getTrendingNews);
router.get('/search', NewsController.searchNews);
router.get('/by-category/:category', NewsController.getNewsByCategory);
router.get('/:id', NewsController.getNewsDetail);

export default router;