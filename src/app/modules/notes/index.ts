import express from 'express';
import { NotesController } from './notes.controller';

const router = express.Router();

// router.get('/login', AuthController.verification);

router.post('/create-note', NotesController.createNote);
router.post('/get-user-note', NotesController.getUserNote);


export const NotesRoute = router;