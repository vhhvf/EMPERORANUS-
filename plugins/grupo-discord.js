//let media = './media/menus/telefutaclub.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
Nuestro Server de Discord!
Link: https://discord.gg/UjdSaTESQG
`.trim()
  
conn.sendHydrated(m.chat, str, wm, null, 'https://discord.gg/UjdSaTESQG', 'ENTRAR | JOIN ðĪ ', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
], m,)}

handler.command = /^serverdis|serverdiscord|discord|grupodiscord|linkdiscord$/i
handler.exp = 35
export default handler
