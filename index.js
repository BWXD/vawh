
/*const { ifError } = require("assert");
const { memory } = require("console");*/
const Discord = require("discord.js");
var client = new Discord.Client();

//var queue = ``;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var qc = 0;

var gn = 0;

client.on("ready", function() {
        //client.user.setStatus("dnd")
});

client.on("message", message => {
var msg = message.content;
if(message.channel.id != "959812222845063218" && message.author.id != "755897628117696592"){



    if(msg.startsWith("=") && msg != "=help" && msg != "=j" && msg != "=l" && msg != "=q" &&  !msg.startsWith("=p")/* && !msg.startsWith("=purge ")*/){
        message.channel.send({embed: new Discord.RichEmbed()
                .setColor("#656565")
                .setDescription("This command doesn't exist!")
        })
     }


     // =help

     if(msg == "=help"){
        message.channel.send({embed: new Discord.RichEmbed()
                .setColor("#00A5A5")
                .setTitle("ELO Commands")
                .setDescription(`**Lobby**
=j : *Join the queue*
=l : *Leave the queue*
=q : *Check the queue*
=p : *Pick a player*`)
        })
     }


     // =j

        if(msg == "=j" && message.author.id != p1 && message.author.id != p2 && message.author.id != p3 && message.author.id != p4){
                if(p4 != 0){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`Queue is full; you can't join.`)
                        })
                }
                if(p3 != 0 && p4 == 0){
                        qc++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("56ab2f")
                                .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has joined the queue!`)
                        })
                        p4 = message.author.id;
                        //Game has started.
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`<@`+p1+`> can choose his player. Use ` + "`=p` to pick.")
                        })
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`**Captain 1 :** <@`+p1+`>
**Captain 2 :** <@`+p2+`>

**Queue:**
<@`+p3+`>
<@`+p4+`>`)
                        })
                }
                if(p2 != 0 && p3 == 0){
                        qc++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("56ab2f")
                                .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has joined the queue!`)
                        })
                        p3 = message.author.id;
                }
                if(p1 != 0 && p2 == 0){
                        qc++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("56ab2f")
                                .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has joined the queue!`)
                        })
                        p2 = message.author.id;
                }
                if(p1 == 0){
                        qc++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("56ab2f")
                                .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has joined the queue!`)
                        })
                        p1 = message.author.id;
                }

     




        }
        else

// NEXT 6 LINES ARE COMMENTABLE FOR TEST
        if(msg == "=j" && message.author.id == p1 || message.author.id == p2 || message.author.id == p3 || message.author.id == p4){    
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("f46b45")
                        .setDescription(`You are already in the queue.`)
                })
        }

     // =l

     if(msg == "=l"){
        if(p4 != 0){
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("f46b45")
                        .setDescription(`Queue is full; you can't leave.`)
                })
        } else
        if(p1 == message.author.id){
                qc -= 1;
                p1 = p2;
                p2 = p3;
                p3 = 0;
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("ff5456")
                        .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has left the queue!`)
                })
        } else
        if(p2 == message.author.id){
                qc -= 1;
                p2 = p3;
                p3 = 0;
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("ff5456")
                        .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has left the queue!`)
                })
        } else
        if(p3 == message.author.id){
                qc -= 1;
                p3 = 0;
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("ff5456")
                        .setDescription(`**[` + qc + `/4]** <@` + message.author.id + `> has left the queue!`)
                })
        } else
        if(message.author.id != p1 && message.author.id != p2 && message.author.id != p3 && message.author.id != p4){
                message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("f46b45")
                        .setDescription(`You are not in the queue; you can't leave.`)
                })
        }



        }






     // =q

        if(msg == "=q"){
                if(qc == 4){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`**Captain 1 :** <@`+p1+`>
**Captain 2 :** <@`+p2+`>

**Queue:**
<@`+p3+`>
<@`+p4+`>`)
                        })
                }
                if(qc == 3){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("00a5a5")
                                .setDescription(`**Queue:**
<@` + p1 + `>
<@` + p2 + `>
<@` + p3 + `>`)
                        })
                }
                if(qc == 2){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("00a5a5")
                                .setDescription(`**Queue:**
<@` + p1 + `>
<@` + p2 + `>`)
                        })
                }
                if(qc == 1){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("00a5a5")
                                .setDescription(`**Queue:**
<@` + p1 + `>`)
                        })
                }
                if(qc == 0){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("656565")
                                .setDescription(`The queue is empty.`)
                        })
                }
        }





        // =p @someone

        /*client.guilds.get("954519670772334634").channels.get("960733971476545536").messages.fetch({ limit: 1 }).then(messages => {
          let lastMessage = messages.first();
          lastMessage.content
        })*/

        //var gamenumber = parseInt(lastMessage.content) + 1;
        var picked = message.mentions.members.first();

        if(msg.startsWith("=p ") && picked && qc > 3){
                if(picked.id == p3){
                        gn++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`**Game #` + gn + `**
                                
**Team 1 :** <@`+p1+`>
<@`+p3+`>

**Team 2 :** <@`+p2+`>
<@`+p4+`>`)
                        })

p1=0; p2=0; p3=0; p4=0; qc=0;

                } else
                if(picked.id == p4){
                        gn++;
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`**Game #` + gn + `**
                                
**Team 1 :** <@`+p1+`>
<@`+p4+`>

**Team 2 :** <@`+p2+`>
<@`+p3+`>`)
                        })

p1=0; p2=0; p3=0; p4=0; qc=0;

                } else
                if(picked.id != p3 && picked.id != p4){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`This player is not in the queue.`)
                        })
                }
        }
        
        if(msg.startsWith("=p ") && !picked && qc > 3){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`Please mention the player you want to pick.`)
                        })
                
        }
        
        if(msg.startsWith("=p ") && qc < 4){
                        message.channel.send({embed: new Discord.RichEmbed()
                                .setColor("f46b45")
                                .setDescription(`Lobby is not picking players currently.`)
                        })
                
        }















     if(msg.startsWith("=purge ") && message.author.id == "634872299069374488"){
             message.delete();
             message.channel.bulkDelete(msg.slice(6,9))
     }





     client.guilds.get("954519670772334634").channels.get("959812222845063218").send("**[#" + message.channel.name + "]** " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
}
});


client.login(process.env.TOKEN);
