import express from 'express';
import { submitContact, getAllContacts, updateContactStatus } from '../controllers/contactController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/submit', submitContact);
router.get('/', auth, getAllContacts);
router.patch('/:id/status', auth, updateContactStatus);

export default router;