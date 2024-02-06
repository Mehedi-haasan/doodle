module.exports = (sequelize, Sequelize) => {
    const message = sequelize.define("message", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        senderId: {
            type: Sequelize.INTEGER
        },
        receverId: {
            type: Sequelize.INTEGER
        },
        message: {
            type: Sequelize.STRING
        },
    });

    return message;
};
