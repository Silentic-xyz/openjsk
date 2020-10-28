"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const index_1 = require("./index");
class MainModule extends index_1.CommandsPlugin {
    constructor(bot) {
        super(bot);
        this.name = "openjsk";
        this.addCommand(new index_1.Command({
            name: 'help',
        }));
    }
    load() {
        return new Promise(res => res());
    }
    unload() {
        return new Promise(res => res());
    }
}
exports.MainModule = MainModule;
