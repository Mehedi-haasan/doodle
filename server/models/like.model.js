module.exports = (sequelize, Sequelize) => {
    const like = sequelize.define("like", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        blogId: {
            type: Sequelize.INTEGER
        },
    });

    return like;
};
