var http = require('http'); // http'yi import ettik.
var dt = require('./myfirstmodule'); //kendi modülümüzü import ettik.

http.createServer((req, res) => { //bilgisayarımızı 8080 portunda web server olarak açtık.
    res.writeHead(200, { 'Content-Type': 'text/html' }); //client'a dönüşü html sayfasında yapacağız.
    res.write("The date and time are currently: " + dt.myDateTime()); //html içeriğinde yazacak olan şey.
    res.end();
}).listen(8080); //client bilgisayarımıza 8080 portunda bağlanmalı.