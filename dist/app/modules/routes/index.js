"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../authentication");
const notes_1 = require("../notes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: authentication_1.AuthRoutes,
    },
    {
        path: '/notes',
        route: notes_1.NotesRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
