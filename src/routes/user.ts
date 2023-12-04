import { Router } from 'express';
import UserController from '../controllers/UserController';
import { asyncHandler } from '../middleware/asyncHandler';

const router = Router();

// Note: Each handler is wrapped with our error handling function.
// Get all users.
router.get('/', [], asyncHandler(UserController.listAll));

// Get one user.
router.get('/:id([0-9a-z]{24})', [], asyncHandler(UserController.getOneById));

// Create a new user.
router.post('/', [], asyncHandler(UserController.newUser));

// Edit one user.
router.patch('/:id([0-9a-z]{24})', [], asyncHandler(UserController.editUser));

// Delete one user.
router.delete('/:id([0-9a-z]{24})', [], asyncHandler(UserController.deleteUser));

export default router;