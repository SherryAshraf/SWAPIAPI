"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios")); // You'll need Axios or a similar library for making HTTP requests
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    try {
        const response = await axios_1.default.get('https://swapi.dev/api/films/');
        const movies = response.data.results;
        res.json(movies);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});
exports.default = router;
