"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandsPlugin = exports.LanguagerPlugin = exports.StoragePlugin = exports.ShellPlugin = exports.Plugin = void 0;
const discord_js_1 = require("discord.js");
class Plugin {
    constructor(bot) {
        this.parent = bot;
        this.name = `plugin-${Math.floor(Math.random() * 10000)}`;
        bot.addPlugin(this);
    }
}
exports.Plugin = Plugin;
class ShellPlugin extends Plugin {
}
exports.ShellPlugin = ShellPlugin;
class StoragePlugin extends Plugin {
}
exports.StoragePlugin = StoragePlugin;
class LanguagerPlugin extends Plugin {
}
exports.LanguagerPlugin = LanguagerPlugin;
class CommandsPlugin extends Plugin {
    constructor(bot) {
        super(bot);
        this.commands = new discord_js_1.Collection();
    }
    addCommand(command) {
        this.commands.set(command.name, command);
    }
}
exports.CommandsPlugin = CommandsPlugin;
class Command {
    constructor(opts) {
        this.name = opts.name;
    }
}
exports.Command = Command;
