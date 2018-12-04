const ArClass = require('../models/ArDAO');

exports.list = function () {
    const Ar = new ArClass();
    return Ar.list();
}