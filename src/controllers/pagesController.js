exports.homePage =async (req, res) => {
  res.render("index", { title: "Home" });
}
exports.loginPage =async (req, res) => {
  res.render("login.html", { title: "Login" });
}
exports.signup =async (req, res) => {
  res.render("sigup.html", { title: "Signup" });
}