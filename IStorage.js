const { Collection } = require("discord.js");
const { IPlugin } = require('./IPlugin');

/**
    @typedef {{
       name: string,
       type: FieldType,
       primary: true, 
    }[]} TableData
    @typedef {
        'string' |
        'int' |
        'float' |
        'bigint' |
        'bitdouble' |
        {
            array: TableData,
        } |
        'json'
    } FieldData
 */

class IStorage extends IPlugin {
    /**
     * Get table
     * @param {string} name Table name
     * @param {TableData} data Table data
     * 
     * @returns {ITable} Table class
     */
    async table(name, data) {}
}
module.exports.IStorage = IStorage;

class ITable extends IPlugin {
    /**
     * Get entry
     * @param {any} keys Entry keys
     * 
     * @returns {IEntry} Table entry
     */
    async entry(keys) {}
}
module.exports.ITable = ITable;

class IEntry extends IPlugin {
    /**
     * Re-fetch entry
     * 
     * @returns {Promise<IEntry>} Fetching promise
     */
    async fetch() {}

    /**
     * Push entry
     * 
     * @returns {Promise<IEntry>} Pushing promise
     */
    async push() {}
}
module.exports.IEntry = IEntry;
