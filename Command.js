
/**
    @typedef {{
        name: string,
        permissions?: {
            user: import('./ExecutionPermissions').RawExecPerms,
            bot: import('discord.js').PermissionResolvable,
        },
        meta?: CommandMeta,
        fn: (arg0: import('./Context').CommandContext) => Promise<void>,
        fns?: Command[],
    }} CommandData
    @typedef {{
        usage?: string,
        category?: string,
        hidden?: boolean,
    }} CommandMeta
 */

const { Permissions, Collection } = require('discord.js');
const { ExecutionPermissions } = require('./ExecutionPermissions');

class Command {
    /**
     * Command class
     * @param {CommandData} data Command data
     */
    constructor(data) {
        this.name = data.name;
        this.meta = data.meta || {};

        this.permissions = {
            bot: new Permissions((data.permissions || {}).bot || 0),
            user: new ExecutionPermissions((data.permissions || {}).user || {}),
        };

        this.fn = data.fn;

        /**
         * @type {Collection<string, Command>}
         */
        this.fns = new Collection();
        (data.fns || []).forEach(a => {
            this.fns.set(a.name, a);
        });
    }
}
module.exports.Command = Command;
