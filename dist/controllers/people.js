"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const listPeople = async (req, res) => {
    try {
        const response = await axios_1.default.get('https://swapi.dev/api/people/');
        const people = response.data.results;
        res.json(people);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listPeople = listPeople;
