var fs = require('fs'); // NodeJS'i fileSystem olarak kullanıyoruz.
var rs = fs.createReadStream('./demofile.txt'); //eğer böyle bir dosya aynı dizinde varsa rs.on çalışıyor!
rs.on('open', () => { //open eventi üretiliyor.
    console.log('The file is open'); //öyle bir dosya varsa event gerçekleşecek ve konsola yazılacak.
});