exports.homePage =async (req, res) => {
  res.render("index", { title: "Home" });
}
exports.bookNow =async (req, res) => {
  res.render("bookNow", { title: "Book Now" });
}
exports.servicePage =async (req, res) => {
  res.render("service", { title: "service" });
}
exports.teamPage =async (req, res) => {
  res.render("team", { title: "Team" });
}
exports.blogPage =async (req, res) => {
  res.render("blog", { title: "Blogs" });
}
exports.contactPage =async (req, res) => {
  res.render("contact", { title: "Contact-us" });
}
exports.termsConditionPage =async (req, res) => {
  res.render("termCondition", { title: "Term and Condition" });
}
exports.privacyPage =async (req, res) => {
  res.render("privacyPolicy", { title: "Privacy Policy" });
}
exports.loginPage =async (req, res) => {
  res.render("login", { title: "Login" });
}
exports.signup =async (req, res) => {
  res.render("signup", { title: "Signup" });
}