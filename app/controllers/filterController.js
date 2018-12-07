const arCrtl = require('./arController');
const luzCrtl = require('./luzController');
const allCrtl = require('./allController');


exports.list = async function (req, res) {
    let body = req.body;
    
    if (body.tipo == 'ar') {
        arCrtl.list(req, res);
    } 
    else if (body.tipo == 'luz') {
        luzCrtl.list(req, res);
    }
    else if (body.tipo == 'all') {
        allCrtl.list(req, res);
    }
    else {
        res.status(404).json({'mensagem': 'não foi encontrado nada'});
    }
}