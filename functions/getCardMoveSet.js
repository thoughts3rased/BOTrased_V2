async function getCardMoveSet(cardID){
    var moveSetArray = []
    var moveSet = await moveRecords.findAll({
            include: [{
            model: cardMoves,
            where: {cardID: cardID}
        }]
    }).then(records => {
        records.forEach((record) =>{
            moveSetArray.push({
                'moveID': record.moveID,
                'name': record.name,
                'description': record.description,
                'power': record.power,
                'turnCooldown': record.turnCooldown,
                'type': record.type
            })
        })
    })
    return moveSetArray
}

module.exports = { getCardMoveSet }