const Discord = require("discord.js")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json');
const storeadapter = new FileSync('store.json');
const db = low(adapter);
var token = process.env.TOKEN
const storedb = low(storeadapter);
const superagent = require("superagent")
const cuteapi = require("cuteapi")
const os = require('os');
const serverStats = {
  guildID: '631557803005181963',
  totalUsersID: '641385174508109885',
  memberCountID: '641385192958984253',
  botCountID: '641385211023851530'
};


var cpu = os.loadavg();
var bot = new Discord.Client();
var prefix = ("r!");

bot.login(token)
bot.on('ready', () => {
    bot.user.setActivity("Nyan, nyuh, nya ! :3 [r!help]", {type: "WATCHING"});
      console.log('Je suis prête ~');
  });
bot.on("guildMemberAdd", member => {
    if (member.guild.id !== serverStats.guildID) return; 
    bot.channels.get(serverStats.totalUsersID).setName(`Nombre d'utilisateur(s): ${member.guild.memberCount}`)
    bot.channels.get(serverStats.memberCountID).setName(`Nombre de membre(s): ${member.guild.members.filter(m => !m.user.bot).size}`)
    bot.channels.get(serverStats.botCountID).setName(`Nombre de bot(s): ${member.guild.members.filter(m => m.user.bot).size}`)
    member.guild.channels.find("id", "641386383629484037").send(`:heart_eyes_cat:  Oh, un nouveau(velle) est arrivé(e) ! Trop bien ! Reste avec nous aussi longtemps que tu le voudras **${member.user.username}** :3 *ronron*`)
   var role = member.guild.roles.find('name', 'membres guilde');
   member.addRole(role);
  })

  
  bot.on("guildMemberRemove", member => {
    if (member.guild.id !== serverStats.guildID) return;  
    bot.channels.get(serverStats.totalUsersID).setName(`Nombre d'utilisateur(s): ${member.guild.memberCount}`)
    bot.channels.get(serverStats.memberCountID).setName(`Nombre de membre(s): ${member.guild.members.filter(m => !m.user.bot).size}`)
    bot.channels.get(serverStats.botCountID).setName(`Nombre de bot(s): ${member.guild.members.filter(m => m.user.bot).size}`)
    member.guild.channels.find("id", "641386383629484037").send(`:scream_cat:  Niioonn, **${member.user.username}** est parti(e) pourquoii ! '-' `)
  })

  bot.on('message', async message => {
    mention = message.mentions.users.first();
    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp);
        console.log(`Nombre d'xp : ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
    }





if(message.content === prefix + "handspinner") {

  let spinning = await message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: `${message.author.tag} is spinning a fidget spinner...`,
      image: {
        url: 'https://i.imgur.com/KJJxVi4.gif'
      }
    }
  });

  let timeout = (Math.random() * (60 - 5 + 1)) + 5;
  setTimeout(() => {
    spinning.edit({
      embed: {
        color: Bastion.colors.BLUE,
        description: `${message.author.tag}, you spinned the fidget spinner for ${timeout.toFixed(2)} seconds.`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }, timeout * 1000);
};

if(message.content.startsWith(prefix + "pat")){
  if(message.guild === null)return;
  const user = message.mentions.users.first();
  if(!user)
      return message.reply('Gneugneu tu peux pas te pat pat tout seul !');

  superagent.get('https://nekos.life/api/v2/img/pat')
      .end((err, response) => {
    const lewdembed = new Discord.RichEmbed()
    .setTitle(user.username + " c'est fait pat pat par " + message.author.username)
    .setImage(response.body.url)
    .setColor(`RANDOM`)
    .setDescription((user.toString() + " viens ce faire de pat pat " + message.author.toString()))
    .setFooter(`owo`)
    .setURL(response.body.url);
message.channel.send({embed: lewdembed});
  })

}

if(message.content === prefix + "yaoi"){
  if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
  if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('Nah nah ! Pas le droit de te montrer ça ! Même dans les canaux NSFW :/');
  var hentai = "sex"
  var query = "yaoi";
  booru.search('gelbooru', [query], {nsfw: true, limit: 1, random: true })
      .then(booru.commonfy)
      .then(images => {
          for (let image of images) {
              const embed = new Discord.RichEmbed()
              .setTitle("Hentai:")
              .setImage(image.common.file_url)
              .setColor('#000000')
              .setFooter(`Tags: ${query}`)
              .setURL(image.common.file_url);
              return message.channel.send({embed: embed});
          }})
        }


        if(message.content === prefix + "minou"){
          if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
          superagent.get('https://nekos.life/api/v2/img/pussy')
              .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
            .setTitle("Grrrr :3")
            .setImage(response.body.url)
            .setColor(`#000000`)
            .setFooter(`Intéréssant`)
            .setURL(response.body.url);
        message.channel.send({embed: lewdembed});
          })
        
      }


if(message.content === prefix + "gneko"){
   if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
    superagent.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Love ya Shinai <3")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`En gif c'est cool aussi :3`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}
if(message.content === prefix + "trap"){    
  if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
    superagent.get('https://nekos.life/api/v2/img/trap')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Trapped ! Bon, maintenant que tu y est, fait pas le(la) difficile :D")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Meh.`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}
if(message.content === prefix + "yuri"){
    if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
    superagent.get('https://nekos.life/api/v2/img/yuri')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Yuriiiiiii :3")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Meh�.`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}

    if(message.content.startsWith(prefix + "slap")){
      if(message.guild === null)return;
      const user = message.mentions.users.first();
      if(!user)
        return message.reply("Mentionne quelqu'un a taper ! A moins que tu soit maso ? Oo")

        superagent.get('https://nekos.life/api/v2/img/slap')
          .end((err, response)=>{
            const lewdembed = new Discord.RichEmbed()
            .setTitle(user.username + " viens de ce faire frapper par" + message.author.username)
            .setImage(response.body.url)
            .setColor('RANDOM')
            .setDescription((user.toString() + "A pris sa part par" + message.author.toString()))
            .setFooter("CHEH !")
            .setURL(response.body.url);
            message.channel.send({embed: lewdembed})
          })
    }


        if(message.content === prefix + "neko2"){
  if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
  superagent.get('https://nekos.life/api/v2/img/erokemo')
      .end((err, response) => {
    const lewdembed = new Discord.RichEmbed()
    .setTitle("Elles serrons jamais nues ! Gros pervers :3")
    .setImage(response.body.url)
    .setColor(`#000000`)
    .setFooter(`J'aime bien perso. #Lara`)
    .setURL(response.body.url);
message.channel.send({embed: lewdembed});
  })

}



if(message.content === prefix + "furry"){
        if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
        if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('Nah nah ! Pas le droit de te montrer �a ! M�me dans les canaux NSFW :/');

        var query = message.content.split(/\s+/g).slice(1).join(" ");
        booru.search('e6', [query], {nsfw: true, limit: 1, random: true })
            .then(booru.commonfy)
            .then(images => {
                for (let image of images) {
                    const embed = new Discord.RichEmbed()
                    .setTitle("Furryyyyy :3")
                    .setImage(image.common.file_url)
                    .setColor('#000000')
                    .setFooter(`BEURK`)
                    .setURL(image.common.file_url);
                return message.channel.send({ embed });
                }

            })
      }
if(message.content === prefix + "hentai"){
    if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
    superagent.get('https://nekos.life/api/v2/img/hentai')
        .end((err, response) => {
      const lewdembed3 = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`La catégorie de mon dev ! Mais chut :3`)
      .setURL(response.body.url);
  message.channel.send(lewdembed3);
    })
	
}
if(message.content.startsWith(prefix + "chatouille")){
            if(message.guild === null)return;
            const user = message.mentions.users.first();
            if(!user)
                return message.reply(`Tu va pas te chatouiller toi même quand même ? Si ? Mentionne quelqu'un !`);

            superagent.get('https://nekos.life/api/v2/img/tickle')
                .end((err, response) => {
              const lewdembed4 = new Discord.RichEmbed()
              .setTitle(user.username + " Tu est chatouillé par " + message.author.username + "!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " à été chatouillé par" + message.author.toString() + "!"))
              .setFooter(`'-'`)
              .setURL(response.body.url);
          message.channel.send(lewdembed4);
            })
          
        }
        if(message.content.startsWith(prefix + "hug")){
            if(message.guild === null)return;
            const user = message.mentions.users.first();
            if(!user)
                return message.reply(`Les auto calins c'est bien, mais a deux, c'est mieux ! Mentionne quelqu'un !`);

            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const lewdembed10 = new Discord.RichEmbed()
              .setTitle(user.username + " Viens de ce faire caliner par " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " a eu un calin de la part de " + message.author.toString()))
              .setFooter(`c'est KROOO CUUUTTTEEEE`)
              .setURL(response.body.url);
          message.channel.send(lewdembed10);
            })
          
        }
        if(message.content.startsWith(prefix + "kiss")){
            if(message.guild === null)return;
            const user = message.mentions.users.first();
            if(!user)
                return message.reply(`Tu peux pas t'embrasser tout seul, baka`);

            superagent.get('https://nekos.life/api/v2/img/kiss')
                .end((err, response) => {
              const lewdembed = new Discord.RichEmbed()
              .setTitle(user.username + " Viens de ce faire embrasser par " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setFooter(`Et mwa ? :c`)
              .setURL(response.body.url);
          message.channel.send(lewdembed);
            })
          
        }
if (message.content.startsWith( prefix + "cookie")) {
  if(mention == null) {return message.reply("Tu manges tes cookies seul toi ?");}
  mentionMessage = message.content.slice (8);
  message.delete()
  var cookie = new Discord.RichEmbed()
  .setTitle("Owiii")
  .setAuthor(`${message.author.username} à partagé un cookie avec toi !`)
  .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRFmKho4QGyfWJyFSYnIVkL0iX52Fds0IM-TjdQb8gdiNBwunDg")
  mention.sendMessage({embed: cookie})
  message.channel.send(`${message.author.username} Tu partages ! Cool ça ! tiens ! un cookie en plus pour toi ! <3 🍪`)
}


if (message.content.startsWith(`<@529372270754267147> Tu commence doucement à me faire chier toi`))
    message.channel.send("Moi aussi je t'aime mon chou <3")
    if (message.content.startsWith(`<@529372270754267147> bon courage`))
    message.channel.send("Avec un dev comme ℒ𝓪𝓻𝓪 ℱ𝒆𝓷𝓻𝓲𝓻 ouai il m'en faut.. ")


if (message.content.startsWith( prefix + "roi")) {
  if(mention == null) {return message.reply("Pas de roi/reine :c");}
  mentionMessage = message.content.slice (8);
  let userb = message.mentions.members.first();
  message.delete()
  var roi = new Discord.RichEmbed()
  .setTitle("Owiii")
  .setAuthor(`${userb.user.username} ! ${message.author.username} t'as élu(e) roi/reine des cookies ! 👑`)
  .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRFmKho4QGyfWJyFSYnIVkL0iX52Fds0IM-TjdQb8gdiNBwunDg")
  message.channel.send({embed: roi})
  message.channel.send(`${message.author.username} Tu viens de faire l'avénement d'un nouveau(nouvelle) roi(reine)`)
}  
     
 if(message.content === prefix + 'dev')
  
  var dev = new Discord.RichEmbed()
  .setTitle(`Salut à toi, ${message.author.username}`)
  .addField("Si tu lis ceci c'est pour en savoir plus sur mon développeur. Je vais tout te dire.", "Son pseudo discord est Come with me..#0666. Il est développeur depuis longtemps déjà. Spécialisé dans le JavaScript, i lest aussi trés agile avec Python")
  .addField("Que dire de plus..", "Ah si ! Il te remercie de m'avoir ajoutée sur ce serveur ! Car même si il n'est pas co, je sauvegarde toutes intéractions avec moi même ou les autres bots de Lara, ce qui fait qu'il les voies. Donc, merci ! ❤")
  .setImage('https://cdn.discordapp.com/attachments/511554588738846720/522212606577082370/1312931744.jpg')
  .setThumbnail("https://cdn.discordapp.com/attachments/511554588738846720/522212793299238923/nekoGirl_1.jpg")

  message.channel.send({embed: dev})

      
    if(message.content === prefix + "neko"){
    if (!message.channel.nsfw) return message.channel.send(`Oulah doucement, ce n'est pas dans un channel NSFW !`)
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed2 = new Discord.RichEmbed()
      .setTitle(`Nyyaaa~~ **Gémis puis ronronne proche de ton oreille**`)
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Spéciale dédi à Shinai <3`)
      .setURL(response.body.url);
  message.channel.send({embed: lewdembed2});
    })
	
}
    if(message.content === prefix + "serveur")
        var serverinfo = new Discord.RichEmbed()
        .setDescription("Informations du discord")
        .addField("Nom du discord", message.guild.name)
        .addField("créé le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Nombre d'utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
        message.channel.send({embed: serverinfo})
    
    
if(message.content.startsWith(prefix + "sondage")) {
    
    
            let usera = message.mentions.members.first();
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            let sondageChannel = message.guild.channels.find("name", "sondage");
            
            const msg = await sondageChannel.send(`@everyone`);
            
            var sondage = new Discord.RichEmbed()
                .setDescription(`Sondage lancé par ${message.author.username}`)
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor(0xB40404)
                .setTimestamp()
                .setFooter(`${message.guild.name}`)
                
            await msg.edit(sondage)
            
            .then(function (message) {
                message.react("❌")
                message.react("✅")
            }).catch(function() {
            });
            
}
if(message.content === ("<@529372270754267147> c'est qui le/la plus beau/belle ?"))
  message.channel.send(`Le/La plus beau/belle ? c'est simple ! C'est ${message.author.username} ! Si j'était Humain, je l'épouserais direct ! Sans hésiter ! <3 (même si je rêve d'épouser Lara :3)`)

    if (message.content === prefix + "gaypride")
    var gay = new Discord.RichEmbed()
    .setTitle("C'est trèss gayy")
    .setAuthor(`${message.author.username}`)
    .setImage("https://www.comprarbanderas.es/images/banderas/400/16485-orgullo-gay-philadelphia_400px.jpg")
    message.channel.send({embed: gay})



    if(message.content === prefix + "chat") {
      let msg = await message.channel.send("En cours...")

      let {body} = await superagent
      .get('http://aws.random.cat/meow')
      console.log(body.file)
      if(!{body}) return message.channel.send("C'est cassé ! C'est pas moi c'est le site ! J'te jure ! Essaie encore tu verras !")

        let cEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('🐱 Piti chat ! 🐱')
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send({embed: cEmbed})
        msg.delete()
    }
    if (message.content === prefix + "chaine")
      var youtube = new Discord.RichEmbed()
      .setAuthor(`Salut à toi ! ${message.author.username}`)
      .addField("Tu est ici pour voir la chaine commune d'Umi et Lara !", "Bon pour l'instant elle est pas prête donc, bah tu attends c:")
      .setImage("https://cdn.discordapp.com/attachments/519603011194978304/525428371769917440/image0.png")
      message.channel.send({embed: youtube})

    if(message.content === prefix + "meme") {
      let msg = await message.channel.send("En cours...")

      let {body} = await superagent
      .get('https://api-to.get-a.life/meme')
      console.log(body.text)
      if(!{body}) return message.channel.send("C'est cassé ! C'est pas moi c'est le site ! J'te jure ! Essaie encore tu verras !")

        let mEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('G3T M3M3D')
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send({embed: mEmbed})
        msg.delete()
    }



    if(message.content === prefix + "panda") {
      let msg = await message.channel.send("En cours...")

      let {body} = await superagent
      .get('https://api-to.get-a.life/pandaimg')
      console.log(body.text)
      if(!{body}) return message.channel.send("C'est cassé ! C'est pas moi c'est le site ! J'te jure ! Essaie encore tu verras !")

        let pEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Les pandas c'est nice !`)
        .setImage(body.link)
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send({embed: pEmbed})
        msg.delete()
    }

    if(message.content === prefix + "chien") {
      let msg = await message.channel.send("En cours...")

      let {body} = await superagent
      .get('https://dog.ceo/api/breeds/image/random')
      console.log(body.message)
      if(!{body}) return message.channel.send("C'est cassé ! C'est pas moi c'est le site ! J'te jure ! Essaie encore tu verras !")

        let dEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor('🐶 Piti chien ! 🐶')
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send({embed: dEmbed})
        msg.delete()
    }



    if(message.content === prefix + "xpstat"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setColor('#F72BB0')
            .setTitle(`Xp de ${message.author.username}`)
            .setDescription("Voilà toute l'xp accumulée !")
            .addField("XP :", `${xpfinal[1]} xp`)
        message.channel.send({embed: xp_embed});
    
    
    }
    
      if (message.content === prefix + "lulu") {
    var lulu = new Discord.RichEmbed()
    .setTitle("C'est la CHEF, la patrone, fiin notre Xayah kwa.. ")
    .setAuthor("LuLu#3814")
    .setDescription("La patrone du serveur !", "En plus elle main Xayah :3")
    .setImage("https://cdn.discordapp.com/attachments/548245656012193792/552224820700381196/Screen_Shot_2017_04_04_at_1.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/548245656012193792/552224783023079434/portrait-xayah.png")
    .setColor("RANDOM")

    message.channel.send({embed: lulu})
  
    
    }
    if(message.content.startsWith("league")){
  var draven = new Discord.RichEmbed()
  .setTitle("Regarde moi cette beautée ! N'est-il pas magnifique ?")
  .setDescription("LEAGUE OF DRAVEEEENNNNN")
  .setImage("https://cdn.discordapp.com/attachments/550803217261527049/552588651461214251/splash-arts-santa-draven.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/550803217261527049/552588733640081418/draven-draven.png")
  .setTimestamp()
  
  message.channel.send({embed: draven}) 
}
    if(message.content === prefix + "taka"){
  var taka = new Discord.RichEmbed()
  .setTitle("Pourquoi tu fait cette commande ? On s'en fout de lui non ? <3")
  .setDescription("Nan, je rigole !", "On t'aime Taka :p")
  .setImage("https://cdn.discordapp.com/attachments/548245656012193792/552227579029880833/yanpeng-zhao-lolyasuo.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/548245656012193792/552227518749343776/yasuo-odyssey.png")
  .setFooter("M�me si il est nul sur le perso, bah on fait avec quoi.. Et il est pas que nul sur le perso.. Il est nul tout cours <3")

  message.channel.send({embed: taka})
}
    
    if(message.content === prefix + "debug"){ 
      var embed10 = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username}`)
      .setColor("RANDOM")
      .setThumbnail(bot.user.avatarURL) 
      .addField("📋Nom du bot", bot.user.tag, true)
      .addField("🆔ID", bot.user.id, true)
      .addField("🤖Version","0.0.1beta", true)
      .addField("✏librairie", "Discord.js",true)
      .addField("📔Version discord.js", Discord.version, true)
      .addField("🔐Node", process.version, true)
      .addField("❔Présent sur ", bot.guilds.size + " serveurs", true)
      .addField("🖥OS", process.platform, true)
      .addField("🚅Ram" , `${Math.round(process.memoryUsage().heapUsed / 1000000)}MB`, true)
      .addField("🕧En ligne depuis",(Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " min, et " + (Math.round(bot.uptime / 1000) % 60) + " sec", true)
      .addField("🖥 Developpeur", "ℒ𝓪𝓻𝓪 ℱ𝒆𝓷𝓻𝓲𝓻#0195")
      .addField("🔥CPU", Math.ceil(cpu[1] * 100) / 10 + "%",true)
      .addField("⚙Config", `(${os.arch()}) ${os.cpus()[0].model} @ ${os.cpus()[0].speed} MHz`, true)
      message.channel.send({embed: embed10});
    }

    
    
    if(message.content === prefix + 'roll') {      
      var coin = Math.floor(Math.random() * 2);
        if(coin === 0) {
            coin = 'pile'
        };
        if(coin === 1) {
            coin = 'face'
        };
        message.channel.send('La pièce tourne... \n Et elle tombe coté **' + coin + '**.');
    };
    if (message.content === prefix + "ping") {
        var startTime = Date.now();
     message.channel.sendMessage("Calcul en cours...").then((message) => {
      var endTime = Date.now();
        message.edit("Bot : " + Math.round(endTime - startTime) + " ms\nAPI : "+Math.round(bot.ping)+" ms");
       })
   }
   if(message.author.bot) return;
             if(message.content.startsWith(prefix + "userinfo") || message.content.startsWith(prefix + "ui")) {
           
               let usera = message.mentions.members.first();
               if(!usera) return message.channel.send("Précise moi un utilisateur");
               let gameName = usera.presence.game ? usera.presence.game.name : "None";
           
           
               var embed = new Discord.RichEmbed()
               .setAuthor(usera.user.tag, usera.user.avatarURL)
               .addField("ID de l'utilisateur", usera.id, true)
               .addField("Pseudo", usera.user.username, true)
               .addField("Status actuel", usera.presence.status, true)
               .addField("Jeu", gameName, true)
               .addField("Quand à t'il(elle) join ?", usera.joinedAt, true)
               .setTimestamp()
               .setColor(0x0f7fa6)
               .setThumbnail(usera.user.avatarURL);
               message.channel.send({embed});
           
               console.log("'L'info d'utilisateur à été demandé dans le serveur '" + message.guild.name + "' par " + message.author.username + " (" + message.author.id + ")");
           }


   if(message.content.startsWith(prefix + "purge")) {
       if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission.");

       let args = message.content.split(" ").slice(1);

       if(!args[0]) return message.channel.send("Précise moi un nombre de messages.")
       message.channel.bulkDelete(args[0]).then(() => {
           message.channel.send(`${args[0]} messages ont été supprimés.`)
       }
    )
   }

   if (message.content === prefix + "help") {
    var help = new Discord.RichEmbed()
    .setTitle(`Salut à toi ${message.author.username} !`)
    .setColor("#120D16")
    .setDescription("Voici le menu d'aide !")
    .setImage("https://cdn.discordapp.com/attachments/508105906261721108/510264359541538826/hyperdimension-neptunia-victory-1.jpg")
    .setThumbnail("https://cdn.discordapp.com/attachments/508105906261721108/510264225180942346/5788f566eafcef6b0d2eafb9ca3a59b5650fec1c_hq.jpg")
    .addField("Tout marche avec le préfixe r!", "**help:** Affiche ce menu\n**fiche:** a venir lorsque mis à jour.\n**ping:** Permet de voir si je lag.. (Si je lag, faut taper mon développeur, c'est sa faute !)\n**debug (Utilisation développeur.):** Affiche les stats actuelles du bot.\n**ui:** Permet d'avoir des infos sur un utilisateur.\n**dev:** Infos sur mon développeur d'amour ❤\n**roll:** Fait tourner une pièce.\n**xpstat:** Pour savoir l'xp accumulée sur le serv (nombres de messages)\n**chat:** Vous affiche aléatoirement l'image d'un piti chat\n**chien:** Vous affiche aléatoirement l'image d'un piti chien\n**panda:** les pandas c'est la vie !\n**meme:** G3T M3M3D")
    .addField("Partie Staffs", "**purge:** Pour delet les messages\n**warn @mention raison:** Permet de warn un utilisateur.\n**seewarns @mention:** Voir les warns d'un utilisateur.\n**deletewarns @mention numéro du warn (Utiliser seewarns):** Pour delet un warn.")
    .addField("NSFW channels Only !", "**neko:** Bahhh, une neko (ou deux :D)\n**furry:** Furryyyyyy :D\n**gneko:** Gif de nekoooo NEEKOOOOO :3\n**hentai:** Hum, euhh, mon dev veux pas que j'en parle (lis la note en bas de page de la photo quand tu ferras la commande :3 Mais chuuuttt)\n**trap:** It's a trap !\n**yuri:** YURRRRRIIIIIIIII :3")
    .addField("Fun", "**chatouille:** AH AH AH AH AH AH AH AH AH **Rigole**")




    message.channel.send({embed: help});
  }})
