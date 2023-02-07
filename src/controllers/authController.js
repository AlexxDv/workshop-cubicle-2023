const router = require("express").Router();

const authService = require("../services/authService");

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.cookie("auth", token, { httpOnly: true });
    } catch (err) {
        console.log(err);
        return res.render("auth/login", { error: err.message });
    }
    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.post("/register", async (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        //    return next(new Error("Passwords don't match"));
        return res.render("auth/register", { error: "Passwords don't match" });
    }

    if (existingUser) {
        return res.render("auth/register", { error: "User already exists" });
    }

    try {
        const existingUser = await authService.getUserByUserName(username);
    } catch (err) {
        return next(err);

    }

    const user = await authService.register(username, password);

    console.log(user);

    res.redirect("/login");
});

module.exports = router;
