const router = require('express').Router();
const arCtrl = require('../controllers/arController');
const luzCtrl = require('../controllers/luzController');
const allCtrl = require('../controllers/allController');

router.get('/api/list/ar', arCtrl.list);
router.get('/api/list/luz', luzCtrl.list);
router.get('/api/list/all', allCtrl.list);

module.exports = router;