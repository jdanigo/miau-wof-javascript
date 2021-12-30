// Import stylesheets
// 1.- Dado el sgte codigo:
// Cual seria el output de cat.speak(), y como hariamos para que imprima "wof" (sin modificar el codigo del enunciado)

const talk = talky;

const cat = {
  speak: talk,
  sound: 'miau',
};

const dog = {
  speak: cat.speak,
  sound: 'wof',
};

function talky() {
  console.log(this.sound);
}
// respuesta:
cat.speak();
cat.speak.apply(dog)

