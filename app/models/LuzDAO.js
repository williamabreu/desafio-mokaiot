const DAO = require('./DAO');

/*
    Data Access Object para manipular a coleção ar.json
*/
class LuzDAO extends DAO {
    constructor() {
        super("luz.json");
    }
}

module.exports = LuzDAO;
