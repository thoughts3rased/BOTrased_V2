export const inventoryObject = database.define('inventory', {
    userID: {
        type: Sequelize.CHAR(18),
        allowNull: false,
        primaryKey: true
    },
    itemID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    showOnProfile: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false,
    freezeTableName: true
})