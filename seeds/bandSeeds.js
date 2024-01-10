const sequelize = require('../config/connection');
//models
const Band = require('../models/Bands');
const BandUsers = require('../models/BandUsers');
const User = require('../models/Users');
//seed dataconst User = require('../models/Users');
const Post = require('../models/Posts');

const bandSeedData = require('./bandSeedData.json');
const bandUserData = require('./bandUserData.json');
const postSeedData = require('./postSeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  

  await User.bulkCreate(bandUserData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postSeedData);

  await Band.bulkCreate(bandSeedData);

  process.exit(0);
};

seedDatabase();
