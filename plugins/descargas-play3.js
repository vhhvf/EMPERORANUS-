import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*ππͺπ ππ¨π©π ππͺπ¨ππππ€? π₯π€π§ πππ«π€π§ ππ£ππ§ππ¨π ππ‘ ππ€π’ππ£ππ€ π’ππ¨ π£π€π’ππ§π πππ‘ πππ£πππ€π£*\n\n* ππππ’π₯π‘π€:*\n*${usedPrefix + command} Quevedo fernet*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: 'π΅ ΩΩΩ Ψ΅ΩΨͺΩ π΅' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: 'π₯ ΩΩΩ ΩΩΨ―ΩΩ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π ΩΩ Ψ§ΩΩΨͺΨ§Ψ¦Ψ¬ π' }, type: 1 }, ] 
let texto1 = `*β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝΨͺΨ΄ΨΊΩΩ ΩΩΨͺΩΩΨ¨β©ββ’β’β’α°±ββ*~*
ββπ *Ψ§ΩΨΉΩΩΨ§Ω:* ${title}
ββπ *ΩΨ―Ω Ψ§ΩΩΨ΄Ψ±:* ${publishedTime}
βββ *Ψ§ΩΩΨ―Ω:* ${durationH}
ββπ *Ψ§ΩΩΨ΄Ψ§ΩΨ―Ψ§Ψͺ:* ${viewH}
ββπ *Ψ§ΩΩΨ΅Ω:* ${description}
ββπ *Ψ§ΩΨ±Ψ§Ψ¨Ψ·:* ${urll}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ³β¦β’β’β’ββββ’ββ―β€`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'β πΏ ΨͺΨ΄ΨΊΩΩ ΩΩΨͺΩΩΨ¨', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `*β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝPΝΝΜΈLΝΜΈAΝΝΜΈYΝΝΜΈβ©ββ’β’β’α°±ββ*~*
ββπ *Ψ§ΩΨΉΩΩΨ§Ω:* ${title}
ββπ *ΩΩΨͺ Ψ§ΩΩΨ΄Ψ±:* ${published}
ββπ *Ψ§ΩΩΨ΄Ψ§ΩΨ―Ψ§Ψͺ:* ${views}
ββπ *Ψ§ΩΨ±Ψ§Ψ¨Ψ·:* ${url}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ³β¦β’β’β’ββββ’ββ―β€`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π ΩΩ Ψ§ΩΩΨͺΨ§Ψ¦Ψ¬ π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*Ψ§ΩΨͺΨΈΨ± ΩΨ­ΨΈΩ ΩΨͺΩ Ψ§Ψ±Ψ³Ψ§Ω Ψ§ΩΩΩΨ·ΨΉ Ψ§ΩΨ΅ΩΨͺΩ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[βππππβ] ππ§π§π€, π₯π€π§ πππ«π€π§ ππ£π©ππ£π©π πππ‘ π£πͺππ«π€*'}}}
handler.help = ['playdoc', 'play3', 'ΨͺΨ΄ΨΊΩΩ'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|ΨͺΨ΄ΨΊΩΩ|playdoc?$/i
handler.money = 80
handler.register = true
export default handler
