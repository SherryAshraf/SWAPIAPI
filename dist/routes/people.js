"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/people.ts
const express_1 = __importDefault(require("express"));
const people_1 = require("../controllers/people");
const router = express_1.default.Router();
router.get('/', people_1.listPeople);
exports.default = router;
