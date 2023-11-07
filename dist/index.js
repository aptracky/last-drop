"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_js_1 = __importDefault(require("./server/server.js"));
require("dotenv/config.js");
//Variables
const port = process.env.PORT;
server_js_1.default.listen(port, () => {
    console.log(`[INFO] Server is running on http://localhost:${port}`);
});
