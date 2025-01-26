let rating = 4.5; // This could be captured from user inputs or API
let tokenAmount;

if (rating > 4) {
  tokenAmount = 100;  // High reward
} else if (rating > 3) {
  tokenAmount = 50;   // Medium reward
} else {
  tokenAmount = 10;   // Low reward
}

rewardDriver(driverAddress, tokenAmount);