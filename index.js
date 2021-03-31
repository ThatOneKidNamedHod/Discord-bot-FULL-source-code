const express = require("express")//This holds the constant connection to the express
const app = express()

app.get("/", (req, res) => {
  res.send("project is online ")//logs DO NOT DELETE
})

app.listen(3000, () => {//logs DO NOT DELETE
  console.log("Project Online")
})
const Discord = require("discord.js")//This holds the constant connection to the Discord Servers
const client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({activity: { name: "Cool status | Yea" }, status: "online"})//Status change 'cool status | yea' to a custom one
  
})

client.on("guildMemberAdd", member => {//maybe this works idk. I'll update soon
  if(member.guild.id === "") {
    client.channel.cache.get("").send(`Welcome ${member}!`)
  }
})
 client.on("message" , message => {
  if(message.content === "help!") {//help page.
    return message.channel.send("You only have one command! and its ping!")
  }
})         
client.on("message" , message => {
  if(message.content === "ping!") {//the only command that it starts with
    return message.channel.send("pong!")
  }
})     

client.login("")//Token goes here
//Use replit.com ONLY
