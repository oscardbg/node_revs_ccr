const { Router } = require("express");
const router = Router();
const { showStores, storeDetail } = require("../controller/reviews.controller");

router.get("/tiendas", showStores);
router.get("/tiendas/:id", storeDetail);

module.exports = router;
