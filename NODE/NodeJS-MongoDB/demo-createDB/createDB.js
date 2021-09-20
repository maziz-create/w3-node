const MongoClient = require('mongodb').MongoClient; //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/mydb"; //mongodb adresimiz

MongoClient.connect(url, (err, db) => { //DB'i açtık.
    if (err) throw err; //hata varsa fırlat.
    console.log("Database created!");
    db.close(); //kapat.
});

// not: MONGODB içerisinde içerik bulunmayan bir database'i ürettirmiyor.