export const adminLogObject = database.define('adminlogs', {
    logID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    serverID: {
        type: Sequelize.CHAR(18)
    },
    recipientID: {
        type: Sequelize.CHAR(18)
    },
    adminID: {
        type: Sequelize.CHAR(18)
    },
    type: {
        type: Sequelize.STRING(15),
        isIn: [['warn', 'ban', 'kick', 'clear', 'name']],
        allowNull: false
    },
    reason: {
        type: Sequelize.STRING(240),
        defaultValue: null
    },
    time: {
        type: Sequelize.BIGINT
    },
    botUsed: {
        type: Sequelize.TINYINT(1)
    }

}, {
    timestamps: false
})