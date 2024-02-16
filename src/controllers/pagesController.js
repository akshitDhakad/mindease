exports.homePage =async (req, res) => {
  res.render("index", { title: "Home" });
}
exports.bookNow =async (req, res) => {
  res.render("bookNow", { title: "Book Now" });
}
exports.servicePage =async (req, res) => {
  res.render("service", { title: "Servers" });
}
exports.blogPage =async (req, res) => {
  res.render("blog", { title: "Blogs" });
}
exports.loginPage =async (req, res) => {
  res.render("login", { title: "Login" });
}
exports.signup =async (req, res) => {
  res.render("signup", { title: "Signup" });
}