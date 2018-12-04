const DAO = require('./DAO');

class LuzDAO extends DAO {
    constructor() {
        super("luz.json");
        this.fs = require('fs');
    }
}

module.exports = LuzDAO;