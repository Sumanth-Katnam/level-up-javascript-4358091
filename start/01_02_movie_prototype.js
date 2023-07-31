// Write your code here
// class Movie{
//   constructor(title, director, genre, releaseYear, rating){
//     this.title = title ;
//     this.director = director ;
//     this.genre = genre ;
//     this.releaseYear = releaseYear ;
//     this.rating = rating;
//   }

//   getoverview(){
//     console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`);
//   }
// }


function Movie(title, director, genre, releaseYear, rating){
  this.title = title ;
  this.director = director ;
  this.genre = genre ;
  this.releaseYear = releaseYear ;
  this.rating = rating;
}

Movie.prototype.getoverview = function(){
  console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`);
}

const manmadhudu = new Movie("Manmadhudu", "K. Vijaya Bhaskar", "Rom-Com", 2002, 8.3);

manmadhudu.getoverview();