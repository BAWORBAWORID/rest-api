__path = process.cwd()

var express = require('express');
var router = express.Router();
const { runtime,fetchJson } = require('../lib/functions')

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/view/index.html')
})
router.get('/game', (req, res) => {
res.sendFile(__path + '/view/game.html')
})
router.get('/status', async (req, res, next) => {
	res.json({
	status: true,
	creator: `${creator}`,
	runtime: runtime(process.uptime())
	})
})

module.exports = router
