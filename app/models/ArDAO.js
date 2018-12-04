const DAO = require('./DAO');

class ArDAO extends DAO {
    constructor() {
        super("ar.json");
        this.fs = require('fs');
    }
}

module.exports = ArDAO;