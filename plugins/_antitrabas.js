//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "967771160204-730348571@g.us","inviteCode": "m","groupName": "P", "caption": '๐๐๐ ๐ผ๐ข๐๐๐๐ - ๐ฑ๐๐', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad mรกxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'ุฃูุง ูุณุช ูุณุคููุง ุ ูุง ูููููู ูุนู ุฃู ุดูุก :/'}`, author, ['[ ุฅููุงู ุชุดุบูู ููุงูุญุฉ ุงูุนูุจุงุช ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `ูุถุน ุนูุงูุฉ ููุฑูุกุฉ ุนูู ุงููุญุงุฏุซุฉ โ\n${"\n".repeat(400)}\n=> El nรบmero : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] ููุฏ ุฃุฑุณูุช ููุชู ูุตุง ูุญุชูู ุนูู ุงูุนุฏูุฏ ูู ุงูุฃุญุฑู ุงูุชู ูููู ุฃู ุชุชุณุจุจ ูู ูุดู ุงูุฃุฌูุฒุฉ`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] ูุชูููุฐ ุฅุฌุฑุงุกุงุช ุงูุญุฐู ุ ูุชุนูู ุนูู ุงููุงูู ุชุดุบูู ุงููุถุน ุงููููุฏ!')
    }
    return !0
}
