"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function version() {
    const data = fs_1.readFileSync(path_1.join(__dirname, 'VERSION'), 'utf-8').split('\n');
    return {
        major: parseInt(data[0]),
        minor: parseInt(data[1]),
        review: parseInt(data[2]),
        build: parseInt(data[3]),
    };
}
exports.version = version;
