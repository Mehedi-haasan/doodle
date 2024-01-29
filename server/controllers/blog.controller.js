const db = require("../models");
const config = require("../config/db.config");
const Blog = db.blog;
const User = db.user;
const Comment = db.coment;



exports.getBlogs = async (req, res) => {
  try {

    let data = await Blog.findAll({
      attributes: ['id', 'title', 'message', 'image_url'],

      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'image_url'],
      },
      {
        model: Comment,
        attributes: ['id', 'name', 'email', 'body'],
      },
      ],
    })

    // let blogData = await db.sequelize.query('Select * from users')

    res.status(200).send({
      success: true,
      items: data,
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}


exports.getBlogById = async (req, res) => {
  try {
    let data = await Blog.findAll({
      attributes: ['id', 'title', 'message', 'image_url'],
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comment,
          attributes: ['id', 'name', 'email', 'body'],
        },
      ],
    })

    res.status(200).send({
      success: true,
      items: data,
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}



exports.createBlog = async (req, res) => {
  try {
    await Blog.create({
      acitve: 1,
      userId: req.userId,
      title: req.body.title,
      message: req.body.message,
      image_url: req.body.image_url
    })

    res.status(200).send({
      success: true,
      message: "Blog Create Successfully"
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}

exports.UpdateBlog = async (req, res) => {

  try {
    await Blog.create({
      acitve: 1,
      userId: req.userId,
      title: req.body.title,
      message: req.body.message,
      image_url: req.body.image_url
    })



    res.status(200).send({
      success: true,
      message: "Product Create Successfully"
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}


exports.DeleteBlog = async (req, res) => {

  try {
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });



    res.status(200).send({
      success: true,
      message: "Product Create Successfully"
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}

