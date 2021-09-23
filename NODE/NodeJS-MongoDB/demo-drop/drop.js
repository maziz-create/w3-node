//bir collection'u yani table'ı silmek istiyoruz.

const MongoClient = require('mongodb').MongoClient; //mongodb import
const url = "mongodb://localhost:27017/"; //db adresimiz

MongoClient.connect(url, (err, db) => { //mongodb server başlatıldı
    if (err) throw err;
    const dbo = db.db("mydb"); //önceden ürettiğimiz mydb'i açtık.
    dbo.collection("customers").drop((err, delOK) => { //customers collectionumuzu siliyoruz.
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});