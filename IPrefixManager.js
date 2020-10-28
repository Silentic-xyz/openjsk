const { IPlugin } = require('./IPlugin');

class IPrefixManager extends IPlugin {
    /**
     * Prefix manager interface
     * @param {import('./Bot').Bot} bot Bot
     * @param {string[]} defaultPrefix Prefix
     */
    constructor(bot, defaultPrefix) {
        super(bot);
        this.defaultPrefix = defaultPrefix;
    }

    /**
     * Get user/guild prefix
     * @param {
            import('discord.js').GuildMember |
            import('discord.js').User |
            import('discord.js').Guild
        } member User or guild
     * 
     * @returns {string[]} Prefixes
     */
    async get(member) { throw new Error("Not implemented"); }

    /**
     * Set user/guild prefix
     * @param {
            import('discord.js').GuildMember |
            import('discord.js').User |
            import('discord.js').Guild
        } member User or guild
     * @param {string[]} prefix Prefix
     */
    async set(member, prefix) { throw new Error("Not implemented"); }
}
module.exports.IPrefixManager = IPrefixManager;

class BasicPrefixManager extends IPrefixManager {
    /**
     * 
     * @param {
            import('discord.js').GuildMember |
            import('discord.js').User |
            import('discord.js').Guild
        } member User or guild
     * 
     * @returns {Promise<string[]>} Prefixes
     */
    async get(member) { return this.defaultPrefix; }

    /**
     * 
     * @param {
            import('discord.js').GuildMember |
            import('discord.js').User |
            import('discord.js').Guild
        } member User or guild
     * @param {Promise<string[]>} prefix Prefix
     */
    async set(member, prefix) {}
}
module.exports.BasicPrefixManager = BasicPrefixManager;

