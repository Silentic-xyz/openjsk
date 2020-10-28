# OpenJSK library

OpenJSK is the easiest solution for create a bot with Discord.JS

# Docs

This library is based on plugins system and provides default
interfaces to create plugins for. OpenJSK is highly customizable
and easy to work with

```javascript
const { Bot } = require('openjsk');
const { join } = require('path');
const bot = new Bot({
    prefix: ["prefix$"],
    partials: [
        "CHANNEL",
        "GUILD_MEMBER",
        "MESSAGE",
        "REACTION",
        "USER",
    ],
    restTimeOffset: 0,
    shards: 'auto',
});

bot.on('ready', async () => {
    console.log(`Logged in as ${bot.user.tag}`);

    await bot.plugins.load([
        'openjsk-postgresql',
        'openjsk-langs',
        'openjsk-prefix',
        'openjsk-bash',
    ]);
    await bot.plugins.loadFrom(join(__dirname, 'plugins'));
});

bot.login('your-token');
```
