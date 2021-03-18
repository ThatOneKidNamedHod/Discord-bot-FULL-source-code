const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("project is online ")
})

app.listen(3000, () => {
  console.log("Project Online")
})
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({activity: { name: "Cool status | Yea" }, status: "online"})
  
})

client.on("guildMemberAdd", member => {
  if(member.guild.id === "") {
    client.channel.cache.get("").send(`Welcome ${member}!`)
  }
})
 client.on("message" , message => {
  if(message.content === "help!") {
    return message.channel.send("You only have one command! and its ping!")
  }
})         
client.on("message" , message => {
  if(message.content === "ping!") {
    return message.channel.send("pong!")
  }
})     

client.login("")
//Use replit.com ONLY
