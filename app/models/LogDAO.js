const DAO = require('./DAO');

class LogDAO extends DAO {
    constructor() {
        super("ar.json");
        this.fs = require('fs');
    }
}

module.exports = LogDAO;