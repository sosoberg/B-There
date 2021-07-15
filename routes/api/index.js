const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require("./postRoutes");
const eventRoutes = require("./eventRoutes");

router.use('/users', userRoutes);
router.use("/posts", postRoutes);
router.use("/events", eventRoutes);

module.exports = router;