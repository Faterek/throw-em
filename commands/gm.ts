const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Sends private dice roll to gm')
        .addStringOption((option: { setName: (arg0: string) => { (): any; new(): any; setDescription: { (arg0: string): { (): any; new(): any; setRequired: { (arg0: boolean): any; new(): any; }; }; new(): any; }; }; }) =>
			option
				.setName('roll')
				.setDescription('Write normall roll command')
                .setRequired(true)),
    async execute(interaction: { options: { getString: (arg0: string) => string; }; user: { id: any; }; reply: (arg0: { content: any; ephemeral: boolean; }) => any; }) {
        const roll = interaction.options.getString('roll') ?? 'No roll provided';
        const replyMessage = await diceRoll(roll, interaction.user.id, null)
        await interaction.reply({content: replyMessage, ephemeral: true});
    },
};