// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};


function printPizzaPlace() {
  for (const key in dominos) {
    // console.log(key, dominos)
  }
}

/* printPizzaPlace(); */
const toppingsPriceRange = (pizzaPlace) => {
  const prices = Object.values(pizzaPlace.pizzaToppings);
  if (prices.length === 0) {
    return [0, 0]; 
  }
  let minPrice = Math.min(...prices);
  let maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
};

// console.log(toppingsPriceRange(dominos));


function calculateAverageRating(pizzaPlace) {
  const reviews = Object.values(pizzaPlace.starReviews);
  if (reviews.length === 0) {
    return `No reviews for ${pizzaPlace}`;
  }; 
  const totalStars = reviews.reduce((total, rating) => total + rating, 0);
  const averageStars = totalStars / reviews.length;
  
  return averageStars;
}

