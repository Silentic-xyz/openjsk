import { Client, ClientOptions, Collection } from 'discord.js';
import { Plugin, ShellPlugin } from './Plugin';

export interface BotOptions extends ClientOptions {}

export class Bot extends Client {
    constructor(settings? : BotOptions) {
        super(settings);

        this.plugins = new Collection();
    }

    private plugins : Collection<string, Plugin>;

    /**
     * Get plugins
     */
    public getPlugins() {
        return this.plugins.array();
    }

    /**
     * Add plugin to this bot
     */
    public async addPlugin(plugin : Plugin) {
        await plugin.load();
        this.plugins.set(plugin.name, plugin);
    }

    /**
     * Remove plugin from this bot
     */
    public async removePlugin(plugin : Plugin) {
        await plugin.unload();
        this.plugins.set(plugin.name, plugin);
    }

    /**
     * Get plugin by name
     */
    public getPlugin(plugin : string) {
        return this.plugins.get(plugin);
    }

    /**
     * Get shell plugin
     */
    public getShell() {
        return this.plugins.find(v => v instanceof ShellPlugin);
    }
}

