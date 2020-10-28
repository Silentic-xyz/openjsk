const { IPlugin } = require('./IPlugin');

class IDescriptor extends IPlugin {
    /**
     * Descriptor plugin
     * @param {import('./Bot').Bot} bot Bot
     * @param {(arg0: string) => boolean} validator Data validator
     */
    constructor(bot, validator) {
        super(bot);

        this.validator = validator;
    }
}
module.exports.IDescriptor = IDescriptor;

const descriptors = new Map();
module.exports.descriptors = bot => {
    if (!descriptors.has(bot)) {
        descriptors.set(bot, {
            string: new IDescriptor(bot, () => true),
            int: new IDescriptor(bot, d => !isNaN(d - 0) && Math.floor(d - 0) == d),
            float: new IDescriptor(bot, d => !isNaN(d - 0)),
            boolean: new IDescriptor(bot, d => ['true', 'false'].includes(d)),
            user: new IDescriptor(bot, d => d.match(/^<@!?[0-9]+>$/) || d.match(/^[0-9]+$/g)),
            role: new IDescriptor(bot, d => d.match(/^<@&[0-9]+>$/) || d.match(/^[0-9]+$/g)),
            channel: new IDescriptor(bot, d => d.match(/^<#[0-9]+>$/) || d.match(/^[0-9]+$/g)),
        });
    }
    return descriptors.get(bot);
}
