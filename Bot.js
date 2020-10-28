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
            plugins?: BotPlugins,
            reactOnPing?: boolean,
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

        this.reactOnPing = settings.reactOnPing === undefined
            ? true
            : settings.reactOnPing;

        try {
            if ((settings.plugins || {}).languager == 'custom') this.languager = null;
            else this.languager = new (require((settings.plugins || {}).languager || 'openjsk-langs'))(this, 'en');
        } catch (err) {
            /**
             * Languager
             * @type {ILanguager}
             */
            this.languager = new BasicLanguager(this, 'en');
        }

        try {
            if ((settings.plugins || {}).prefix == 'custom') this.prefix = null;
            else this.prefix = new (require((settings.plugins || {}).prefix || 'openjsk-prefixes'))(this, (settings || {}).prefix || ["!"]);
        } catch (err) {
            /**
             * Prefix manager
             * @type {IPrefixManager}
             */
            this.prefix = new BasicPrefixManager(this, (settings || {}).prefix || ["!"]);
        }

        try {
            if ((settings.plugins || {}).handle == 'custom') this.handle = null;
            else this.handle = new (require((settings.plugins || {}).handle || 'openjsk-bash'))(this);
        } catch (err) {
            /**
             * Command handle
             * @type {ICommandHandler}
             */
            this.handle = new BasicCommandHandler(this);
        }

        try {
            if ((settings.plugins || {}).storage == 'custom') this.storage = null;
            this.storage = new (require((settings.plugins || {}).storage || 'openjsk-json'))(this);
        } catch (err) {
            /**
             * Storage manager
             * @type {IStorage}
             */
            this.storage = new IStorage(this);
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
                this.modules.set(mod.name, mod);
            }
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports.Bot = Bot;
