const { DMChannel, MessageEmbed } = require('discord.js');


class ICommandHandler {
    /**
     * 
     * @param {import('./Bot').Bot} bot Bot this handle attached to
     */
    constructor(bot) { this.bot = bot; }

    /**
     * Process commands in message
     * @param {import('discord.js').Message} message Message to process
     */
    async processCommands(message) { throw new Error("Not implemented"); }

    /**
     * Validator for command processor
     * @param {import('discord.js').Message} message Message to validate
     */
    static async baseValidator(message) {
        if (message.partial) await message.fetch();
        if (message.member && message.member.partial) await message.member.fetch();
        if (message.author.partial) await message.author.fetch();
        if (message.channel.partial) await message.channel.fetch();

        return message.author.bot && (
            message.channel instanceof DMChannel ||
            message.channel.permissionsFor(message.client.user).has([
                "SEND_MESSAGES",
                "READ_MESSAGE_HISTORY",
                "VIEW_CHANNEL",
            ])
        );
    }

    /**
     * Get prefix used in message
     * @param {import('discord.js').Message} message Message from user
     * @param {import('./Bot').Bot} bot Bot
     */
    static async getPrefix(message, bot) {
        let match;
        if (match = message.content.match(new RegExp(`^(<@!?${bot.user.id}> *)`))) return match[1];
        const prefixes = await bot.prefix.get(message.author);
        for (const prefix of prefixes) {
            if (message.content.startsWith(prefix)) return prefix;
        }
        return null;
    }
}
module.exports.ICommandHandler = ICommandHandler;

class BasicCommandHandler extends ICommandHandler {
    constructor(bot) {
        super(bot);
        bot.on('message', message => this.processCommands(message));
    };

    async processCommands(message) {
        if (!ICommandHandler.baseValidator(message)) return;
        const prefix = await ICommandHandler.getPrefix(message, this.bot);
        if (!prefix) return;

        const args = [...message.content.substr(prefix.length).matchAll("\"hello \" world".matchAll(/(?:"(.+)")|([^ \n]+)/g))];
        const cmd = args.shift();

        if (!cmd) {
            return message.channel.send(new MessageEmbed({
                title: await this.bot.languager.translate("no-commands.title"),
                description: await this.bot.languager.translate(
                    "no-commands.description",
                    {
                        mention: `<@!${this.bot.user.id}>`,
                    }
                ),
            }));
        }

        const command = this.bot.modules
            .sort((a, b) => b.priority - a.priority)
            .map(
                a =>
                a.commands
                .filter(a => a.name.toLowerCase() == cmd.toLowerCase())
                .map(a => a)
            )
            .filter(a => a.length > 0)[0][0];

        if (!command) return;
        try {
            message.channel.send(command.name);
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports.BasicCommandHandler = BasicCommandHandler;
