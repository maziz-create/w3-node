let http = require('http');//web server açabilmek için import ediyoruz.
let url = require('url');//url module

http.createServer((req, res) => {// 8080 portunda bilgisayarımızı web server olarak açtık.
  res.writeHead(200, { 'Content-Type': 'text/html' }); //client'a cevabı html göndereceğiz.
  let q = url.parse(req.url, true).query; //client'ın url'ini dizi olarak q ' ya attık gibi düşün.
  let txt = q.year + " " + q.month; //client'ın urlsinde yer alan yıl ve ay değişkenini kullandık.
  res.end(txt); //txt'i html cevabına ekle 
}).listen(8080); //bilgisayarımıza ancak 8080 portunda bağlanırsa cevabımıza ulaşabilir.