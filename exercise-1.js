/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const filipis = {
   name: 'Filipis',
   cuisines: ['Italian'],
   numberOfStars: 5,
   favorited: true,
};

filipis.address = 'Temecula, Ca';
filipis.zipcode = 92584;
filipis.acceptsReservations = false;

filipis.numberOfStars = 6;
filipis.favorited = false;
filipis.cuisines.push('American');

function retrieveProperty(obj, key) {
   if (key in obj){
      return obj[key];
   }
   return "No such key exist";
};

console.log(retrieveProperty(filipis, 'cuisines'));
console.log(retrieveProperty(filipis, 'favorited'));
console.log(retrieveProperty(filipis, 'name'));
console.log(retrieveProperty(filipis, 'nickname'));
console.log(retrieveProperty(filipis, 'state'));
