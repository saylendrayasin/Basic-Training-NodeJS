// const { EventEmitter } = require("events");

// const myEmitter = new EventEmitter();

// const birthdayEventListener = ({ name }) => {
//   console.log(`Happy birthday ${name}!`);
// };

// myEmitter.on("birthday", birthdayEventListener);

// myEmitter.emit("birthday", { name: "Saylendra" });

const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

const Hola = () => {
  console.log("Hola");
};

const Intro = (nama) => {
  console.log(`Nama saya ${nama}`);
};

const Age = (umur) => {
  console.log(`Saya berusia ${umur} tahun`);
};

const Handler = (name, age) => {
  Hola();
  Intro(name);
  Age(age);
};

myEmitter.on("Greetings", Handler);

myEmitter.emit("Greetings", "Saylendra", "20");
