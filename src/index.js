const express = require("express");

const routes = require("./routes");
const config = require("./config");

const app = express();
// const setupViewEngine = require('./config/viewEngine')
// setupViewEngine(app);
// или може да използваме това по-долу
require("./config/viewEngine")(app);

app.use(express.static("src/public"));
app.use(routes);

app.listen(config.PORT, () =>
    console.log(`Server is running on ${config.PORT}`)
);
