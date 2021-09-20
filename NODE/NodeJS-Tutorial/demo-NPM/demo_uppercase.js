var http = require('http');  //web server açabilmek için import ediyoruz.
var uc = require('upper-case'); //NPM ile yazıları büyük harfe çeviren module'i indirdik.
http.createServer((req, res) => { // 8080 portunda bilgisayarımızı web server olarak açtık.
    res.writeHead(200, { 'Content-Type': 'text/html' }); //client'a cevabı html göndereceğiz.
    res.write(uc.upperCase("Hello World!"));
    res.end(); //Bitir.
}).listen(8080); //Bilgisayarımıza ancak 8080 portunda bağlanırsa cevabımıza ulaşabilir.