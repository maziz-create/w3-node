//MongoDB ilişkisel bir veritabanı değildir fakat bazı join işlemleri yapmak mümkün.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection('orders').aggregate([ //orders'i açacağız fakat içine bi join eklemek istiyoruz..
        {
            $lookup:
            {
                from: 'products',
                localField: 'product_id', //bizim product_id ile productstaki _id ' i eşleştir.
                foreignField: '_id',
                as: 'orderdetails'
                //orders'i klasik tanımlarken her bir kayda orderdetails objesi aç ve eşleşen product'u göster.
            }
        }
    ]).toArray((err, res) => {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

//result:

// [
//     {
//         "_id": 1, "product_id": 154, "status": 1, "orderdetails": [
//             { "_id": 154, "name": "Chocolate Heaven" }]
//     }
// ]