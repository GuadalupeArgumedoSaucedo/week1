let age = 20;

if (age > 18){
    console.log('You are old enough to watch The Avengers');
}
else if (age < 8){
    console.log('You should watch a diffrent movie');
}
else{
    console.log('There are many other movies to watch');
}


// List of Avengers
let avengers = ['Iron Man', 'Thor', 'Hulk', 'Captain America']; // Array

// Check if Hulk is part of the team
if (avengers.includes('Hulk')) {
    console.log("The Hulk is in! Expect some smashing action!");
} else {
    console.log("It seems the Hulk is out. Hope the rest can handle it!");
}
// Define the movie title
let movieTitle = 'The Avengers';

// Check if the movie is 'The Avengers'
if (movieTitle === 'The Avengers') {
    console.log("Prepare for an epic assembly of heroes and action with 'The Avengers'!");
} else {
    console.log("Not watching 'The Avengers'? Hopefully, your choice is still super!");
}

//day of week
let dayOfWeek = 'Friday';

// Decide on movie night

if (dayOfWeek === 'Friday' || dayOfWeek === 'Saturday' ) {
    console.log("It's Friday! Perfect night for a Marvelous 'Avengers' movie marathon!");
} else {
    console.log("Why wait for Friday? Any night is good for 'The Avengers'!");
}

let weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
if (weekday.includes('Thursday')) {
    console.log("Get read for school");
} else {
    console.log("sleep in");
}