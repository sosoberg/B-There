const router = require('express').Router();
const { image } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const imageData = await image.findAll();
        res.status(200).json(imageData);
      } catch (err) {
        res.status(400).json(err);
      }
});
  
router.get('/:id', async(req, res) => {
    try {
        const imageData = await image.findByPk(req.params.id);
    
        if (!imageData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
        res.status(200).json(imageData);
      } catch (err) {
        res.status(500).json(err);
      }
});
  
module.exports = router;