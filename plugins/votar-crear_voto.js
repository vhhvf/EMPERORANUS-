let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}


if (m.isGroup) {
//if (!text) throw await conn.reply(m.chat, `${mg}๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐พ๐๐๐ฝ๐๐ ๐๐ผ ๐๐ผ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐ผ๐พ๐๐๐\n\n๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐ผ๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐๐`, fkontak,  m)	
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
return await conn.sendButton(m.chat, `๐ ูุง ูุฒุงู ููุงู ุชุตููุช ูุนูู ูู ูุฐู ุงููุฌููุนุฉ !!`, wm, null, [
['๐งพ  | ุฅููุงุก ุงูุชุตููุช', `${usedPrefix}delvoto`]], fkontak, m)}
  
await conn.sendButton(m.chat, ` | ุชุตููุช ุฌุฏูุฏ โด๏ธ\n\n*ููุดุฆ ุงูุชุตููุช* : @${conn.getName(m.sender)}\n*ุณุจุจ ุงูุดุงุก ุชุตููุช:* ${text}`, `
*ููููู ุงุณุชุฎุฏุงู ุงูุฃูุงูุฑ ุฃู ุงูุฃุฒุฑุงุฑ ุฃุฏูุงู ููููุงู ุจุฅุฌุฑุงุก ุจุดุฃู ุงูุชุตููุช!!*

${htjava} ุฃุซูุงุก ุงูุชุตููุช ${htjava}
${dmenub} ุงู ููุช ุชูุงูู ุงูุชุจ :
${dmenub}  ${usedPrefix}sivotar
${dmenub2} โโโ โข ์ โข โโโ
${dmenub} ู ุงู ููุช ุชุนุงุฑุถ ุงูุชุจ :
${dmenub} ${usedPrefix}novotar
${dmenub2} โโโ โข ์ โข โโโ
${dmenub} ุฅุฐุง ููุช ุชุฑูุฏ ูุณุญ ุชุตููุท ุฃูุชุจ :
${dmenub}${usedPrefix}delvoto
${dmenub2} โโโ โข ์ โข โโโ
${dmenub} ุฐุง ููุช ุชุฑูุฏ ุฑูุงูู ุชุตููุท ุงูุชุจ :
${dmenub}${usedPrefix}vervotos
${dmenuf}`, null, [
['โ  | ุงูุชุตููุช ', `${usedPrefix}upvote`],
['โ  | ุงุนุงุฑุถ', `${usedPrefix}devote`],
['๐ฐ  | ุฏุนูุฉ ุงูุงุนุถุงุก', `${usedPrefix}pedirayuda โด๏ธ @${conn.getName(m.sender)} *ุฅููู ูุฏุนููู ููุชุตููุช!!*\n*ุงุณุชุฎุฏู ุงูุฃูุฑ* \n${usedPrefix}vervotos \n ูุฑูุงูู ุงูุชุตููุชุงุช `]
], fkontak, m) 
conn.vote[id] = [
text,
[],
[]
]
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|crear|iniciar|ุชุตููุช|\+)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.level = 4
handler.limit = 1

export default handler 
