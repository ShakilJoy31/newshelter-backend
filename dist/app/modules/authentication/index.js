"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authentication_controller_1 = require("./authentication.controller");
const router = express_1.default.Router();
// router.get('/login', AuthController.verification);
router.post('/signup', authentication_controller_1.LoginController.userSignup);
router.post('/login', authentication_controller_1.LoginController.userLogin);
exports.AuthRoutes = router;
