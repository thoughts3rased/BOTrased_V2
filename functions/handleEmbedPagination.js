const pagingationEmbed = require('discordjs-button-pagination')
const { MessageButton } = require('discord.js')

async function handleEmbedPagination (interaction, pages){
    buttonList = [
        new MessageButton()
            .setCustomId('previousbtn')
            .setLabel('Previous Page')
            .setStyle('DANGER'),
        new MessageButton()
            .setCustomId('nextbtn')
            .setLabel('Next Page')
            .setStyle('SUCCESS')
    ]

    pagingationEmbed(interaction, pages, buttonList)
}

module.exports = { handleEmbedPagination }