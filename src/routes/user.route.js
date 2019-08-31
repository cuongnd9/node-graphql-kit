import express from 'express';
import userController from '@/controllers/user.controller';

const router = express.Router();

router.get('/', userController.list);

router.get('/:id', userController.retrieve);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

export default router;
