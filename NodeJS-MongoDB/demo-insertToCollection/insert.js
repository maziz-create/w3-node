//buranın kodu çalışmayacak çünkü mongodb modülü yok. Yer kaplamaması için indirmedim.
const MongoClient = require('mongodb').MongoClient; //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/"; //mongodb adresimiz
//insertOne methodu kayıt ekliyor.(record = data) 
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb"); //DB ürettik.
    const myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, (err, res) => { //customers collection'a kaydı ekliyoruz.
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

// Not: kaydı eklemek istediğin collectşon yoksa eğer mongoDB otomatik olarak üretiyor.


//------

//birden fazla kayıt eklemek için:
//insertMany kullanacağız.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb"); //DB ürettik.
    const myobj = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean blvd 2' },
        { name: 'Betty', address: 'Green Grass 1' },
        { name: 'Richard', address: 'Sky st 331' },
        { name: 'Susan', address: 'One way 98' },
        { name: 'Vicky', address: 'Yellow Garden 2' },
        { name: 'Ben', address: 'Park Lane 38' },
        { name: 'William', address: 'Central st 954' },
        { name: 'Chuck', address: 'Main Road 989' },
        { name: 'Viola', address: 'Sideway 1633' }
    ];
    dbo.collection("customers").insertMany(myobj, (err, res) => {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});


//------

/*
 MongoDB'ye çoklu kayıt eklediğinde bi result objesi döner.
 Bu obje eklenen kayıtların veritabanını nasıl etkilediği hakkında bilgi verir.
*/

// Örnek result objesi =>

// {
//     result: { ok: 1, n: 14 },
//     ops: [
//         { name: 'John', address: 'Highway 71', _id: 58fdbf5c0ef8a50b4cdd9a84 },
//         { name: 'Peter', address: 'Lowstreet 4', _id: 58fdbf5c0ef8a50b4cdd9a85 },
//         { name: 'Amy', address: 'Apple st 652', _id: 58fdbf5c0ef8a50b4cdd9a86 },
//         { name: 'Hannah', address: 'Mountain 21', _id: 58fdbf5c0ef8a50b4cdd9a87 },
//         { name: 'Michael', address: 'Valley 345', _id: 58fdbf5c0ef8a50b4cdd9a88 },
//         { name: 'Sandy', address: 'Ocean blvd 2', _id: 58fdbf5c0ef8a50b4cdd9a89 },
//         { name: 'Betty', address: 'Green Grass 1', _id: 58fdbf5c0ef8a50b4cdd9a8a },
//         { name: 'Richard', address: 'Sky st 331', _id: 58fdbf5c0ef8a50b4cdd9a8b },
//         { name: 'Susan', address: 'One way 98', _id: 58fdbf5c0ef8a50b4cdd9a8c },
//         { name: 'Vicky', address: 'Yellow Garden 2', _id: 58fdbf5c0ef8a50b4cdd9a8d },
//         { name: 'Ben', address: 'Park Lane 38', _id: 58fdbf5c0ef8a50b4cdd9a8e },
//         { name: 'William', address: 'Central st 954', _id: 58fdbf5c0ef8a50b4cdd9a8f },
//         { name: 'Chuck', address: 'Main Road 989', _id: 58fdbf5c0ef8a50b4cdd9a90 },
//         { name: 'Viola', address: 'Sideway 1633', _id: 58fdbf5c0ef8a50b4cdd9a91 }],
//         insertedCount: 14,
//             insertedIds: [
//                 58fdbf5c0ef8a50b4cdd9a84,
//                 58fdbf5c0ef8a50b4cdd9a85,
//                 58fdbf5c0ef8a50b4cdd9a86,
//                 58fdbf5c0ef8a50b4cdd9a87,
//                 58fdbf5c0ef8a50b4cdd9a88,
//                 58fdbf5c0ef8a50b4cdd9a89,
//                 58fdbf5c0ef8a50b4cdd9a8a,
//                 58fdbf5c0ef8a50b4cdd9a8b,
//                 58fdbf5c0ef8a50b4cdd9a8c,
//                 58fdbf5c0ef8a50b4cdd9a8d,
//                 58fdbf5c0ef8a50b4cdd9a8e,
//                 58fdbf5c0ef8a50b4cdd9a8f
//       58fdbf5c0ef8a50b4cdd9a90,
//                 58fdbf5c0ef8a50b4cdd9a91]
// }


// not: Eğer sen bir _id belirlemezsen MongoDB senin için unique bir _id belirler.
// Örnek olarak eklediğimiz çoklu kayıtlarda _id alanı yoktu.

// Peki ya biz _id eklersek ? Eğer unique verirsek hiçbir sorun olmaz. 

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }
    ];
    dbo.collection("products").insertMany(myobj, (err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});


// çoklu kayıt eklediğimiz için dönen result objesi: 
// {
//     result: { ok: 1, n: 3 },
//     ops: [
//       { _id: 154, name: 'Chocolate Heaven },
//       { _id: 155, name: 'Tasty Lemon },
//       { _id: 156, name: 'Vanilla Dream } ],
//     insertedCount: 3,
//     insertedIds: [
//       154,
//       155,
//       156 ]
//   } görüldüğü üzere herhangi bir sorun yok.