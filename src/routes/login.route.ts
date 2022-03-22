import express from 'express';
import { LoginController } from '../controllers';

const router = express.Router();
router.route('/').post(LoginController.apiLogin);
export const LoginRouter = router;
