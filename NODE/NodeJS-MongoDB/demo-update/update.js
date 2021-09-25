// bir record'u bulup içindeki bazı fieldlar güncellenecek.
const MongoClient = require('mongodb').MongoClient; //mongodb import
const url = "mongodb://127.0.0.1:27017/"; //db adresimiz

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myquery = { address: "Valley 345" }; //adresi Valley 345 olan kaydı ya da kayıtları bul.
    //Birden fazla böyle kayıt bulursa ilkini değiştirir.
    const newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});

//-----

//birden fazla kayıtta update => 

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myquery = { address: /^S/ }; //adresi S ile başlayan kayıtlar..
    const newvalues = { $set: { name: "Minnie" } }; //hepsinin name kısmını değiştir.
    dbo.collection("customers").updateMany(myquery, newvalues, (err, res) => {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});

//-----

//Mongoose ile belli bir id'e sahip kaydı bulmasını ve gönderilen HTTP isteği içerisinde yer alan field'ların güncellenmesini istiyorsak:

server.put('/customers/:id', async (req, res, next) => {
//...
    const customer = await Customer.findOneAndUpdate(
        { _id: req.params.id }, //ilk parametre: recordların hangi field ile aranacağı.
        req.body, //ikinci parametre: değiştirilecek her ne varsa.. tabi field isimleri uyuşmalı.
        );
//...
    });


// updateOne() ve updateMany() kullanıldığı zaman result objesi dönüyor. 
// içinde nModified alanı var, kaç adet kaydın update edildiğini gösteriyor.
