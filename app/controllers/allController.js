const arService = require('../services/ar.service');
const luzService = require('../services/luz.service');

exports.list = async function (req, res) {
    let  arResp = await arService.list();
    let luzResp = await luzService.list();

    if (arResp.error) {
        res.status(500).json(arResp);
    } else if (luzResp.error) {
        res.status(500).json(luzResp);
    } else {
        res.send({
            ar: JSON.parse(arResp),
            luz: JSON.parse(luzResp)
        });
    }
}