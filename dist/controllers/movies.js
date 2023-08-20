"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const redis_1 = require("../services/redis");
const listMovies = async (req, res) => {
    try {
        const cachedMovies = await (0, redis_1.getAsync)('movies');
        if (cachedMovies) {
            res.json(JSON.parse(cachedMovies));
            return;
        }
        const response = await axios_1.default.get('https://swapi.dev/api/films/');
        const movies = response.data.results;
        await (0, redis_1.setAsync)('movies', JSON.stringify(movies), 'EX', 3600); // Cache for 1 hour
        res.json(movies);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listMovies = listMovies;
