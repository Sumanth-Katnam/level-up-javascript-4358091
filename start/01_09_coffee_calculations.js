// Write your code here
const calculateTotal = (coffees) => {
  const total = coffees.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0)
  console.log(`The total is $${total * 1.25}.`);
}

calculateTotal([2,3,1,5]) // 13.75