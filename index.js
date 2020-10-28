
module.exports.Bot = require('./Bot').Bot;
module.exports.Module = require('./Module').Module;
module.exports.plugins = {};

module.exports.plugins.languager = require('./ILanguager');
module.exports.plugins.prefix = require('./IPrefixManager');
module.exports.plugins.handle = require('./ICommandHandler');
module.exports.plugins.descriptors = require('./IDescriptor');
module.exports.plugins.storage = require('./IStorage');

module.exports.Command = require('./Command').Command;
module.exports.CommandContext = require('./Context').CommandContext;
module.exports.LoaderContext = require('./Context').LoaderContext;
