// Variables for the number of people, the capacity per van, and the cost per van
const numPeople = 38;
const capacityPerVan = 15;
const costPerVan = 250;
 
// Calculate the number of vans needed by dividing the number of people by the capacity
// per van and then rounding up to ensure we have enough seats for everyone.
const vansNeeded = Math.ceil(numPeople / capacityPerVan);
 
// Calculate the total cost for renting the vans by multiplying the number of vans
// by the cost per van.
const totalCost = vansNeeded * costPerVan;
 
// Calculate the cost per person by dividing the total cost by the number of people.
const costPerPerson = totalCost / numPeople;
 
// Print out the results
console.log(`Number of people: ${numPeople}`);
console.log(`Vans needed: ${vansNeeded}`);
console.log(`Total cost for vans: $${totalCost}`);
console.log(`Cost per person: $${costPerPerson.toFixed(2)}`);
 
// Hand calculation validation
const collectedAmount = costPerPerson * numPeople;
console.log(`Collected amount: $${collectedAmount}`);
console.log(`Vans were: $${vansNeeded * costPerVan}`);
console.log(`Leftover money (if any): $${collectedAmount - (vansNeeded * costPerVan)}`);