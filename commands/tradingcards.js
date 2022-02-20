const { SlashCommandBuilder } = require('@discordjs/builders');
const { lookup } = require('./tradingcards/lookup');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('tradingcards')
        .setDescription('Collect and battle with trading cards.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('lookup')
                .setDescription('Look up a certain card by its ID.')
                .addIntegerOption(option =>
                    option
                        .setName('cardid')
                        .setDescription('The ID of the card you want to view.')
                        .setRequired(true)
                )),
    async execute(interaction) {
        switch (interaction.options.getSubcommand()){
            case "lookup":
                return await lookup(interaction);
        }
    },
};