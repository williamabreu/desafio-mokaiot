const LuzClass = require('../models/LuzDAO');

/*
    Faz leitura da coleção
*/
exports.list = function () {
    const luz = new LuzClass();
    return luz.list();
}