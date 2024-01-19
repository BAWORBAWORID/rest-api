require('../settings')
const express = require('express')
var isUrl = require("is-url")
var fetch = require('node-fetch')
const fs = require('fs-extra')
const request = require('request')
const isImageURL = require('image-url-validator').default
const textpro = require('../lib/textpro')
const photooxy = require('../lib/photooxy')
const { fetchJson, runtime, getBuffer } = require('../lib/functions')
const { onGoing, BatchAnimeS, quotesanime, pornovid, hentaivid, WibuDl, xnxxs, xnxxdl, tikhd, WibuSearch, BokepRandom, OtakuS, tikcd, ighd, pin, wallpaper, ytplay, ytvid, ytmplay, ytmpvid, isgd, fbvid, fbimg, ai, kfdl, tts, txtoimg, TTStalk, igs, botTT, allindl, unsplash, ytplay2, WallFlare, mynime, NimeDl, xvideos, XDL, fetchText, axiosText, SearchNabi, nHentai,  tebakGambar, CodeGenerate, codeFixed, processing, countdown } = require('../lib/myscrape')
let nhentai = new nHentai()
const { NekoGet, NekoSearch, NekoLast, NekoRandom } = require('../lib/neko')
const { getNumb, getCount, getMess } = require('../lib/phone')
const yts = require('ytsearch.js')
const { set } = require('lodash')
var router = express.Router()

// + GAME MENU + \\
router.get('/game', async (req, res, next) => {
let listgame = JSON.parse(fs.readFileSync('./data/list-game.json'))
var game = req.query.game
if (!game) return res.json({ message: 'Masukan Nama Game' })
if (listgame.includes(game)) {
try {
let json = JSON.parse(fs.readFileSync(`./data/games/${game}.json`))
let data = json[Math.floor(Math.random() * json.length)]
res.json({
  status: true,
  creator,
  data
})
} catch (error) {
res.json(error)
}
} else {
res.json({ 
status: false,
message: `${game} Tidak Ada Di Dalam List`,
list_game: listgame
})
}
})
// - ISLAMIC - \\
router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi
		SearchNabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', e)
			res.json(loghandler.error)
		})
})
// + CECAN MENU + \\
router.get('/cecan', async (req, res, next) => {
let ceca = ["cecan", "cecan2", "china", "indonesia", "japan", "korea", "malaysia", "thailand", "vietnam"]
var type = req.query.type
if (!type) return res.json({ message: 'Masukan Parameter Type' })
if (ceca.includes(type)) {
  try {
let json = JSON.parse(fs.readFileSync(`./data/cecan/${type}.json`))
let data = json[Math.floor(Math.random() * json.length)]
let buff = await getBuffer(data)
res.set({ "Content-Type": "image/jpg" })
res.send(buff)
} catch(err) {
  res.json(err)
}
}
})
// - ASUPAN MENU - \\
router.get('/asupan', async (req, res, next) => {
let supan = ["asupan","anony","bocil","cecan","euni","geayubi","harley","hijaber","natajadeh","rikagusriani","santuy","ukhty"]
var type = req.query.type
if (!type) return res.json({ message: 'Masukan Parameter Type' })
if (supan.includes(type)) {
let json = JSON.parse(fs.readFileSync(`./data/asupan/${type}.json`))
let data = json[Math.floor(Math.random() * json.length)]
if (data.includes('.mp4')) {
let buff = await getBuffer(data) ?? res.json({ message: 'error report owner alfa' })
res.set({ 'Content-Type': 'video/mp4' })
res.send(buff)
} else {
let buff = await getBuffer(data) ?? res.json({ message: 'error report owner alfa' })
res.set({ 'Content-Type': 'image/jpg' })
res.send(buff)
}
} else {
res.json({ 
message: `${type} Tidak Ada Di Dalam List`
})
}
})
// - NSFW MENU \\
router.get('/nsfw/nsearech', async (req, res, next) => {
let text = req.query.text
if (!text) return res.json(loghandler.text)
let z = await nhentai.search(text)
res.json({
status: true,
creator: creator,
result: z
})
})
router.get('/nsfw/hane', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/hane.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/arty', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/arty.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/mikomin', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/mikomin.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/lisa', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/lisa.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/ggs', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/ggs.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/aracu', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/aracu.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
router.get('/nsfw/menfox', async (req, res, next) => {
let x = JSON.parse(fs.readFileSync('./data/onlyfans/menfox.json'))
let rane = x[Math.floor(Math.random()* x.length)]
let buff = await getBuffer(rane)
res.set({'Content-Type': 'image/jpg'})
res.send(buff)
})
// - RANDOM MENU - \\
router.get('/random/bokep', async (req, res, next) => {
let x = await BokepRandom()
let buff = await getBuffer(x.result.link)
res.set({'Content-Type': 'video/mp4'})
res.send(buff)
})
router.get('/random/hentai', async (req, res, next) => {
let x = await hentaivid()
let js = x[Math.floor(Math.random() * x.length)]
if (js.type == 'video/mp4') {
let buff = await getBuffer(js.video_1)
res.set({ "Content-Type": "video/mp4" })
res.send(buff)
}
})
router.get('/random/image', async (req, res, next) => {
let nam = JSON.parse(fs.readFileSync('./data/list-anime.json'))
let name = req.query.name
if (!name) return res.json({ message: 'Masukan Parameter Name' })
try {
if (nam.includes(name)) {
let json = JSON.parse(fs.readFileSync(`./data/anime/${name}.json`))
let data = json[Math.floor(Math.random() * json.length)]
let buff = await getBuffer(data)
res.set({ "Content-Type": "image/jpg" })
res.send(buff)
} else {
res.json({
status: false,
message: `${name} Tidak ada dalam list`,
list: nam
})
}
} catch (eror) {
res.json(eror)
}
})
router.get('/random/katajawa', async (req, res, next) => {
let data = JSON.parse(fs.readFileSync('./lib/jw.json'))
var result = data[Math.floor(Math.random() * data.length)];
res.json({
status: true,
creator: creator,
result: result
})
})
// AKHIR RANDOM \\
// ANIME \\
router.get('/anime/mynimeku', async (req,  res, next) => {
let text = req.query.text
if (!text) return res.json(loghandler.nottext)
let apikey = req.query.apikey
mynime(text).then((x) => {
res.json({
status: true,
creator: creator,
result: x
})
}).catch((e) => {
res.json({
status: false,
creator: creator,
message: e.message
})
})
})

router.get('/anime/mynimedl', async (req,  res, next) => {
let url = req.query.url
if (!url) return res.json(loghandler.noturl)
let apikey = req.query.apikey
NimeDl(url).then((x) => {
res.json({
status: true,
creator: creator,
result: x
})
}).catch((e) => {
res.json({
status: false,
creator: creator,
message: e.message
})
})
})

router.get('/anime/otaku', async (req,  res, next) => {
let text = req.query.text
if (!text) return res.json(loghandler.nottext)
let apikey = req.query.apikey
let x = await OtakuS(text)
res.json({
status: true,
creator: creator,
result: x
})
})
router.get('/anime/wibudesu', async (req,  res, next) => {
let text = req.query.text
if (!text) return res.json(loghandler.nottext)
let apikey = req.query.apikey
let x = await WibuSearch(text)
res.json({
status: true,
creator: creator,
result: x.res
})
})
router.get('/anime/wibudl', async (req,  res, next) => {
let url = req.query.url
if (!url) return res.json(loghandler.noturl)
let apikey = req.query.apikey
let x = await WibuDl(url)
res.json({
status: true,
creator: creator,
result: x.result,
link_dl: x.file
})
})
router.get('/anime/ongoing', async (req,  res, next) => {
let apikey = req.query.apikey
let x = await onGoing()
res.json({
status: true,
creator: creator,
result: x
})
})
// AKHIR ANIME \\
// AI MENU \\
router.get('/ai/code', async (req, res, next) => {
var type = req.query.type
var text = req.query.text
if (!type) return res.json({ status: false, message: 'Masukan parameter type' })
if (!text) return res.json({ status: false, message: 'Masukan parameter text' })
if (type === 'generate') {
let c = await CodeGenerate(text)
res.json({
status: false,
creator: 'Alfa',
result: c.result
})
} else if (type === 'codefix') {
let z = await codeFix('ini kode pemrograman aku ada yang eror tolong perbaiki', text)
res.json({
status: true,
creator: 'Alfa',
result: z.reply
})
} else {
res.json({ message: `${type} tidak ada` })
}
})
router.get('/ai/enhance', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json({ message: 'masukan parameter url' })
let img = await getBuffer(url)
let buff = await processing(img, "enhance")
res.set({ 'Content-Type': 'image/jpg' })
res.send(buff)
})
router.get('/ai/cai', async (req, res, next) => {
    var text = req.query.text
    var name = req.query.name
    if (!text) return res.json(loghandler.nottext)
    if (!name) return res.json({ status: false, message: 'Masukan Parameter url'})
    fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=${name}`)
    .then(respon => respon.json())
    .then((data) => {
      res.json({
        status: true,
        creator: creator,
        result: data.result
      })
    })
  })
router.get('/ai/gpt', async (req, res, next) => {
let text = req.query.text
if (!text) return res.json(loghandler.nottext)
let z = await ai(text)
res.json({
status: true,
author: "Alfa",
result: z.reply
})
})
router.get('/ai/txt2img', async (req, res, next) => {
let text = req.query.text
let apikey = req.query.apikey
if (!text) return res.json(loghandler.noturl)
let x = await txtoimg(text)
var requestSettings = {
        url: x.url,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
    
})
// AKHIR AI \\
/*router.get('/nsfw/arty', async (req, res, next) => {
const data = JSON.parse(fs.readFileSync('./onlyfans/arty.json'))
var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
        url: result,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function (error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
})*/
// - DOWNLOADER MENU - \\
router.get('/downloader/kfdl', async (req,  res, next) => {
let url = req.query.url
let apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)  
kfdl(url).then(({ file_info }) => { 
res.json({
status: true,
creator: creator,
result: file_info
})
})
})

router.get('/downloader/ighd', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)  
ighd(url).then((x) => {
const resnyo = {
title: x.title,
durasi: x.durasi,
link_dl: x.medias[0].url,
quality: x.medias[0].quality,
size: x.medias[0].formattedSize,
sizeS: x.medias[0].size
}
res.json({
status: true,
creator: `${creator}`,
result: resnyo
})
})
})
router.get('/downloader/fbdl', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)  
if (!url.includes('facebook.com')) return res.json({ message: 'Itu Bkn Link FB Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })
let p = await fbvid(url)
res.json({
status: true,
creator: `${creator}`,
result: p.res
})
})
router.get('/downloader/tiktokaudio', async (req, res, next) => {
  var url = req.query.url
  
  if (!url) return res.json(loghandler.noturl)
  if (!url.includes('tiktok.com')) return res.json({ message: 'Itu Bkn Link TikTok Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })

  let { result } = await tikhd(url)
    let { MP3 } = result
  let buffe = await getBuffer(MP3)
  res.set({'Content-Type': 'audio/mp3'})
  res.send(buffe)
  })
  router.get('/downloader/tiktok', async (req, res, next) => {
  var url = req.query.url
  
  if (!url) return res.json(loghandler.noturl)
  if (!url.includes('tiktok.com')) return res.json({ message: 'Itu Bkn Link TikTok Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })

  let { result } = await tikhd(url)
  let buffe = await getBuffer(result.NW_HD)
  res.set({'Content-Type': 'video/mp4'})
  res.send(buffe)
  })
router.get('/downloader/tiktok2', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
if (!url.includes('tiktok.com')) return res.json({ message: 'Itu Bkn Link TikTok Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })
tikcd(url).then((x) => {
res.json({
status: true,
creator: `${creator}`,
result: x
})
})
})
router.get('/downloader/tiktok3', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
if (!url.includes('tiktok.com')) return res.json({ message: 'Itu Bkn Link TikTok Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })
tts(url).then((x) => {
res.json({
status: true,
creator: `${creator}`,
result: x
})
})
})
router.get('/downloader/ytplay2', async (req, res,  next) => {
var q = req.query.q
if (!q) return res.json(loghandler.notq)
const o = await ytplay2(q)
res.json({
status: true,
creator: `${creator}`,
result: o
})
})
router.get('/downloader/ytplay', async (req, res, next) => {
var q = req.query.q
if (!q) return res.json(loghandler.notq)
const { result } = await ytplay(q)
res.json({
status: true,
creator: `${creator}`,
result: result
})
})
router.get('/downloader/ytdl', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
if (!url.includes('youtube.com' || 'youtu.be')) return res.json({ message: 'Itu Bkn Link YT Bnh 🗿 Lawak Lu 🤣. Btw Kalo Mau Request Chat +6287715768324' })
ytdl(url).then((d) => {
res.json({
status: true,
creator: `${creator}`,
result: d.result
})
})
})
router.get('/downloader/xnxxdl', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
xnxxdl(url).then((p) => {
res.json({
status: true,
creator: `${creator}`,
result: p.result
})
})
})
router.get('/downloader/xvideodl', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
XDL(url).then(({ result }) => {
res.json({
status: true,
creator: `${creator}`,
result: result
})
})
})
// - SEARCH MENU - \\
router.get('/search/unsplash', async (req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
unsplash(text).then((x) => {
res.json({
status: true,
creator: creator,
result: x
})
}).catch((e) => {
res.json(e)
})
})
router.get('/search/wallflare', async (req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
WallFlare(text).then((x) => {
res.json({
status: true,
creator: creator,
result: x
})
}).catch((e) => {
res.json(e)
})
})
router.get('/search/xnxx', async (req, res, next) => {
var q = req.query.q
if (!q) return res.json(loghandler.notq)
xnxxs(q).then((p) => {
res.json({
status: true,
creator: `${creator}`,
result: p.res
})
})
})
router.get('/search/xvideos', async (req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
xvideos(text).then((p) => {
res.json({
status: true,
creator: `${creator}`,
result: p
})
})
})
router.get('/search/ytsearch', async (req, res, next) => {
var q = req.query.q
if (!q) return res.json(loghandler.notq)
yts(q).then((x) => {
res.json({
status: true,
creator: `${creator}`,
result: x
})
})
})

// - PHOTOOXY MENU - \\
router.get('/photooxy/dark-metal', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/elegant-3d-neon-dark-metal-text-effect-online-free-416.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/white-stone', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/shadow', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/white-cube', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/gradient', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/fur-text', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/flaming', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/scary-cemetery', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/harry-potter', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/3d-wood', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/illuminated-metallic', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/put-your', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
photooxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})
router.get('/photooxy/8-bit', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
photooxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
})


// - TOOLS MENU - \\
router.get('/tools/getnumb', async (req, res, next) => {
var country = req.query.country
if (!country) return res.json({ status: false, message: 'Masukan Paramater country '})
getNumb(country).then((x) => {
res.json(x)
}).catch((e) => {
res.json(e)
})
})
router.get('/tools/getmess', async (req, res, next) => {
var country = req.query.country
var number = req.query.number
if (!country) return res.json({ status: false, message: 'Masukan Parameter Country' })
if (!number) return res.json({ status: false, message: 'Masukan Parameter Number' })
getMess(country, number).then((x) => {
res.json(x)
}).catch((e) => {
res.json(e)
})
})
router.get('/tools/stalktt', async (req, res, next) => {
var user = req.query.user
if (!user) return res.json(loghandler.notuser)
TTStalk(user).then((p) => {
res.json(p.res)
}).catch((e) => {
res.json(e)
})
})
router.get('/tools/stalkig', async (req, res, next) => {
var user = req.query.user
if (!user) return res.json(loghandler.notuser)
igs(user).then((p) => {
res.json(p.res)
}).catch((e) => {
res.json(e)
})
})
router.get('/tools/inspect', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
try {
let x = await fetchText(url)
res.json({
status: true,
result: x
})
} catch (err) {
res.json(err)
}
})
router.get('/tools/axiosget', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
if (!url.includes('http') && !url.includes('https')) return res.json({ message: 'Masukan Url Yang Valid' })
try {
let x = await axiosText(url)
res.json({
status: true,
result: x
})
} catch(e) {
res.json(e)
}
})
router.get('/tools/countdown', async (req, res, next) => {
 var tanggal = req.query.tanggal
 var bulan = req.query.bulan
 var tahun = req.query.tahun
 if (!tanggal) return res.json({ message: 'Masukan parameter tanggal' })
 if (!bulan) return res.json({ message: 'Masukan parameter bulan' })
 if (!tahun) return res.json({ message: 'Masukan parameter tahun' })
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 if (bulan.includes(month)) {
 let z = await countdown(tanggal, bulan, tahun)
 res.json({
 status: true,
 author: 'Alfa',
 result: z
 })
 } else {
 res.json({
 message: `${bulan} Tidak ada dalam list`,
 list_bulan: month
 })
 }
})
router.get('/tools/ssweb', async (req, res, next) => {
var url = req.query.url
if (!url) return res.json(loghandler.noturl)
let result = await getBuffer(`https://screenia.best/api/screenshot?url=${url}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
})

module.exports = router