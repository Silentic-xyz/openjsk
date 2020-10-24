

class IPrefixManager {
    /**
     * Prefix manager interface
     * @param {string[]} defaultPrefix Prefix
     */
    constructor(defaultPrefix) { this.defaultPrefix = defaultPrefix; }

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
     * Prefix manager interface
     * @param {string[]} defaultPrefix Prefix
     */
    constructor(defaultPrefix) { super(defaultPrefix); }

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

