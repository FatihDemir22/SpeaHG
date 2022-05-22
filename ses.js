const Discord = require('discord.js');
const tokens = [
    "OTczNjczNjIxOTQ2MDA3NjIy.G7urJh.d1E_4obYnCPOwsm7l-owU8QLFDDcBMAi2m8PtU",
    "OTczNjczOTA1NDEzODIwNDE2.GDwp0p.x1oll-e3LKALaJZwf2DANBC7SsbT3EnsQOVY_E",
    "OTc3MjMyNDc4MTA2NDM1NjU2.GIQU_U.gKhH6KOlV7LegsHhwOkWaaAeliLU6rRVTN3Xv0",
    "OTc3ODM2MDg2NzcwNDE3NzE0.GpoaMl.J3jFgYFOl8HlnhAxZFsQeVd7c1LWzcJU6lGRv0"
];
const chnls = [
    "973706382371061770",
    "973706387592982570",
    "977835668665434142",
    "977835726039298069",
];
const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        console.log(client.user.username);
        await client.user.setActivity({
            name: "S P E A W E R A 'e Hoş Geldiniz!",
            type: "LISTENING"
        });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("973706033530830868").rawPosition)) { //Yetkili Id'si
                ses = await concon.play('./yetkili.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("973706248178511872").rawPosition) {//Hosgeldin ıd'si
                ses = await concon.play('./hosgeldin.mp3');
                selamlı.push(cur.member.user.id);
            }
        }
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })
}
