const config = require("../config/db.config");





const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.blog = require("./blogs.model")(sequelize, Sequelize);
db.coment = require("./comment.model")(sequelize, Sequelize);
db.favorite = require("./favorite.model")(sequelize, Sequelize);




// relation between tables

db.user.hasMany(db.blog,{
  foreignKey:"userId"
});

db.blog.belongsTo(db.user,{
  foreignKey:"userId"
});

db.user.hasMany(db.coment,{
  foreignKey:"userId"
});

db.coment.belongsTo(db.user,{
  foreignKey:"userId"
});



db.blog.hasMany(db.coment,{
  foreignKey:"blogId"
})
db.coment.belongsTo(db.blog,{
  foreignKey:"blogId"
})

db.blog.hasMany(db.favorite,{
  foreignKey:"blogId"
})
db.favorite.belongsTo(db.blog,{
  foreignKey:"blogId"
})



// db.user.hasOne(db.blog,{
//   foreignKey:"blogId"
// });


// db.blog.belongsTo(db.user, { foreignKey: 'blogId' });
// db.user.hasOne(db.blog, { foreignKey: 'blogId' });



module.exports = db;