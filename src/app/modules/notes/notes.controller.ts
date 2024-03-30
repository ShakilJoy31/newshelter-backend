import { NextFunction, Request, Response } from 'express';
import { NotesService } from './notes.service';
import { CURSOR_FLAGS } from 'mongodb';

// User signup
const createNote = async (req: Request, res: Response) => {
    try {
        const { ...signupData } = req.body;
        console.log(signupData);
        const result = await NotesService.createNoteToDb(signupData);
        res.status(200).json({
          success: true,
          message: 'Notes created successfully.',
          data: result,
        });
      } catch (err) {
        console.error(err);
      }
  
};

const getUserNote = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await NotesService.userNoteAccordingToEmail(email);
    res.status(200).json({
      success: true,
      message: 'Notes fetched according to user email.',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
}



export const NotesController = {
  createNote,
  getUserNote
};
