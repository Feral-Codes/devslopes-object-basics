/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 
function grabCategories (obj) {
    return Object.keys(obj)
}

// console.log(grabCategories(papaJohns));
// console.log(grabCategories(papaJohns.pizzaToppings));

function verifyValues (obj, totalCount) {
  return Object.values(obj).length === totalCount;
};

// console.log(verifyValues(papaJohns, 10));
// console.log(verifyValues(papaJohns, 9));

function getToppingsInfo (obj) {
  return Object.entries(obj.pizzaToppings);
};

// console.log(getToppingsInfo(papaJohns));

papaJohns.printAd =  function (topping) {
  const price = this.pizzaToppings[topping];
  if (price !== undefined) {
    console.log(
      `Welcome to Papa John's! We are located at ${this.address}. This week, we are having a sale on ${topping} for $${price}. ${this.slogan}`
    );
  } else {
    console.log(`Sorry, we don't have a sale on ${topping}.`);
  }
}

papaJohns.printAd("pepperoni"); 

