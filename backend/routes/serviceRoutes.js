import express from 'express';
import { 
  getAllServices, 
  getServiceById, 
  createService, 
  updateService, 
  deleteService 
} from '../controllers/serviceController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', auth, createService);
router.put('/:id', auth, updateService);
router.delete('/:id', auth, deleteService);

export default router;