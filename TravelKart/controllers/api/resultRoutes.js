// const router = require('express').Router();
// const { Location } = require('../../models');
// //const withAuth = require('../../utils/auth');

// router.get('/results', async (req, res) => {
//     try {
//         const newResult = await Location.findAll({
//           ...req.body,
//           user_id: req.session.user.id,  
//         });
//         console.log(req.body);
//         console.log(newResult);
//         res.status(200).json(newResult);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


// module.exports = router;

const router = require('express').Router();
const { Result } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newResult = await Result.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ResultData = await Result.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!resultData) {
      res.status(404).json({ message: 'No result found with this id!' });
      return;
    }

    res.status(200).json(resultData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
