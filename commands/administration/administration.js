const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('administration')
        .setDescription('Holds all server administration related commands')
        .addSubCommand(subcommand =>
            subcommand
                .setName("ban")
                .setDescription('Bans a user and sends a message in DMs. Requires "Ban Members" permission.')
                .addUserOption(option =>
                    option
                        .setName("target")
                        .setDescription("The user who you want to ban.")
                        .setRequired(true))
                .addStringOption(option =>
                    option
                        .setName("reason")
                        .setDescription("The reason for banning this user.")
                        .setRequired(false)))
        .addSubCommand(subcommand =>
            subcommand
            .setName('kick')
            .setDescription('Kicks a user and sends a message in DMs. Requires "Kick Members" permission.')
            .addUserOption(option =>
                option
                .setName("target")
                .setDescription("The user who you want to kick.")
                .setRequired(true))
            .addStringOption(option =>
                option
                .setName("reason")
                .setDescription("The reason for kicking this user.")
                .setRequired(false)))
        .addSubCommand(subcommand =>
            subcommand
                ),
    async execute(interaction) {
        await interaction.reply("I'm alive!");
    },
};