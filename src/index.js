const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const config = require("./config");
const initDatabase = require("./config/dbinit");
const setupViewEngine = require('./config/viewEngine');


const app = express();
setupViewEngine(app);
// const setupViewEngine = require('./config/viewEngine')
// require("./config/viewEngine")(app);
// или може да използваме това по-горе

app.use(express.static("src/public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
    .then(() =>
        app.listen(config.PORT, () =>
            console.log(`Server is running on ${config.PORT}`)))
    .catch((err) => console.error(err.message));
