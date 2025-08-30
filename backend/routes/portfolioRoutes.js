import express from 'express';
import { 
  getAllPortfolio, 
  getPortfolioById, 
  createPortfolio, 
  updatePortfolio, 
  deletePortfolio 
} from '../controllers/portfolioController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllPortfolio);
router.get('/:id', getPortfolioById);
router.post('/', auth, createPortfolio);
router.put('/:id', auth, updatePortfolio);
router.delete('/:id', auth, deletePortfolio);

export default router;