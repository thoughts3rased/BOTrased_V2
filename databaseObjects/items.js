export const itemsObject = database.define('items', {
    itemID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING(45)
    },
    name: {
        type: Sequelize.STRING(45)
    },
    emojiString: {
        type: Sequelize.STRING(80)
    },
    price: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING(240)
    },
    purchasable: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
    }
}, {
    timestamps: false
})