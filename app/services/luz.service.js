const LuzClass = require('../models/LuzDAO');

exports.list = function () {
    const Luz = new LuzClass();
    return Luz.list();
}