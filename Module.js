const { Collection } = require('discord.js');
const { ExecutionPermissions } = require('./ExecutionPermissions');

/**
    @typedef {{
        name: string,
        permissions?: import('./ExecutionPermissions').RawExecPerms,
        priority: number,
    }} RawModuleData
 */

class Module {
    /**
     * Module
     * @param {RawModuleData} data data
     */
    constructor(data) {
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
module.exports.Module = Module;
