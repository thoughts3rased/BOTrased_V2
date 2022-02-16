const { SlashCommandBuilder } = require('@discordjs/builders');
import ban from './administration/ban.js';
import clear from './administration/clear.js';
import kick from './administration/kick.js';
import modlog from './administration/kick.js';
import nickname from './administration/nickname.js';
import warn from './administration/warn.js';

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
                .setName('warn')
                .setDescription('Warns a user with a message in DMs. Requires "Kick Members" permission.')
                .addUserOption(option =>
                    option
                    .setName("target")
                    .setDescription("The user who you want to warn.")
                    .setRequired(true))
                .addStringOption(option =>
                    option
                    .setName("reason")
                    .setDescription("The reason for warning this user.")
                    .setRequired(false))
        .addSubCommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Clear a specific amount of messages in a specified channel.')
                .addIntegerOption(option =>
                    option.setName('amount')
                        .setDescription('The amount of messages that the bot should clear.')
                        .setRequired(true))
                .addChannelOption(option =>
                    option.setName('targetchannel')
                        .setDescription('The channel that you want to clear messages in.'))))
        .addSubCommand(subcommand =>
            subcommand
                .setName('nickname')
                .setDescription('Change a member\'s nickname.')
                .addUserOption(option =>
                    option.setName("target")
                        .setDescription("The user who's nickname you want to change.")
                        .setRequired(true))
                .addStringOption(option =>
                    option.setName("newnickname")
                        .setDescription("The nickname you want to give to the user.")
                        .setRequired(true)))
        .addSubCommand(subcommand =>
            subcommand
                .setName('modlog')
                .setDescription('Check the log of all the actions performed with BOTrased')
                .addStringOption(option => 
                    option.setName("actiontype")
                        .setRequired(false)
                        .setDescription("Search for a specific type of action in the modlog.")
                        .addChoice("ban", "ban")
                        .addChoice("kick", "kick")
                        .addChoice("nickname change", "name")
                        .addChoice("channel message clear", "clear")
                        .addChoice("warn", "warn"))),
    async execute(interaction) {
        switch (interaction.options.getSubcommand()){
            case "ban":
                return await ban(interaction);
            case "clear":
                return await clear(interaction);
            case "kick":
                return await kick(interaction);
            case "modlog":
                return await modlog(interaction);
            case "nickname":
                return await nickname(interaction);
            case "warn":
                return await warn(interaction);
            default:
                return
        };
    },
};