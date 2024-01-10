const router = require('express').Router();
const { Users } = require('../../models');


router.get('/', async (req, res) => {
  const userData = await Users.findAll();

  return res.json(userData);
});

router.post('/login', async (req, res) => {
  try {
    
    const userData = await Users.findOne({ where: { email: req.body.email } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
  
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;