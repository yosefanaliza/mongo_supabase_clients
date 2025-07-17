import { Router } from 'express';
import riddlesRoutes from './riddleRoutes.js';

const router = Router();

router.use('/riddles', riddlesRoutes);

// router.use('/players', playersRoutes);

export default router;