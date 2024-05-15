//x
let x = 5;
console.log(x);

x++;
console.log(x);

//y
let y; // Initialize y here

console.log("original value of y:", y); // Now, y is initialized and can be accessed

--y;
console.log("After decrementing y:", y);

//socre
let score = 0;
let newscore = score++;
console.log(newscore);
console.log(score);

//current inventory
let currentInventory = 100;

console.log("Processing new book. Current inventory is " + currentInventory++);
console.log(currentInventory);
console.log("Processing new book. Current inventory is " + currentInventory++);
console.log(currentInventory);

//countdown
console.log('countdown:');

for (let number = 5; number > 0; --number) {
    console.log(number);
}
console.log('blasttoff');

//amout of books
let amountOfBooks = 5;
let newBookArrived = 10;

console.log("Amount of books:", amountOfBooks);
