import { Bot, CommandsPlugin, Command } from './index';

export class MainModule extends CommandsPlugin {
    constructor(bot : Bot) {
        super(bot);

        this.name = "openjsk";

        this.addCommand(new Command({
            name: 'help',
        }));
    }

    public load(): Promise<void> {
        return new Promise(res => res());
    }

    public unload(): Promise<void> {
        return new Promise(res => res());
    }
}
