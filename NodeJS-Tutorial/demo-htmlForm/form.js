var http = require('http'); // web server açmak istiyoruz.

http.createServer((req, res) => { // NodeJS ile bilgisayarımızda web server açtık.
    res.writeHead(200, { 'Content-Type': 'text/html' }); //8080 portunda client'a html döneceğiz.

    //görüldüğü üzere tek tek yazıyoruz html içeriğini.
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');

    return res.end();
}).listen(8080); // client ancak 8080 portuyla bilgisayarımıza bağlanırsa yaptıklarımızı görür.