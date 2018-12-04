const luzService = require('../services/luz.service');

exports.list = async function (req, res) {
    let resp = await luzService.list();

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        res.send(JSON.parse(resp));
    }
}