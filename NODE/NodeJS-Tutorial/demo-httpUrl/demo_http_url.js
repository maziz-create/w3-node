var http = require('http'); //web server açabilmek için import ediyoruz.
http.createServer((req, res) => { // 8080 portunda bilgisayarımızı web server olarak açtık.
    res.writeHead(200, { 'Content-Type': 'text/html' }); //client'a cevabı html göndereceğiz.
    res.write(req.url); // client hangi url ile bağlandıysa onu yazdıracağız. örn: localhost:7000/xyz => xyz
    res.end();  //bitir
}).listen(8080); //bilgisayarımıza ancak 8080 portunda bağlanırsa cevabımıza ulaşabilir.