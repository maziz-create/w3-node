var http = require('http'); //NodeJS'i web server olarak kullanıyoruz.
var url = require('url'); //client'ın url'si ile işlem yapmak için.
var fs = require('fs'); //fileSystem.

http.createServer((req, res) => { //Web Server ürettik.
    var q = url.parse(req.url, true); //Client'ın urlsini prop olarak aldık.
    var filename = "." + q.pathname; //urldeki pathname'i aldık. örn: default.html
    fs.readFile(filename, (err, data) => { //aynı dizindeki html sayfasını okumak üzere açıyoruz.
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });//dönüşü html sayfasında yapacağız.
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });//dönüşü html sayfasında yapacağız.
        res.write(data);//default.html içerisinde yer alan datayı yani yazıları yeni bir html olarak döndüreceğimiz sayfada yazdırıyoruz.
        return res.end(); //bitir.
    });
}).listen(8080); //dönüşü 8080 portunda aç. örn => http://localhost:7000