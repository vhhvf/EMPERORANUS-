let media = './media/menus/telefutaclub.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
Nuestro grupo de Telegram!
Link: https://t.me/FutabuClub
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://t.me/FutabuClub', 'ENTRAR | JOIN ðĪ ', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)}

handler.command = /^telegram|grupodetelegram|linktelegram$/i
handler.exp = 35
export default handler
