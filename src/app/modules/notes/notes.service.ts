import { ISignup } from '../authentication/authentication.interface';
import { AuthenticationModel } from '../authentication/authentication.model';
import { INotes } from './notes.interface';
import { NotesModel } from './notes.model';

// login signup
const createNoteToDb = async (payload: INotes): Promise<ISignup> => {
  // Find the document based on the provided email
  const existingDocument = await AuthenticationModel.findOne({ email: payload.email });

  if (!existingDocument) {
      const newDocument = await AuthenticationModel.create({ email: payload.email, notes: [payload] });
      return newDocument;
  }
  existingDocument.notes.push(payload);
  await existingDocument.save();
  return existingDocument;
}

const userNoteAccordingToEmail = async (email: string) =>{
  const isUserExist = await AuthenticationModel.findOne({ email: email });
    return isUserExist;
}



export const NotesService = {
  createNoteToDb,
  userNoteAccordingToEmail
};
