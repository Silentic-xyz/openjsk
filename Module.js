const { Collection } = require('discord.js');
const { ExecutionPermissions } = require('./ExecutionPermissions');
const { IPlugin } = require('./IPlugin');

/**
    @typedef {{
        name: string,
        permissions?: import('./ExecutionPermissions').RawExecPerms,
        priority: number,
    }} RawModuleData
 */

class IModule extends IPlugin {
    /**
     * Bot commands plugin
     * @param {RawModuleData} data data
     */
    constructor(bot, data) {
        super(bot);

        this.name = data.name;
        this.permissions = new ExecutionPermissions(data.permissions || {});
        this.priority = data.priority;

        /**
         * @type {Collection<string, import('./Command').Command>}
         */
        this.commands = new Collection();
    }

    /**
     * Add command to the module's command list
     * @param {import('./Command').Command} command Command to add
     */
    addCommand(command) {
        this.commands.set(command.name, command);
    }
}
module.exports.IModule = IModule;
