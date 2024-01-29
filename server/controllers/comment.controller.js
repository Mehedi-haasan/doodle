const db = require("../models");
const config = require("../config/db.config");
const Comment = db.coment;
const ProductVariant = db.productVariant;
const ProductVariantAttributeValue = db.productVariantAttributeValue;

const Op = db.Sequelize.Op;


exports.getBlogs = async (req, res) => {
    try {
        let data = await ProductTemplate.findAll({
            attributes: ['id'],
            where: {
              id: 1,
            },
            include: [
              {
                model: ProductVariant,
                attributes: ['id', 'name', 'image_url'],
                include: [
                  {
                    model: ProductVariantAttributeValue,
                    attributes: ['name', 'value'],
                  },
                ],
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


exports.getBlogById = async (req, res) => {
  try {
      let data = await ProductTemplate.findAll({
          attributes: ['id',],
          where: {
            id: 1,
          },
          include: [
            {
              model: ProductVariant,
              attributes: ['id', 'name', 'image_url'],
              include: [
                {
                  model: ProductVariantAttributeValue,
                  attributes: ['name', 'value'],
                },
              ],
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



exports.createComment = async (req, res) => {
    try {
        await Comment.create({
            acitve: 1,
            blogId: req.body.blogId,
            userId: req.userId,
            comment: req.body.comment,
        })

        res.status(200).send({
            success: true,
            message: "Comment Create Successfully"
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}

exports.UpdateComment = async (req, res) => {

  try {
      await Comment.uodate({
        acitve: 1,
        blogId: req.body.blogId,
        userId: req.userId,
        comment: req.body.comment,
    })



      res.status(200).send({
          success: true,
          message: "Product Create Successfully"
      })

  } catch (error) {
      res.status(500).send({ success: false, message: error.message });
  }

}


exports.DeleteComent = async (req, res) => {

  try {
      await Blog.distroy({
          acitve: 1,
          sequence:"10",
          category_id:1,
          name: req.body.name,
          description:req.body.description,
          image_url: req.body.image_url,
          price: req.body.price,
          standerd_price: req.body.standerd_price,
          sku:"MFOO1",
          product_type: true,
      })



      res.status(200).send({
          success: true,
          message: "Product Create Successfully"
      })

  } catch (error) {
      res.status(500).send({ success: false, message: error.message });
  }

}

