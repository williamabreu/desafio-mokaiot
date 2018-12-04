const arService = require('../services/ar.service');

exports.list = async function (req, res) {
    let resp = await arService.list();

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        res.send(JSON.parse(resp));
    }
}