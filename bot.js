const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`=help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
  client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help-games") {
	  message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
          اوامر الالعاب
❖-rps ~ حجر ورقة مقص
❖-speed ~ اسرع كتابة
❖-quas ~ اسئلة عامة
❖-نكت ~ نكت 
❖-لعبة فكك ~ فكك
❖-عواصم عشوائية ~ عواصم
❖-لعبة كت تويت ~ كت تويت
❖-roll <number> ~ قرعة
❖-لو خيروك بطريقة حلوة ~ لو خيروك
❖-فوائد ونصائح  ~ هل تعلم
❖-يعطيك عقابات قاسية ~ عقاب   `)
  
	By:@MuhammadHassan_77#2032 
   message.author.sendEmbed(embed)
    
   }
   }); 

client.login(process.env.BOT_TOKEN);
