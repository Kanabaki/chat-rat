const User = require('..models/User.js');

const createUser = (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({
    username,
    password
  });

  newUser.save()
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json({ error: 'Could not create user', details: error });
    });
};

module.exports = {
  createUser
};
router.post('/login', async (req, res) => {
    try {
  
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password' });
        return;
      }
  
      const validPassword = userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.loggedIn = true;
  
        res.json({ user: userData, message: 'Login successful.' });
      });
  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });