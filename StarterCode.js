
//Modules
var Discord = require('discord.js')

//Variables

var Client = new Discord.Client()


const Prefix = "t!" // Preifx ex: PREFIX_TEXTping
const Status = "Watching youtube" // Game text
const VisibleStatus = "dnd" // online,dnd,offline,idle

/*
INSTALL DISCORD (Mainly assumes you use windows or glitch)

If you are using glitch you can install discord.js by heading to "Package.json" and clicking "Add Package" and type in "discord.js" it should be the first one.

If you are using your computer then open your terminal (This assumes you have node installed) and type "npm install discord.js"

If you DO NOT have node installed install it here:
https://nodejs.org/en/

then just repeat the steps above.
-- END OF INSTALLING DISCORD.js
You can make a discord bot application here:

https://discordapp.com/developers/applications/

Click the "New Application" Button and fill it all out.

Then from there click "Bot" on the LEFT-hand side.

And if it's not already bot create a bot then copy the token and insert below where it says "YOUR DISCORD BOT TOKEN".

Please do not share your token with anyone ever as they can use it to control your discord bot.
*/




Client.login("YOUR DISCORD BOT TOKEN")




Client.on('message', message => {//when the client receives a message
    if (message.content.startsWith(Prefix + "ping")) { //ping command

        var Embed = new Discord.RichEmbed();

        Embed.setTitle("This is an example embed!") //Title of an embed
        Embed.setDescription("This is the description of an embed") // Description of an embed
        Embed.addField("Embed Field Title","Embed Field Description") // Embed field.
        Embed.setColor('#5999ff') // Embed Color (Only hex from what I know)
        Embed.setTimestamp() // Show the time and date.
        Embed.setAuthor(Client.user.username + " Author Field") // Author of the embed (Can be blank)
        message.channel.send(Embed) // Send the embed to the channel that the message originates from.


    }
})


// When the client logins
Client.on('ready', () => {
    console.log("https://discordapp.com/oauth2/authorize?client_id=" + Client.user.id + "scope=bot&permissions=8 <-- THIS IS YOUR INVITE URL") // Log the URL in console.

    Client.user.setActivity(Status, { type: "WATCHING" }).then( Presence => { // Set the playing text.
        console.log("Set status successfully!")
    }).catch(error=>{
        console.log("There's been an issue " + error)
    })

    Client.user.setStatus(VisibleStatus).then( // Set the status to Online, Idle,Offline DND, etc (Can take a few min to update.)
        console.log("Set Visible Status")
    ).catch( error => {
        console.log("There's been an issue " + error)
    })
})


/*

Okay so your most likely now want to invite your bot.

Run the script once in terminal 

node <filename>.js

It will output a URL when it logs into the bot.

*/
