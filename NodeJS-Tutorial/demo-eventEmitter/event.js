const events = require('events'); //import ettik.
const eventEmitter = new events.EventEmitter();

// Event yakalayıcısı (eventHandler) oluşturuyoruz.
const myEventHandler = () => {
    console.log('I hear a scream!');
}

// Event yakalayıcıyı bir eventi yakalamak üzere seçiyoruz. eventEmitter arık scream eventini yakalayacak.
eventEmitter.on('scream', myEventHandler);

// Scream eventi yayılıyor, emit ediliyor, ateşleniyor(fire ediliyor.).
eventEmitter.emit('scream');