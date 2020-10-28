import { Client, ClientOptions } from 'discord.js';

export interface BotOptions extends ClientOptions {

}

export class Bot extends Client {
    constructor(settings?: BotOptions) {
        super(settings);
    }
}

