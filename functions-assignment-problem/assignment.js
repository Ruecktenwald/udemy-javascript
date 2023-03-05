function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

const sayHello = name => console.log('Hi ' + name);

sayHello('Peter');






const sayHello = (greet, name = 'Friend') => console.log(greet + ' ' + name);

sayHello('Hi');

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}