const router = require('express').Router();
const band = require('../../models/Bands');

router.get('/', async (req, res) => {
  const bandData = await band.findAll();

  return res.json(bandData);
})

router.post('/search', async (req, res) => {
const bandData = await band.findAll();
// let bandData=  {
//     "cityName" : "Los Angeles"
// }
console.log("Searching for: " +req.body.cityName);
const result = bandData.filter((word) => word.city == req.body.cityName);
  return res.json(result);
})

router.post('/', async (req, res) => {
  const bookData = await band.create(req.body);

  return res.json(bandData);
});

// Updates book based on its band_id
router.put('/', async (req, res) => {
  //Calls the update method on the Book model
  const updatedBand = await band.update(
    {
      // All the fields you can update and the data attached to the request body.
      band: req.body.band,
      city: req.body.city,
      genre: req.body.genre,
    },
    {
      // Gets a band based on the band_id given in the request parameters
      where: {
        band_id: req.params.band_id,
      },
    }
  );
  
  res.json(updatedBand);
});


module.exports = router;
