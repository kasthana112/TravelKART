const router = require('express').Router();
const { Location } = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/results', async (req, res) => {
    try {
        const newResult = await Location.findAll({
          ...req.body,
          user_id: req.session.user.id,  
        });
        console.log(req.body);
        console.log(newResult);
        res.status(200).json(newResult);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;