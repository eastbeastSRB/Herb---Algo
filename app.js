// Some Inputs
let plants = [2, 7, 5, 3];
let totalLeaves;
let days = 3;
let changeDay = 0;

// Func herbGarden
function herbGarden(plants, days) {
  let maxLeaves;
  let devidedLeaves;
  let addValueToIndex;
  let indexPlants;
  let sumOfLeaves = 0;
  let sumOfPlants = 0;

  // Check num of plants and days from input
  if (plants.length >= 1 && plants.length <= 10 && days > 1 && days < 100) {
 
      // Loop through the days
      while(changeDay < days){
      
      // Method Day

      // Select a plant with max leaves
      maxLeaves = Math.max(...plants);
      // Devided leaves
      devidedLeaves = Math.floor(maxLeaves / 2);
      // Select index with max value
      indexPlants = plants.indexOf(maxLeaves);
      // New item in array - swap with max leaves
      plants[indexPlants] = maxLeaves - devidedLeaves;
      // Sum of leaves
      sumOfLeaves += devidedLeaves

      // Method Night

      // Create new array with new values
      addValueToIndex = plants.map(num => num + 2);
      // Change current plants with added number
      plants = addValueToIndex;
      
      // Counter for days
      changeDay++
      // totalLeaves at the end
      totalLeaves = sumOfLeaves;
      }
    console.log(`Total leaves after ${days} days are: ${totalLeaves}`);

  } else {
    console.log('Parameters arent good');
  }
}

herbGarden(plants, days);