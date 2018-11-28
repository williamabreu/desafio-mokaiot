const router = require('express').Router();
const exCtrl = require('../controllers/exampleController');
const logCtrl = require('../controllers/logController');

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to ... Example Micro Service' });
});

router.post('/api/example/action', exCtrl.action);
router.get('/api/log/list', logCtrl.list);

module.exports = router;