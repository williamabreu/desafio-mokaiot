const luzService = require('./luz.service');
const arService = require('./ar.service');

/*
    Faz leitura das coleções
*/
exports.list = function () {
    let luz = luzService.list();
    let ar = arService.list();
    return luz + ar;
}