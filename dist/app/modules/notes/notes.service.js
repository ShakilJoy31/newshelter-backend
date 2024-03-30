"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const authentication_model_1 = require("../authentication/authentication.model");
// login signup
const createNoteToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Find the document based on the provided email
    const existingDocument = yield authentication_model_1.AuthenticationModel.findOne({ email: payload.email });
    if (!existingDocument) {
        const newDocument = yield authentication_model_1.AuthenticationModel.create({ email: payload.email, notes: [payload] });
        return newDocument;
    }
    existingDocument.notes.push(payload);
    yield existingDocument.save();
    return existingDocument;
});
const userNoteAccordingToEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield authentication_model_1.AuthenticationModel.findOne({ email: email });
    return isUserExist;
});
exports.NotesService = {
    createNoteToDb,
    userNoteAccordingToEmail
};
