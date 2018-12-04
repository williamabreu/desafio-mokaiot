const router = require('express').Router();
const arCtrl = require('../controllers/arController');

router.get('/api/list/ar', arCtrl.list);

module.exports = router;