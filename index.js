require("dotenv").config();
const { webCheck, webPort } = require('./config.json');
const http = require('http')
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const diceRoll = require('./functions/diceRoll')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

client.once(Events.ClientReady, () => {
    console.log("Working fine!");
});

client.commands = new Collection();

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on("messageCreate", message => {
    if (message.author.bot) return;
    message.channel.send(diceRoll(message.content, message.author.id))
    message.delete()
});

client.login(process.env.TOKEN);

if(webCheck) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('index.html').pipe(res);
    });
    server.listen(webPort);
}