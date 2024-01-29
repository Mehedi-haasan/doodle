const jwt = require("../middleware/authentication");

const controller = require("../controllers/blog.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/api/get/blogs", controller.getBlogs);
    app.get("/api/get/user/blogs",jwt.verifyToken, controller.getUserBlogs);

    app.get("/api/get/user/favorite/blogs",jwt.verifyToken, controller.getUserFavoriteBlogs);

    app.post("/api/create/blogs", jwt.verifyToken,  controller.createBlog);
    app.post("/api/favorite/blogs/:id", jwt.verifyToken,  controller.FavoriteBlog);

    app.get("/api/get/blogs/:id", jwt.verifyToken, controller.getBlogById);

    app.put("/api/get/blogs/:id", controller.UpdateBlog);

    app.delete("/api/delete/blogs/:id", jwt.verifyToken, controller.DeleteBlog);

};