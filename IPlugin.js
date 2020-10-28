

class IPlugin {
    /**
     * Plugin interface
     * @param {import('./Bot').Bot} bot Bot
     */
    constructor(bot) {
        this.bot = bot;
    }

    /**
     * Initalize plugin
     */
    async initalize() {}
}
module.exports.IPlugin = IPlugin;
