const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router
  .route("/")
  .get(eventController.findAll)
  .post(eventController.create);

router
  .route("/:id")
  .get(eventController.findById)
  .put(eventController.update)
  .delete(eventController.remove);

router
  .route("/check/:postdate")
  .get(eventController.findByDate)
  
router.route("/photos/:userid")
  .get(eventController.findByUserId)

module.exports = router;