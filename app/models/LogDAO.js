const DAO = require('./DAO');

class LogDAO extends DAO {
    constructor() {
        super('example_log.json');
    }
}

module.exports = LogDAO;