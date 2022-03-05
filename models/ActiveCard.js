const { Card } = require("./Card")

export class ActiveCard{
    constructor(){
        this.cardAttributes = null
        this.rarity = null
        this.quantity = null
        this.isActive = null
        this.deckPosition = null
        this.ownerID = null
    }

    initialiseCardFromExistingRecord(cardID, ownerID, rarity){
        this.card = new Card()
    }

    updateCardInDatabase(ownerID){

    }
}