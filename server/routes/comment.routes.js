const jwt = require("../middleware/authentication");

const controller = require("../controllers/comment.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    // app.get("/api/get/blogs", controller.getBlogs);
    
    app.post("/api/create/comment",  jwt.verifyToken, controller.createComment);
    // app.get("/api/get/blogs/:id", controller.getBlogById);
    // app.put("/api/get/blogs/:id", controller.UpdateBlog);

};