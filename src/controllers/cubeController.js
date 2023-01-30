const Cube = require("../models/Cube");

exports.getCreateCube = (req, res) => {
    res.render("create");
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save()


    res.redirect("/");
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        return res.redirect("/404");
    }
}
