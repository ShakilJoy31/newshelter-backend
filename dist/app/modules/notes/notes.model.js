"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesModel = exports.noteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.noteSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    // Automatic give the field called createdAt and updatedAt
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.NotesModel = (0, mongoose_1.model)('notes', exports.noteSchema);
