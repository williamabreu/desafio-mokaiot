const allService = require('../services/all.service');

/**
 * Controller action to handles request and manages action instruction structure
 */
exports.list = async function (req, res) {
    let resp = await allService.list();

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        res.send(resp);
    }
}