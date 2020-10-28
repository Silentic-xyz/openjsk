"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
const Plugin_1 = require("./Plugin");
class Bot extends discord_js_1.Client {
    constructor(settings) {
        super(settings);
        this.plugins = new discord_js_1.Collection();
    }
    /**
     * Get plugins
     */
    getPlugins() {
        return this.plugins.array();
    }
    /**
     * Add plugin to this bot
     */
    async addPlugin(plugin) {
        await plugin.load();
        this.plugins.set(plugin.name, plugin);
    }
    /**
     * Remove plugin from this bot
     */
    async removePlugin(plugin) {
        await plugin.unload();
        this.plugins.set(plugin.name, plugin);
    }
    /**
     * Get plugin by name
     */
    getPlugin(plugin) {
        return this.plugins.get(plugin);
    }
    /**
     * Get shell plugin
     */
    getShell() {
        return this.plugins.find(v => v instanceof Plugin_1.ShellPlugin);
    }
}
exports.Bot = Bot;
