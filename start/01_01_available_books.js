// Write your code here
class Book {
  constructor(title, author, isbn, numCopies){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability(){
    return this.getAvailability();
  }

  getAvailability(){
    if(this.numCopies === 0){
      return "out of stock";
    } else if(this.numCopies < 10){
      return "low stock";
    }
    return "in stock";
  }

  sell(numSold = 1){
    this.numCopies = (this.numCopies < numSold)? 0: this.numCopies - numSold;
  }

  restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked
  }
}

const badBatch = new Book("Bad Batch", "Starwars", "98s7adjhis78a", 5);
console.log(badBatch.getAvailability());

badBatch.restock(10);
console.log(badBatch.getAvailability());

badBatch.sell(30);
console.log(badBatch.availability);