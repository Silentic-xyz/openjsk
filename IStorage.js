const { Collection } = require("discord.js");


class IStorage {
    /**
     * Storage module
     * @param {import('./Bot').Bot} bot Bot
     */
    constructor(bot) { this.bot = bot };

    /**
     * Perform an action
     * @param {StorageFilter} filter Filter
     * @returns {Collection<string, string>}
     */
    async perform(filter);
}
module.exports.IStorage = IStorage;

class StorageFilter {
    /**
     * Filter
     * @param {'get' | 'set' | 'delete' | "create"} action Action to perform
     */
    constructor(action) {
        this.action = action;

        /**
         * @type {string[]}
         */
        this._fields = null;
        /**
         * @type {string}
         */
        this._table = null;
        /**
         * @type {string[]}
         */
        this._values = null;
    }

    /**
     * Set filter's table
     * @param {string} table Table
     */
    table(table) {
        this._table = table;
    }

    /**
     * Set filter's fields
     * @param {string[]} fields Fields
     */
    fields(fields) {
        this._fields = fields;
    }

    /**
     * Set filter's values
     * @param {string[]} values Values
     */
    values(values) {
        this._values = values;
    }

    static select() {
        return new StorageFilter("get");
    }

    static update() {
        return new StorageFilter("set");
    }

    static delete() {
        return new StorageFilter("delete");
    }

    static create() {
        return new StorageFilter("create");
    }
}
module.exports.StorageFilter = StorageFilter;

