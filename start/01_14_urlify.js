// Write your code here
const urlify = (str) => {
  const punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  return str.toLowerCase().trim().replace(punctuation, "").replaceAll(" ", "-");
}

console.log(urlify("Some text with punctuations. Also spaces!!"));