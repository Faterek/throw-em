import { config } from "dotenv"
import { dirname, importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";
import { GatewayIntentBits } from "discord.js";
import { Client } from "discordx";
import { Koa } from "@discordx/koa";
config()

export const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ],

  silent: false
});

bot.once("ready", async () => {
  await bot.initApplicationCommands();
  console.log("Bot started");
});

bot.on("interactionCreate", async (interaction: Interaction) => {
  await bot.executeInteraction(interaction);
});

async function run() {
  await importx(`${dirname(import.meta.url)}/{events,commands,api}/**/*.{ts,js}`);

  if (!process.env.BOT_TOKEN) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }

  await bot.login(process.env.BOT_TOKEN);

  if(process.env.USE_API){
    await importx(`${dirname(import.meta.url)}/{api}/**/*.{ts,js}`);
    const server = new Koa();
    await server.build();

    const port = process.env.PORT ?? 21370;
    server.listen(port, () => {
      console.log(`discord api server started on ${port}`);
      console.log(`visit http://localhost:${port}/`);
    });
  }
}

run();
