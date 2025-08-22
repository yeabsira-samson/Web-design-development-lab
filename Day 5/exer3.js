//array 1
let books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
books.splice(1, 1, "NewBook");
books.push("LastBook");
books.forEach((book, index) => {
  console.log(`${index + 1}: ${book}`);
});

//array 2
var number=[2,4,6,8,10];
var x= number.slice(2);
var pr=1;
for(let i=0;i<x.length;i++){
     pr*=x[i];
}
console.log(pr);
