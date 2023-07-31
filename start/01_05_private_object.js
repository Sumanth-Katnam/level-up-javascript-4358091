// Write your code here
const userName = Symbol("userName");
const password = Symbol("password");


const jack = {
  userName: "Jack",
  password: "jackIsBest",
  age: 25
}

const secretJack = {
  [userName]: "Jack",
  [password]: "jackIsBest",
  age: 25
}


console.log(`${jack.userName} ${jack.password}`);
console.log(`${secretJack.userName} ${secretJack.password}`);