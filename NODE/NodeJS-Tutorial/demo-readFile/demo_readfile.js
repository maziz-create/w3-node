var http = require('http'); //web server açabilmek için import ediyoruz.
var fs = require('fs'); //fileSystem
http.createServer((req, res) => { // 8080 portunda bilgisayarımızı web server olarak açtık.
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });  //client'a cevabı html göndereceğiz.
        res.write(data); //demofile1.html dosya içeriğindeki datayı gönderiyoruz client'a
        return res.end(); //bitir.
    });
}).listen(8080); //bilgisayarımıza ancak 8080 portunda bağlanırsa cevabımıza ulaşabilir.