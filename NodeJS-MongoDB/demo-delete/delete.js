const MongoClient = require('mongodb').MongoClient; //mongodb import
const url = "mongodb://localhost:27017/"; //db adresimiz

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb"); //önceden ürettiğimiz db'ye bağlanmak için.
    const myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, (err, obj) => { //customers collectiondan sildik.
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});

//-------

//regex ile birden fazla veri silmek mümkün.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    // adresi 0 ile başlayan kayıtlar silinecek.
    const myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, (err, obj) => {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});

//deleteMany'de result objesi dönüyor. bu objenin 'n' ve 'ok' propları mevcut
// n => silinen kayıt sayısını veriyor. kullanılabilir.
//console.log(obj.result.n)

