const db = require("../models");
const config = require("../config/db.config");
const Blog = db.blog;
const User = db.user;
const Comment = db.coment;
const Favorite = db.favorite;


exports.getBlogs = async (req, res) => {
  try {

    let data = await Blog.findAll({
      attributes: ['id', 'title', 'message', 'image_url'],

      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'image_url', 'email'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment'],
        include: [{
          model: User,
          attributes: ['first_name', 'last_name', 'image_url', 'email'],
        }]
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


exports.getUserBlogs = async (req, res) => {
  try {

    let data = await Blog.findAll({
      attributes: ['id', 'title', 'message', 'image_url'],
       where:{
          userId:req.userId
       },
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'image_url', 'email'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment'],
        include: [{
          model: User,
          attributes: ['first_name', 'last_name', 'image_url', 'email'],
        }]
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


exports.getUserFavoriteBlogs = async (req, res) => {
  try {

    let data = await Favorite.findAll({
      attributes: ['id'],
      where: {
        userId: req.userId
      },
      include: [{
        model: Blog,
        attributes: ['id', 'title', 'message', 'image_url'],

        include: [{
          model: User,
          attributes: ['first_name', 'last_name', 'image_url', 'email'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment'],
          include: [{
            model: User,
            attributes: ['first_name', 'last_name', 'image_url', 'email'],
          }]
        },
        ],
      },
      ],
    })

    let favoriteBlog = [];

    for (let i = 0; i < data.length; i++) {
      favoriteBlog.push(data[i].blog)
    }

    res.status(200).send({
      success: true,
      items: favoriteBlog,
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}


exports.getBlogById = async (req, res) => {
  try {

    let data = await Blog.findOne({
      attributes: ['id', 'title', 'message', 'image_url'],
      where: {
        id: req.params.id
      },
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'image_url', 'email'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment'],
        include: [{
          model: User,
          attributes: ['first_name', 'last_name', 'image_url', 'email'],
        }]
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

exports.FavoriteBlog = async (req, res) => {
  try {

    let data = await Favorite.findOne({
      where: {
        userId: req.userId,
        blogId: req.params.id,
      }
    })


    if (data) {
      await Favorite.destroy({
        where: {
          userId: req.userId,
          blogId: req.params.id,
        }
      })

      return res.status(200).send({
        success: true,
        message: "Blog Remove Successfully"
      })

    } else {
      await Favorite.create({
        acitve: 1,
        userId: req.userId,
        blogId: req.params.id,
      })

      return res.status(200).send({
        success: true,
        message: "Blog Add Successfully"
      })
    }





  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}

exports.UpdateBlog = async (req, res) => {

  try {
    const values ={
      acitve: 1,
      userId: req.userId,
      title: req.body.title,
      message: req.body.message,
      image_url: req.body.image_url
    }

    await Blog.update(values,{
      where:{
        id:req.params.id
      }
    })



    res.status(200).send({
      success: true,
      message: "Blog Update Successfully"
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}


exports.DeleteBlog = async (req, res) => {

  try {
    const blog = await Blog.findOne({
      where: {
        id: req.params.id
      }
    })

    if (blog.userId === req.userId) {
      await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({
        success: true,
        message: "Blog Delete Successfully"
      })
    } else {
      res.status(200).send({
        success: true,
        message: "You can not delete others blog"
      })
    }


  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}

