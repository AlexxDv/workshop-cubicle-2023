const router = require("express").Router();
const cubeController = require("./controllers/cubeController");
const homeController = require("./controllers/homeController");
const accessoryControler = require("./controllers/accessoryController");

router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

// router.get("/create", (req, res) => {
//     res.render("create");
// });
router.get('/create', cubeController.getCreateCube)
router.post('/create', cubeController.postCreateCube)
router.get('/cubes/:cubeId/details/', cubeController.getDetails);

router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory)
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory)

// Друг начин за подаване на заявка ( "use" взима само началото на пътя ./accessories)
router.use("/accessory", accessoryControler)


module.exports = router;
