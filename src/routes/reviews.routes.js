const { Router } = require("express");
const router = Router();
const {
   showStores,
   storeDetail,
   addReview,
} = require("../controller/reviews.controller");

router.get("/", showStores);
router.get("/:id", storeDetail);
router.get("/:id/agregar", addReview);

module.exports = router;
