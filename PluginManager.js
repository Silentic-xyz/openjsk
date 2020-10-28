const { IPlugin } = require('./IPlugin');

class PluginManager {
    /**
     * Plugin manager
     * @param {import('./Bot').Bot} bot Bot
     */
    constructor(bot) {
        bot.plugins = this;
    }
}
module.exports.PluginManager = PluginManager;
