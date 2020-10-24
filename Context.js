

/**
    @typedef {{
        message: import('discord.js').Message,
        bot: import('./Bot').Bot,
    }} ImportedCommandArgs
    @typedef {{
        bot: import('./Bot').Bot,
    }} ImportedInitalizationArgs
 */

class CommandContext {
    /**
     * Command context
     * @param {ImportedCommandArgs} ica Args
     */
    constructor(ica) {
        this.message = ica.message;
        this.bot = ica.bot;

        /**
         * @type {Shell[]}
         */
        this.shells = [];
    }

    send(...args) {
        return this.message.channel.send(...args);
    }

    get shell() {
        const shell = new Shell(this);
        this.shells.push(shell);
        return shell;
    }

    closeAll() {
        this.shells.forEach(a => a.close());
    }
}
module.exports.CommandContext = CommandContext;

class LoaderContext {
    /**
     * Command context
     * @param {ImportedInitalizationArgs} iia Args
     */
    constructor(iia) {
        this.bot = iia.bot;
    }
}
module.exports.LoaderContext = LoaderContext;

class Shell {
    /**
     * Shell class
     * @param {CommandContext} context Context
     */
    constructor(context) {
        this.context = context;

        this.text = "\u200b";
        this.message = null;

        this.timer = null;
    }

    send = async text => {
        this.text = (a => Math.max(0, a.substr(2000 - a.length)))(this.text + text);
        if (!this.message && !this.timer) {
            this.message = await this.context.send(this.text);

            loop = async() => {
                if (!this.message) this.message = await this.context.send(this.text);
                else {
                    try {
                        await this.message.edit(this.text);
                    } catch (err) {
                        this.message = await this.context.send(this.text);
                    }
                }

                setTimeout(loop, 2000);
            }

            loop();
        }
    }

    recieve = async () => {
        return (await this.context.message.channel.awaitMessages(
            m => m.author.id == this.context.message.author.id,
            {
                max: 1,
            }
        )).first().content;
    }

    close() {
        clearTimeout(this.timer);
        if (this.message) this.message.delete().catch(() => {});
    }
}
