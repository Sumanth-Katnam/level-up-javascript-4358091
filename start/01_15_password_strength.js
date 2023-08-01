// Write your code here
const validatePassword = (passwd) => {
  const validator = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/g;
  const isValid = validator.test(passwd);
  return isValid ? "Valid" : "Invalid";
}

console.log(validatePassword("kasjhdk"));
console.log(validatePassword("kasAhd9!"));