const router = require('express').Router()
const generateImageCtrl = require('./controllers/generateImageController').generateImage
const home = require('./controllers/applicationController').home
const warmup = require('./controllers/applicationController').warmup
router.post('/generate-image', generateImageCtrl)
router.get('/', home)
router.get('/_ah/warmup', warmup);

module.exports = router

