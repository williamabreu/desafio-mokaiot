const DAO = require('./DAO');

/*
    Data Access Object para manipular a coleção ar.json
*/
class ArDAO extends DAO {
    constructor() {
        super('ar.json');
    }
}

module.exports = ArDAO;
