const cheerio = require('cheerio')
const fetch = require('node-fetch')
async function getCount() {
return new Promise((resolve, reject)=> {
fetch('https://temp-number.com/')
.then((respon) => respon.text())
.then((data) => {
const $ = cheerio.load(data)
const co = []
const li = []
let res = []
$('.col-12 > .row > div').each(function(a, b) {
co.push($(b).find('div > a').text().trim())
li.push($(b).find('div > a').attr('href'))
})
  for (let x = 0; x < co.length -1; x++) {
    res.push({
    country: co[x],
    link: li[x]
    })
  }
  let result = {
    status: true,
    list_country: co.filter(v => v !== '')
    //result: res
  }
resolve(result)
}).catch((e) => {
reject({
status: false,
message: 'Eror',
eror: e
})
})
})
}

async function getNumb(country) {
  return new Promise((resolve, reject) => {
    let base = 'https://temp-number.com'
    getCount().then((data) => {
    if (data.list_country.includes(country)) {
    fetch(base+'/countries/'+country)
.then((respon) => respon.text())
.then((datares) => {
  let $ = cheerio.load(datares)
  let numb = []
  let published = []
  let link = []
  let res = []
  let result = {
    status: true,
    result: res,
    numb_list: numb

  }
  $('.container > .country-box').each(function(a, b) {
    numb.push($(b).find('.box > a > h4').text())
published.push($(b).find('.box>div>div').text())
    link.push(base+$(b).find('.box > a').attr('href'))
  })
  for (let z = 0; z < numb.length; z++) {
    res.push({
      numb: numb[z],
      up: published[z]
    })
  }
  resolve(result)
})
    } else {
reject({
status: false,
message: 'Country Tidak Di Temukan',
list_country: data.list_country
})
    }
    })
  })
}

async function getMess(country, numb) {
  return new Promise((resolve, reject) => {
    getCount().then((data) => {
      if (data.list_country.includes(country)) {
 getNumb(country).then((res) => {
   if (res.numb_list.includes(numb)) {
     fetch('https://temp-number.com/temporary-numbers/'+country+'/'+numb+'/1')
     .then((respon) => respon.text())
     .then((data) => {
       const $ = cheerio.load(data)
       let mess = []
       let up = []
       let form = []
       let res = []
       $('.direct-chat-info > .direct-chat-msg').each(function(a, b) {
         mess.push($(b).find('div:nth-child(2)').text().trim())
         up.push($(b).find('div > time').text().trim())
         form.push($(b).find('div>span').text().replace('From ', ''))
       })
       for (let i = 0; i < mess.length; i++) {
         res.push({
           up: up[i],
           message: mess[i],
           form: form[i]
         })
       }
       resolve(res)
     })
   } else {
     reject({
status: false,
message: 'Number Tidak Di Temukan',
list_country: res.numb_list
})
   }
 })
  } else {
        reject({
status: false,
message: 'Country Tidak Di Temukan',
list_country: data.list_country
})
  }
    })
  })
}

module.exports = { getCount, getNumb, getMess }