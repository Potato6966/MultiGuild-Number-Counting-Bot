const Discord = require("discord.js"); //discord.js v13
const config = require(`./config.json`);
//we need some sort of DATABASE:
const Enmap = require("enmap");
const client = new Discord.Client({
    shards: "auto",
    failIfNotExists: false, //add this for security!
    allowedMentions: { parse: [ ], repliedUser: false },
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});
client.settings = new Enmap({
    name: "NumberCounter",
    //dataDir: "./path/to/wished/database", //optional to set a database path!
});
//Start the Bot
client.login(config.token)

//we gotta adjust this, so we only require the file once the bot is ready!
client.on("ready", () => {
    console.log(`Logged in ${client.user.tag}`)
    //import our number counter!
    require("./numbercounter")(client); // we pass in the client!
})

/**
 * @WELCOME_EVERYONE
 * I AM BACK!
 * Sad news... My server discord got nuked so please join it again in my youtube description.
 * A FAST AND SIMPLE GLOBAL BOT TUTORIAL!
 * 
 * I setupped a index file with base data and a config.json with the token and prefix (which we wont need)
 * CODE WILL BE ON: https://github.com/Potato6966
 */