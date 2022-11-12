const { SlashCommandBuilder } = require('discord.js');
const diceRoll = require('../functions/diceRoll')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Sends private dice roll to gm')
        .addStringOption(option =>
			option
				.setName('roll')
				.setDescription('Write normall roll command')
                .setRequired(true)),
    async execute(interaction) {
        const roll = interaction.options.getString('roll') ?? 'No roll provided';
        const replyMessage = await diceRoll(roll, interaction.user.id)
        await interaction.reply({content: replyMessage, ephemeral: true});
    },
};