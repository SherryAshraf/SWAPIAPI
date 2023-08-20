"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const people_1 = __importDefault(require("./routes/people"));
const movies_1 = __importDefault(require("./routes/movies"));
//import actorsRouter from './routes/actors';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/people', people_1.default);
app.use('/movies', movies_1.default);
//pp.use('/actors', actorsRouter);
app.use(errorHandler_1.errorHandler);
exports.default = app;
