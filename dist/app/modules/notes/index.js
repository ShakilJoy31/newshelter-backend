"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRoute = void 0;
const express_1 = __importDefault(require("express"));
const notes_controller_1 = require("./notes.controller");
const router = express_1.default.Router();
// router.get('/login', AuthController.verification);
router.post('/create-note', notes_controller_1.NotesController.createNote);
router.post('/get-user-note', notes_controller_1.NotesController.getUserNote);
exports.NotesRoute = router;
