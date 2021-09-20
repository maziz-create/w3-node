const MongoClient = require('mongodb').MongoClient;  //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/"; //mongodb adresimiz

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb"); //önceden kurulmuş olan db açıldı.
    const query = { address: "Park Lane 38" };
    // find() ' ın ilk parametresi query olur. boş olursa tüm elemanları döndürür.
    dbo.collection("customers").find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//-------

//peki regex ile nasıl yapacağız?

//not: regex ile yalnızca string resultlar için sorgu yazılabilir.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    //S harfiyle başlayan adresleri getirir.
    const query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// result:
// [
//     { _id: 58fdbf5c0ef8a50b4cdd9a8b, name: 'Richard', address: 'Sky st 331' },
//     { _id: 58fdbf5c0ef8a50b4cdd9a91, name: 'Viola', address: 'Sideway 1633' }
// ]