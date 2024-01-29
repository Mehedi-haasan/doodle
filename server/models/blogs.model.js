module.exports = (sequelize, Sequelize) => {
    const blog = sequelize.define("blogs", {
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
        title: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.TEXT
        },
    });

    return blog;
};
