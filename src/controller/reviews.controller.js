const fs = require("fs");
const reviewsController = {};

const jsonStores = fs.readFileSync("src/stores.json", "utf-8");
let storeList = JSON.parse(jsonStores);

reviewsController.showStores = (req, res) => {
   const pgName = "store";
   res.render("reviews/storeList", { storeList, pgName });
};

reviewsController.storeDetail = (req, res) => {
   let store = storeList.find((item) => item.id == req.params.id);
   const pgName = "store";
   res.render("reviews/storeDetail", { store, pgName });
};

module.exports = reviewsController;
