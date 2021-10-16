const indexController = {};

indexController.renderIndex = (req, res) => {
   res.render("index");
};

indexController.renderAbout = (req, res) => {
   const pgAbout = "about";
   res.render("about", { pgAbout });
};

module.exports = indexController;
