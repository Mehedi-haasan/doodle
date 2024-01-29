module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define("favorite", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        userId: {
            type: Sequelize.INTEGER
        },
        blogId: {
            type: Sequelize.INTEGER
        },
    });

    return Favorite;
};
