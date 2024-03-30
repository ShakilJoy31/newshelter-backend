import express from 'express';

import { LoginController } from './authentication.controller';

const router = express.Router();

// router.get('/login', AuthController.verification);

router.post('/signup', LoginController.userSignup);
router.post('/login', LoginController.userLogin);


export const AuthRoutes = router;
