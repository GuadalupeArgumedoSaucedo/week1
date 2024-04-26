let friendInvited = 4;
let costPerPerson = 15;
let discount = .10;
let totalCost = friendInvited*costPerPerson;


if(friendInvited < 5) {
    console.log(`The total cost for an epic Avengers movie night with ${friendInvited} friends is $${totalCost}`);
} 
else if(friendInvited >= 5) {
totalcost = (costPerPerson*discount) + costPerPerson;
    console.log(`Yay we have more than 5 friends coming we get a discount of 10%. It will now be $${totalcost} per person`);
}