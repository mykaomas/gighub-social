const router = require('express').Router();
const band = require('../../models/Bands');

// Updates book based on its book_id
router.put('/:band_id', async (req, res) => {
  //Calls the update method on the Book model
  const updatedBand = await band.update(
    {
      // All the fields you can update and the data attached to the request body.
      band: req.body.band,
      city: req.body.city,
      genre: req.body.genre,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        band_id: req.params.band_id,
      },
    }
  );
  
  res.json(updatedBand);
});


module.exports = router;
