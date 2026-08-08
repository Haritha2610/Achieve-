const restaurants = [     
    {
        id: 1,         
        name: "Empire Restaurant",        
        city: "Bangalore",         
        cuisine: ["North Indian", "Chinese"],         
        rating: 4.3,         
        deliveryTime: 32,         
        averageCost: 650,         
        isPureVeg: false,         
        isOpen: true,         
        discount: 20     
    },      
    {         
        id: 2,         
        name: "Meghana Foods",         
        city: "Bangalore",         
        cuisine: ["Biryani", "South Indian"],         
        rating: 4.7,         
        deliveryTime: 28,         
        averageCost: 750,         
        isPureVeg: false,         
        isOpen: true,         
        discount: 15     
    },
    {         
        id: 3,         
        name: "Udupi Grand",         
        city: "Mysore",         
        cuisine: ["South Indian"],         
        rating: 4.5,         
        deliveryTime: 22,         
        averageCost: 300,        
        isPureVeg: true,         
        isOpen: false,         
        discount: 10     
    },      
    {         
        id: 4,         
        name: "Burger House",         
        city: "Bangalore",         
        cuisine: ["Fast Food"],         
        rating: 4.1,         
        deliveryTime: 18,         
        averageCost: 450,         
        isPureVeg: false,         
        isOpen: true,         
        discount: 30     
    },      
    {         
        id: 5,         
        name: "Pizza Corner",         
        city: "Hyderabad",         
        cuisine: ["Italian"],         
        rating: 4.6,         
        deliveryTime: 35,        
        averageCost: 900,         
        isPureVeg: true,         
        isOpen: true,         
        discount: 25     
    },      
    {         
        id: 6,        
        name: "Brahmins Coffee Bar",         
        city: "Bangalore",         
        cuisine: ["South Indian"], 
        rating: 4.8,         
        deliveryTime: 15,         
        averageCost: 200,         
        isPureVeg: true,         
        isOpen: true,         
        discount: 5     
    },      
    {         
        id: 7,        
        name: "KFC",         
        city: "Chennai",         
        cuisine: ["Fast Food"],         
        rating: 4.2,         
        deliveryTime: 30,         
        averageCost: 550,         
        isPureVeg: false,         
        isOpen: false,         
        discount: 18     
    },      
    {         
        id: 8,         
        name: "Domino's",         
        city: "Bangalore",         
        cuisine: ["Pizza"],         
        rating: 4.0,         
        deliveryTime: 25,         
        averageCost: 600,         
        isPureVeg: false,         
        isOpen: true,         
        discount: 40     
    },      
    {         
        id: 9,         
        name: "A2B",         
        city: "Chennai",         
        cuisine: ["South Indian"],         
        rating: 4.4,         
        deliveryTime: 20,         
        averageCost: 350,         
        isPureVeg: true,         
        isOpen: true, 
        discount: 12 
    }, 
    { 
        id: 10, 
        name: "Barbeque Nation", 
        city: "Hyderabad", 
        cuisine: ["BBQ", "North Indian"], 
        rating: 4.9, 
        deliveryTime: 45, 
        averageCost: 1800, 
        isPureVeg: false, 
        isOpen: true, 
        discount: 35 
    } 
]; 

// Task 1: Print all restaurants located in Bangalore.
const bangaloreRestaurants = restaurants.filter(restaurant => restaurant.city === "Bangalore");
console.log(bangaloreRestaurants); 

// Task 2: Print only Pure Veg restaurants
const vegRestaurants = restaurants.filter(restaurant => restaurant.isPureVeg);
console.log(vegRestaurants);

// Task 3: Print restaurants with delivery time less than 25 minutes. 
const quickDeliveryRestaurants = restaurants.filter(restaurant => restaurant.deliveryTime < 25);
console.log(quickDeliveryRestaurants); 

//Task 4: Print restaurants whose average cost is less than ₹500. 
const averageCostRestaurants = restaurants.filter(restaurant => restaurant.averageCost <= 500)
console.log(averageCostRestaurants); 

//Task 5: Count Pure Veg restaurants.
const pureVegCount = restaurants.filter(restaurant => restaurant.isPureVeg).length;
console.log(pureVegCount);


// Print restaurants offering more than 20% discount.
const discountRestaurants = restaurants.filter(restaurant => restaurant.discount > 20);
console.log(discountRestaurants);

// Task 7: Find the most expensive restaurant.
const mostExpensiveRestaurant = restaurants.reduce((maxRestaurant, restaurant) => {
    return restaurant.averageCost > maxRestaurant.averageCost ? restaurant : maxRestaurant;
});
console.log(mostExpensiveRestaurant); 

// Task 8 Find the cheapest restaurant.
const cheapestRestaurant = restaurants.reduce((minRestaurant, restaurant) => {
    return restaurant.averageCost < minRestaurant.averageCost ? restaurant : minRestaurant;
}, restaurants[0]);
console.log(cheapestRestaurant);

// Task 9: Sort restaurants by rating (High → Low). 
const ratingHighToLowRestaurants = restaurants.sort((a,b) => b.rating - a.rating );
console.log(ratingHighToLowRestaurants);

// Task 10: Sort restaurants by average cost
const averageCostRestaurants = restaurants.sort((a,b) => a.averageCost-b.averageCost);
console.log(averageCostRestaurants);

// Task 11: Sort restaurants by delivery time. 
const deliveryTimeRestaurants = restaurants.sort((a,b) => a.deliveryTime - b.deliveryTime);
console.log(deliveryTimeRestaurants);

// Task 12: Find all restaurants serving South Indian cuisine
const southIndianRestaurants = restaurants.filter(restaurant => restaurant.cuisine.includes("South Indian"));
console.log(southIndianRestaurants);

// Task 13 Find restaurants serving more than one cuisine. 
const multipleCuisine = restaurants.filter(restaurant => restaurant.cuisine).length>1;
console.log(multipleCuisine);

// Task 14 Calculate the average rating of all restaurants. 
const totalRating = restaurants.reduce(
  (sum, restaurant) => sum + restaurant.rating,
  0
);
const averageRating = totalRating / restaurants.length;
console.log(averageRating);

// Task 15: Update a restaurant's rating.
const restaurantIdToUpdate = 1;
const updatedRating = 4.9;
const restaurantToUpdate = restaurants.find(restaurant => restaurant.id === restaurantIdToUpdate);
if (restaurantToUpdate) {
    restaurantToUpdate.rating = updatedRating;
    console.log("Updated restaurant:", restaurantToUpdate);
} else {
    console.log("Restaurant not found");
} 

// Task 16: Increase every restaurant discount by 5%.
restaurants.forEach(restaurant => {
    restaurant.discount += 5;
});
console.log(restaurants);


// Task 17 Find all open restaurants with a rating above 4.5.
const openHighRatedRestaurants = restaurants.filter(
    restaurant => restaurant.isOpen && restaurant.rating > 4.5
);
console.log(openHighRatedRestaurants); 

// Task 18 Group restaurants by city. Expected output: {     Bangalore: [...],     Mysore: [...],     Hyderabad: [...],     Chennai: [...] } 
const groupedByCity = restaurants.reduce((groups, restaurant) => {
  if (!groups[restaurant.city]) {
    groups[restaurant.city] = [];
  }
  groups[restaurant.city].push(restaurant);
  return groups;

}, {});

console.log(groupedByCity);


// Task 19 Find the Top 5 highest-rated restaurants.
const top5Restaurants = restaurants
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5);
console.log(top5Restaurants);


// Task 20 Find restaurants that are: Open  Rating above 4.5   Delivery time less than 30 minutes
const openHighRatedQuickDeliveryRestaurants = restaurants.filter(
  restaurant => restaurant.isOpen && restaurant.rating > 4.5 && restaurant.deliveryTime < 30
);
console.log(openHighRatedQuickDeliveryRestaurants);  





