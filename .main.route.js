const express = require("express");
const app = express();
var cors = require("cors");
const { PATH } = require("./CommonLib/constant");
const Authroutes = require("./Routes/auth.route");
const Bloglistroutes = require("./Routes/bloglist");
const Newslistroutes = require("./Routes/Newslistroutes");
const Blogs = require("./Routes/blog.user");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json([]));
// app.use(PATH.USER, userRoute);
app.use(PATH.AUTH, Authroutes);
app.use(PATH.BLOGLIST, Bloglistroutes);
app.use(PATH.NEWSLIST, Newslistroutes);
app.use(PATH.BLOG, Blogs);
module.exports = app;
