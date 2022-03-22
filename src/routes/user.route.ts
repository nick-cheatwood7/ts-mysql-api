import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();
router.route('/').get(UserController.getUsers);
export const UserRouter = router;
