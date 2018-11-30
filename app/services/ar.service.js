const ArClass = require('../models/ArDAO');

/*
    Faz leitura da coleção
*/
exports.list = function () {
    const ar = new ArClass();
    return ar.list();
}