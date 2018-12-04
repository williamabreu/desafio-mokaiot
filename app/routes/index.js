const router = require('express').Router();
const arCtrl = require('../controllers/arController');
const luzCtrl = require('../controllers/luzController');

router.get('/api/list/ar', arCtrl.list);
router.get('/api/list/luz', luzCtrl.list);

module.exports = router;