//dönecek kayıt sayısını sınırlamak istiyoruz...

const MongoClient = require('mongodb').MongoClient; //mongodb import
const url = "mongodb://localhost:27017/"; //db adresimiz

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb"); //önceden ürettiğimiz db'i açtık.
    //5 kayıt dönecek.
    dbo.collection("customers").find().limit(5).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});