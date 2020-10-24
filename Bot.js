const { Client, Collection } = require("discord.js");
const { existsSync, statSync, readdirSync } = require("fs");
const { join } = require("path");
const { BasicLanguager, ILanguager } = require('./ILanguager');
const { BasicPrefixManager, IPrefixManager } = require('./IPrefixManager');
const { BasicCommandHandler, ICommandHandler } = require('./ICommandHandler');
const { IStorage } = require('./IStorage');
const { Module } = require('./Module');

/**
    @typedef {
        import('discord.js').ClientOptions &
        {
            prefix?: string[],
            plugins?: BotPlugins
        }
    } BotSettings
    @typedef {{
        prefix?: string,
        handle?: string,
        languager?: string,
        storage?: string,
    }} BotPlugins
 */

class Bot extends Client {
    /**
     * Main bot class
     * @param {BotSettings?} settings Settings
     */
    constructor(settings = {}) {
        super(settings);

        try {
            /**
             * Languager
             * @type {ILanguager}
             */
            this.languager = new (require((settings.plugins || {}).languager || 'openjsk-langs'))('en');
        } catch (err) {
            this.languager = new BasicLanguager('en');
        }

        try {
            /**
             * Prefix manager
             * @type {IPrefixManager}
             */
            this.prefix = new (require((settings.plugins || {}).prefix || 'openjsk-prefixes'))((this.settings || {}).prefix || ["!"]);
        } catch (err) {
            this.prefix = new BasicPrefixManager((this.settings || {}).prefix || ["!"]);
        }

        try {
            /**
             * Command handle
             * @type {ICommandHandler}
             */
            this.handle = new (require((settings.plugins || {}).handle || 'openjsk-bash'))(this);
        } catch (err) {
            this.handle = new BasicCommandHandler(this);
        }

        try {
            /**
             * Storage manager
             * @type {}
             */
            this.handle = new (require((settings.plugins || {}).handle || 'openjsk-json'))(this);
        } catch (err) {
            this.handle = new IStorage(this);
        }

        /**
         * @type {Collection<string, Module>}
         */
        this.modules = new Collection();
    }

    loadExtension = async path => {
        try {
            if (!existsSync(path)) return;
            const stat = statSync(path);
            if (stat.isDirectory()) {
                readdirSync(path).forEach(a => this.loadExtension(join(path, a)));
            }
            if (stat.isFile()) {
                const Mod = require(path);
                if (!(Mod instanceof Function)) return;
                const mod = new Mod();
                if (!(mod instanceof Module)) return;
                this.modules.push(mod);
            }
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports.Bot = Bot;
