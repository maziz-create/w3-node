var fs = require('fs'); //NodeJS'i File System olarak kullanıyoruz.

// Bir dosyaya bir şeyler eklemek için appendFile kullanıyoruz.
fs.appendFile('mynewfile1.txt', 'This is my text 2.', (err) => {
    if (err) throw err;
    console.log('Updated!');
});