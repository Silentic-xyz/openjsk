
/**
    @typedef {{
        name: string,
        permissions?: {
            user: import('./ExecutionPermissions').RawExecPerms,
            bot: import('discord.js').PermissionResolvable,
        },
        meta?: CommandMeta,
        fn: (arg0: import('./Context').Context) => Promise<void>,
        fns?: Command[],
    }} CommandData
    @typedef {{
        usage?: string,
        category?: string,
        hidden?: boolean,
    }} CommandMeta
 */

const { Permissions, Collection, Collection } = require('discord.js');
const { ExecutionPermissions } = require('./ExecutionPermissions');

class Command {
    /**
     * Command class
     * @param {CommandData} data Command data
     */
    constructor(data) {
        this.name = data.name;
        this.meta = data.meta || {};

        this.permissions = {};
        this.permissions.bot = new Permissions((data.permissions || {}).bot || 0);
        this.permissions.user = new ExecutionPermissions((data.permissions || {}).user || {});

        this.fn = data.meta;

        /**
         * @type {Collection<string, Command>}
         */
        this.fns = new Collection();
        data.fns.forEach(a => {
            this.fns.set(a.name, a);
        });
    }
}
module.exports.Command = Command;
