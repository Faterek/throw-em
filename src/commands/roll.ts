import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import diceRoll from "../components/diceRoll.js";

@Discord()
export class Roll {
  @Slash({ description: "Roll dice", name: "r" })
  async choose(
    @SlashOption({
      description: "Type standard roll command.",
      name: "roll",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    roll: string,
    @SlashOption({
        description: "Math on throw result",
        name: "math-result",
        required: false,
        type: ApplicationCommandOptionType.String,
    })
    // resultMath: string,
    // @SlashOption({
    //     description: "Math on every throw",
    //     name: "math-rolls",
    //     required: false,
    //     type: ApplicationCommandOptionType.String,
    // })
    // throwMath: string,
    // @SlashOption({
    //     description: "Sorting",
    //     name: "sort",
    //     required: false,
    //     type: ApplicationCommandOptionType.Boolean,
    // })
    sort: boolean,
    interaction: CommandInteraction
    
  ): Promise<void> {
    interaction.reply({content: `<@${ interaction.user.id }> **${ roll }**\n${await diceRoll(roll, sort)}`});
  }
}
