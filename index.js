// Code your solution in this file!
// index.js

// HQ is always on 42nd street
const hqStreet = 42;

// 1. Returns distance from HQ in blocks
function distanceFromHqInBlocks(street) {
  return Math.abs(street - hqStreet);
}

// 2. Returns distance from HQ in feet
function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264; // 1 block = 264 feet
}

// 3. Returns distance travelled between two streets in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // free under 400ft
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat rate
  } else {
    return 'cannot travel that far'; // above 2500ft
  }
}

// Export functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
