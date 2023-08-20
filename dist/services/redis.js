"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAsync = exports.getAsync = void 0;
const redis_1 = __importDefault(require("redis"));
const util_1 = require("util");
const client = redis_1.default.createClient();
const getAsync = (0, util_1.promisify)(client.get).bind(client);
exports.getAsync = getAsync;
const setAsync = (0, util_1.promisify)(client.set).bind(client);
exports.setAsync = setAsync;
