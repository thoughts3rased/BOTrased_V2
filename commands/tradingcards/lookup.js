const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { getCardMoveSet } = require('../../functions/getCardMoveSet.js');
const { handleEmbedPagination } = require('../../functions/handleEmbedPagination.js');


async function lookup(interaction){
    await interaction.deferReply()
    const targetCard = await cardRecords.findOne({where: {cardID: interaction.options.getInteger('cardid')}})
    if (!targetCard){
        return await interaction.editReply(":x:A card with this ID does not exist.")
    }
    const cardInfoEmbed = new MessageEmbed()
            .setTitle(`#${targetCard.get('cardID')} - ${targetCard.get('name')} (${targetCard.get('hp')}HP)`)
            .setDescription(`*The ${targetCard.get('collection')} collection*\n*"${targetCard.get('description')}"*`)
            .setImage(targetCard.get('imgLink'))
            .addFields(
                {name: "Attack", value: String(targetCard.get('attack')), inline: true},
                {name: "Defense", value: String(targetCard.get('defense')), inline: true},
                {name: "Speed", value: String(targetCard.get('speed')), inline: true}
            )
    const moveSet = await getCardMoveSet(interaction.options.getInteger("cardid"))
    console.log(moveSet)
    
    const cardMoveEmbed = new MessageEmbed()
                .setTitle(`Moveset for ${targetCard.get('name')}`)
    
    for (var i = 0; i < moveSet.length; i++){
        cardMoveEmbed.addFields(
            {name: moveSet[i].name, 
            value: `*${moveSet[i].description}*\nPower: ${moveSet[i].power}\nCooldown: ${moveSet[i].turnCooldown}`, inline: true})
    };

    await handleEmbedPagination(interaction, [cardInfoEmbed, cardMoveEmbed])
}

module.exports = { lookup }