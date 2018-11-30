const router = require('express').Router();
const exCtrl = require('../controllers/exampleController');
const logCtrl = require('../controllers/logController');

// Import controllers do desafio:
// const ar = require('../controllers/arController');
// const luz = require('../controllers/luzController');
// const all = require('../controllers/allController');

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to ... Example Micro Service' });
});

router.post('/api/example/action', exCtrl.action);
router.get('/api/log/list', logCtrl.list);

// Rotas do desafio:

// /*
//     1. Uma requisição para retornar o conteúdo do arquivo ​ ar.json​​
// */
// router.get('/api/list/ar', ar.list);

// /*
//     2. Uma requisição para retornar o conteúdo do arquivo ​ luz.json​
// */
// router.get('/api/list/luz', luz.list);

// /*
//     3. Uma requisição para retornar o conteúdo de ambos os arquivos mesclados 
//     em uma única lista
// */
// router.get('/api/list/all', all.list);

module.exports = router;