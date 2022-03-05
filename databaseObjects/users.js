export const usersObject = database.define('users', {
    userID: {
        type: Sequelize.CHAR(18),
        primaryKey: true,
        allowNull: false
    },
    exp: {
        type: Sequelize.BIGINT.UNSIGNED,
        defaultValue: 0
    },
    level: {
        type: Sequelize.BIGINT.UNSIGNED,
        defaultValue: 0
    },
    money: {
        type: Sequelize.BIGINT.UNSIGNED,
        defaultValue: 0
    },
    message: {
        type: Sequelize.STRING(144),
        defaultValue: null
    },
    levelUpMessage: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
    },
    lastdaily: {
        type: Sequelize.BIGINT.UNSIGNED,
        defaultValue: null
    },
    embedColour: {
        type: Sequelize.CHAR(6),
        defaultValue: null
    }
}, {
    timestamps: false
})