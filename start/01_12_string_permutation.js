// Write your code here
const numPerms = (str) => {
  if(str.length == 1){
    return 1;
  }
  return str.length * numPerms(str.slice(1));
}

console.log(numPerms("four")) //24