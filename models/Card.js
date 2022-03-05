export class Card{
    constructor(cardID){
        try{
            const cardInstance = await cardRecords.findOne({where: {cardID: cardID}})
            if (!cardInstance) throw new Exception(); 
            this.fulfilled = true;
        } catch {
            this.fulfilled = false;
        }
        if (this.fulfilled){
            this.ID = cardInstance.get('cardID');
            this.name = cardInstance.get('name');
            this.group = cardInstance.get('group');
            this.collection = cardInstance.get('collection');
            this.imgLink = cardInstance.get('imgLink');
            this.hp = cardInstance.get('hp');
            this.defense = cardInstance.get('defense');
            this.speed = cardInstance.get('speed');
            this.attack = cardInstance.get('attack');
            this.description = cardInstance.get('description');
        }
    }
}
