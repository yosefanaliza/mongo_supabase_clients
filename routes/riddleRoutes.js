import { Router } from 'express';
import * as riddleController from '../controllers/riddleController.js';

const router = Router();

// GET /riddles - Get all riddles
router.get('/', riddleController.getAllRiddles);

// POST /riddles - Create a new riddle
router.post('/', riddleController.createRiddle);

// GET /riddles/:id - Get a specific riddle by ID
router.get('/:id', riddleController.getRiddleById);

// PUT /riddles/:id - Update a specific riddle by ID
router.put('/:id', riddleController.updateRiddle);

// DELETE /riddles/:id - Delete a specific riddle by ID
router.delete('/:id', riddleController.deleteRiddle);

export default router;