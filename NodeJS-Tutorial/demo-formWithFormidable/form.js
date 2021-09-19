var http = require('http'); //http serveri açabilmek için import ettik.
var formidable = require('formidable'); //gelen formla işlemler yapmak için modül.
var fs = require('fs'); //dosya sistemi lazım gelen formdaki dosya için.
//gelen dosya geçici bi klasörde tutulur. path'ını değiştireceğiz fileSystem ile.
http.createServer((req, res) => { //8080 portunda web server açtık.
    if (req.url == '/fileupload') { //formaction'u 'fileupload' olan bir form var. submit olabilirse gir.
        var form = new formidable.IncomingForm(); //gelen formu aldı fordable modülü.
        form.parse(req, (err, fields, files) => { //files prop'u temporary path'e gidiyor.
            var oldpath = files.filetoupload.path;
            var newpath = 'D:/masasustuus/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, (err) => { //temorary folder'dan istediğimiz yere çekiyoruz.
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else { //upload edilmediyse form ekranını göster.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);