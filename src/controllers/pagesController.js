exports.homePage =async (req, res) => {
  res.render("index", { title: "Home" });
}
exports.bookNow =async (req, res) => {
  res.render("bookNow", { title: "Home" });
}
exports.loginPage =async (req, res) => {
  res.render("login", { title: "Login" });
}
exports.signup =async (req, res) => {
  res.render("signup", { title: "Signup" });
}