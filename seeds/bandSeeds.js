const sequelize = require('../config/connection');
const Band = require('../models/Bands');

const bandSeedData = require('./bandSeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await Band.bulkCreate(bandSeedData);


  process.exit(0);
};

seedDatabase();
