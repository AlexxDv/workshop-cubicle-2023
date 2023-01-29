const express = require("express");
const handlebars = require("express-handlebars");

const config = require("./config");

const app = express();

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
    res.render("home", { layout: false });
});

app.listen(config.PORT, () =>
    console.log(`Server is running on ${config.PORT}`)
);
