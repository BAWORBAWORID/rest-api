import axios from "axios"
import cheerio from "cheerio"

async function NekoLast() {
let { data } = await axios('https://nekopoi.care', {
method: 'get',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
	"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
}
})
   const $ = cheerio.load(data)
   let title = []
   let link = []
   let img = []
   let up = []
   let result = []
   let rese = {
   status: true,
   author: 'Alfa',
   result: result
   }
   $('#boxid > .eropost').each(function(a, b) { img.push($(b).find('.eroimg>.limitero>img').attr('src'))
title.push($(b).find('.eroinfo>h2>a').text())
 link.push($(b).find('.eroinfo>h2>a').attr('href'))
up.push($(b).find('.eroinfo>span:nth-child(2)').text())
   })
   for (let i = 0; i < title.length; i++){
     result.push({
       title: title[i],
       up: up[i],
       link: link[i],
       img: img[i]
     })
   }
   console.log(rese)
}

async function NekoSearch(text) {
return new Promise((resolve, reject) => {
  fetch('https://nekopoi.care/search/'+text).then((response) => response.text())
  .then((data) => {
    const $ = cheerio.load(data)
    let title = [];
    let link = [];
    let img = [];
    let genre = [];
    let sinopsis = [];
    let durasi = [];
    let producer = [];
    let res = [];
    let result = {
      status: true,
      author: 'Alfa',
      result: res
    };
    $('.result > ul > li').each(function(a, b) {
      let gen = $(b).find('.top > .desc > p:nth-child(3)').text().replace('Genre : ', '')
      let gen_two = $(b).find('.top > .genre').text().trim()
      let sino = $(b).find('.top > .desc > p:nth-child(2)').text()
      let sino_two = $(b).find('.top > .desc > p:nth-child(1)').text()
      producer.push($(b).find('.top > .desc > p:nth-child(5)').text().replace('Producers : ', '') ? $(b).find('.top > .desc > p:nth-child(5)').text().replace('Producers : ', '') : '-')
      durasi.push($(b).find('.top > .desc > p:nth-child(6)').text().replace('Duration : ', '') ? $(b).find('.top > .desc > p:nth-child(6)').text().replace('Duration : ', '') : '-')
      sinopsis.push(sino ? sino : sino_two)
      genre.push(gen ? gen : gen_two)
      img.push($(b).find('.top > .limitnjg > img').attr('src'))
      title.push($(b).find('.top > h2 > a').text())
      link.push($(b).find('.top > h2 > a').attr('href'))
     // resolve(FetchText)
    })
    for (let z = 0; z < title.length; z++) {
      res.push({
        title: title[z],
        genre: genre[z],
        producer: producer[z],
        durasi: durasi[z],
        img: img[z],
        link: link[z],
        sinopsis: sinopsis[z]
      })
    }
    resolve(res)
  }).catch((e) => { 
    reject({
      status: false,
      message: 'Eror Report To The Owner',
      eror: e
    })
  })
})
}

async function NekoRandom() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 300)
fetch('https://nekopoi.care/page/'+page).then((res) => res.text())
 .then((data) => {
   const $ = cheerio.load(data)
   let title = []
   let link = []
   let img = []
   let up = []
   let result = []
   let rese = {
   status: true,
   author: 'Alfa',
   result: result
   }
   $('#boxid > .eropost').each(function(a, b) { img.push($(b).find('.eroimg>.limitero>img').attr('src'))
title.push($(b).find('.eroinfo>h2>a').text())
 link.push($(b).find('.eroinfo>h2>a').attr('href'))
up.push($(b).find('.eroinfo>span:nth-child(2)').text())
   })
   for (let i = 0; i < title.length; i++){
     result.push({
       title: title[i],
       up: up[i],
       link: link[i],
       img: img[i]
     })
   }
   resolve(rese)
 }).catch((e) => { reject({
 status: false,
 message: 'Eror Please Reoort To The Owner',
 eror: e
 }) })
})
}

async function NekoGet(url) {
return new Promise((resolve, reject) => {
fetch(url).then((response) => response.text())
.then((data) => {
const $ = cheerio.load(data)
let link_hdd = []
let link_hd = []
let link_shd = []
let link = {
hdd: link_hdd,
hd: link_hd,
shd: link_shd
}
let stream = {}
let info = {}
let result = {
status: $('.eroinfo > h1').text() ? true : false,
info,
link,
stream
}
if (result.status) {
resolve(result)
} else {
reject({
status: false,
message: 'Tidak Di Temukan'
})
}
info.img = $('.thm > img').attr('src')
info.title = $('.eroinfo > h1').text()
info.jp = $('.konten > p:nth-child(1)').text().replace('Japanese Title : ', '')
info.producer = $('.konten > p:nth-child(2)').text().replace('Producers : ', '')
info.durasi = $('.konten > p:nth-child(3)').text().replace('Duration : ', '')
info.genre = $('.konten > p:nth-child(4)').text().replace('Genre : ', '')
info.info = $('.eroinfo > p').text()
stream.st_one = $('#stream1 > iframe').attr('src')
stream.st_two = $('#stream2 > iframe').attr('src') ? $('#stream2 > iframe').attr('src') : 'Tidak Ada'
$('.boxdownload > div:nth-child(1) > .listlink > p > a').each(function(a, b) {
let lk_hdd = [($(b).attr('href'))]
let tt_hdd = [($(b).text())]
for (let x = 0; x < lk_hdd.length; x++) {
link_hdd.push({
link_dl: lk_hdd[x],
server: tt_hdd[x]
})
}
})
$('.boxdownload > div:nth-child(2) > .listlink > p > a').each(function(a, b) {
let lk_hd = [($(b).attr('href') ? $(b).attr('href') : 'Tidak Ada')]
let tt_hd = [($(b).text() ? $(b).text() : 'Tidak Ada')]
for (let p = 0; p < lk_hd.length; p++) {
link_hd.push({
link_dl: lk_hd[p],
server: tt_hd[p]
})
}
})
$('.boxdownload > div:nth-child(3) > .listlink > p > a').each(function(a, b) {
let lk_shd = [($(b).attr('href') ? $(b).attr('href') : 'Tidak Ada')]
let tt_shd = [($(b).text() ? $(b).text() : 'Tidak Ada')]
for (let p = 0; p < lk_shd.length; p++) {
link_shd.push({
link_dl: lk_shd[p],
server: tt_shd[p]
})
}
})
resolve(result)
}).catch((e) => { reject({
 status: false,
 message: 'Eror Please Reoort To The Owner',
 eror: e
 }) })
})
}

NekoLast()
//module.exports = { NekoGet, NekoSearch, NekoLast, NekoRandom }