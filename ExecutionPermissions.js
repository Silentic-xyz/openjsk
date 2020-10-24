const { Permissions, User, Team } = require('discord.js');

/**
    @typedef {{
        permissions?: import('discord.js').PermissionResolvable,
        guild?: boolean,
        owner?: boolean,
        developer?: boolean,
    }} RawExecPerms
 */

class ExecutionPermissions {
    /**
     * Permissions
     * @param {RawExecPerms} data Permissions raw data
     */
    constructor(data) {
        this.permissions = new Permissions(data.permissions || 0);

        this.guildOnly = !!data.guild;
        this.guildOwnerOnly = !!data.owner;
        this.botOwnerOnly = !!data.developer;
    }

    /**
     * Check if user/member has these permissions
     * @param {import('discord.js').User | import('discord.js').GuildMember} user User or member
     * @param {import('discord.js').GuildChannel} channel Guild channel
     */
    isAllowed = async (user, channel) => {
        if (user.partial) await user.fetch();

        if (this.botOwnerOnly) {
            const app = await user.client.fetchApplication();

            if (app.owner instanceof Team) {
                return app.owner.members.has(user.id);
            }
            else return app.owner.id == user.id;
        }

        if (user instanceof User) {
            if (this.guildOnly || this.guildOwnerOnly) return false;
            return true;
        }
        else {
            if (user.guild.ownerID == user.id) return true;
            else if (this.guildOwnerOnly) return false;

            return (
                channel
                ? user.permissionsIn(channel)
                : user.permissions
            )().has(this.permissions);
        }
    }
}
module.exports.ExecutionPermissions = ExecutionPermissions;
