export const serversObject = database.define('servers', {
    serverID: {
        type: Sequelize.CHAR(18),
        primaryKey: true,
        allowNull: false
    },
    levelUpMessage: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
    }
}, {
    timestamps:false
})