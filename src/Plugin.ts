import { Collection, Message } from 'discord.js';
import { Bot } from './Bot';

export abstract class Plugin {
    constructor(bot : Bot) {
        this.parent = bot;
        this.name = `plugin-${Math.floor(Math.random() * 10000)}`;
        bot.addPlugin(this);
    }

    protected parent : Bot;
    public name : string;

    /**
     * Load plugin
     */
    public abstract load() : Promise<void>;

    /**
     * Unload plugin
     */
    public abstract unload() : Promise<void>;
}

export abstract class ShellPlugin extends Plugin {
    public abstract processCommands(message : Message) : Promise<void>;
}

export abstract class StoragePlugin extends Plugin {
    public abstract processCommands(message : Message) : Promise<void>;
}

export abstract class LanguagerPlugin extends Plugin {
    public abstract translate(path : string, opts? : any) : Promise<string>;
    public abstract format(str : string, opts? : any) : string;
}

export abstract class CommandsPlugin extends Plugin {
    constructor(bot : Bot) {
        super(bot);

        this.commands = new Collection();
    }

    public readonly commands : Collection<string, Command>;

    protected addCommand(command : Command) : void {
        this.commands.set(command.name, command);
    }
}

export interface ICommandOptions {
    name: string,
}

export class Command {
    constructor(opts : ICommandOptions) {
        this.name = opts.name;
    }

    public readonly name : string;
}
