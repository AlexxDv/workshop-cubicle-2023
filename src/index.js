const express = require("express");
const app = express();

// const setupViewEngine = require('./config/viewEngine')
// setupViewEngine(app);
// или може да използваме това по-долу
require("./config/viewEngine")(app);

const config = require("./config");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(config.PORT, () =>
    console.log(`Server is running on ${config.PORT}`)
);
