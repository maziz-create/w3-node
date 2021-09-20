// not: MongoDB ' deki collection SQL'deki table gibi. Alan açıyoruz yani, Cars gibi.
//buranın kodu çalışmayacak çünkü mongodb modülü yok. Yer kaplamaması için indirmedim.
//MongoDB'de içeriği olmayan bir collection üretilemez.

const MongoClient = require('mongodb').MongoClient;  //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/";   //mongodb adresimiz

MongoClient.connect(url, (err, db) => { //DB'e bağlanacağız.
    if (err) throw err;
    const dbo = db.db("mydb"); //DB'yi açtık.
    dbo.createCollection("customers", (err, res) => {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});