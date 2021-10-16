const { Router } = require("express");
const router = Router();
const { renderIndex, renderAbout } = require("../controller/index.controller");

router.get("/", renderIndex);
router.get("/acerca", renderAbout);

module.exports = router;
