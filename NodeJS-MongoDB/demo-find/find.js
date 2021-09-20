// MySQL ' deki SELECT'in aynısı.

//findOne kullanıyoruz.
const MongoClient = require('mongodb').MongoClient;  //npm ile indirilen mongodb import işlemi
const url = "mongodb://localhost:27017/"; //mongodb adresimiz

MongoClient.connect(url, (err, db) => { //DB'e bağlanacağız. hangisine olduğunu aşağıda belirtiyoruz.
    if (err) throw err;
    const dbo = db.db("mydb"); //mydb'i açıyoruz.
    //findOne'in ilk parametresi bir sorgu objesi. Eğer boş olursa ilk kaydı dönüyor ama tüm kaydı seçiyor.
    dbo.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result.name); //ilk kaydı döndü => Company Inc.
        db.close();
    });
});



//----- 

//Tüm kayıtları nasıl seçeceğiz ? MySQL ' Deki SELECT * ' in karşılığı => find() methodudur.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    // find'ın ardından boş obje vererek customers collectiondaki tüm kayıtları döndürmesi gerektiğini söylüyoruz.
    dbo.collection("customers").find({}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//dönen result objesi => 

//customers'e önceden eklediğimiz kayıtlar.
// [    
//     { _id: 58fdbf5c0ef8a50b4cdd9a84 , name: 'John', address: 'Highway 71'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a85 , name: 'Peter', address: 'Lowstreet 4'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a86 , name: 'Amy', address: 'Apple st 652'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a87 , name: 'Hannah', address: 'Mountain 21'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a88 , name: 'Michael', address: 'Valley 345'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a89 , name: 'Sandy', address: 'Ocean blvd 2'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8a , name: 'Betty', address: 'Green Grass 1'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8b , name: 'Richard', address: 'Sky st 331'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8c , name: 'Susan', address: 'One way 98'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8d , name: 'Vicky', address: 'Yellow Garden 2'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8e , name: 'Ben', address: 'Park Lane 38'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a8f , name: 'William', address: 'Central st 954'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a90 , name: 'Chuck', address: 'Main Road 989'},
//     { _id: 58fdbf5c0ef8a50b4cdd9a91 , name: 'Viola', address: 'Sideway 1633'}
//   ]


//----


//peki ya istediğimiz kayıtlar olsun, istemediğimiz kayıtlar olmasın istersek ?

//find() methodunun ikinci parametresi olan projection objesi buna olanak sağlıyor. 
//sırasıyla istediğimiz alanlara 1, istemediğimiz alanlara 0 değerini value olarak geçiyoruz.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    //id ' yi istemiyoruz. name ve address istiyoruz.
    //_id haricinde, aynı anda 0 ile 1 kullanılmaz.  dikakt et.
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//dönen result objesi:

// [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ]



//-----


//aynı anda _id haricinde 0 ile 1 kullanamayız projection objesinde.

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

//hata verecek çünkü _id haricinde 1 ile 0 aynı anda yer alıyor.

//-----

// üstteki resultlarda görüldüğü gibi bazen result objesi array olarak gelebiliyor.

//klasik array kuralı gereği result[0].address gibi bir şeyi de alabiliriz sonuç olarak.