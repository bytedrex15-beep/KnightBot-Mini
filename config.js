/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['255743140476','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Byte0XFF', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBD9l3rVaEFZlIgbMexwUQHFdWIeSigWWS0KBTv89wm0b99+mOm581Zr5slzTuZ3UJRJjSzUAeE7qHByhQT1S9JVCAhAasIQYTAEASQQCMDS55V/naotF1YOvbGm8mY53aXLPWKgGeYza5ou3lszbwv3DTyGoGpOWeL/JqBqraf2ouZykZSZGBcjq5gxLgepdj+/+7mT4ZQXE3aRr9U38OgjwgQnRaRWMcoRhpmFOgcm+GvwzcUotvlJWS+hpRO1TbGaiuEKzsbrxbbg0fbsOqOt7ur54mvwGemwg+S8mOj7Vbk/h4Pj2bgMML22rZpZph2fDKg4MJROjV7w6yQqUGAGqCAJ6b7MeydJFEZr3Wd3UqfJ8xlnasppvgqU0cVTp/IkMSEO+XyVTr8G/CjNdcqaajzaTDpjDdsmlG63u9Geu12kZDLc3KWZnlgeLf4K3MEfXkn/D++MIu58950aqOp9fpwrd7LQkCzyarffHpVVky+VA32YmM6k/Br8tN3qLFNdsJFJAbKutKvqsQdvyoFtiX+GbWOeit1gNVLKT/iQNPh3KI3BhSkl2ytSD3MHQ5HtKg7yiJNuZwc6d11KjZW6TQnWXP+asWdcKGh2zOiQU5MTjtS1Pxg0VeZkZ3+/19MA3a68HL09K0pRZwZAoB9DgFGU1ARDkpRFfzaZDAEMrmvkY0Se7IJYtWar1B401mhB0VRdRtFp79uBWB0OO0qn7tfr4T6PBuk78waGoMKlj+oaBUZSkxJ3C1TXMEI1EP78awgK1JKXbs9s9BCECa7JpmiqrITBh6gfl9D3y6Yg667w5X6BMBCoz2NESFJEdU9jU0Dsx8kVyTEkNRBCmNXoZ4EIowAIBDfoZ9PKZdDz7mmiuudWczAE+VOPJAACGLMsz0xohmJ4TmCpP+pvtz4srKpvBSJgCAqYP1XrCKJaTQNDkL0+Ujw74Tl6Sk0ojhv3f/uLx0/MfYoAEZhkNRCA7MjezUl1ddHBYkHpunyLRDkSwWeNH155iXHcStqoXM4aztq2g9FZ7jSGLlR7v9oO3meNXmhLyd3YI25Tv/1DECAAUTKNVL6MDBtd+NuJxYsN32pdq+GDQnF70uYestmEP68rLFabzf602VV2aJatHUq0L17HB6M2dG/rOmWmz6zrfa3J4lufLUDXxEe/JjuLWWPSbdqiLI6CQJTdZVs4R1qsNKvejVw3rX3FLW7sYm6ji7f3PHRjnBGL40G+dQ3eCO7e0eV29mkc03M8GVvlShFfLn52UfZjeiVPg/Xq9dswQc9h8EOl/1TzBbw3HfUY/hLjx3j5lxaVdlt3FXJKeGqSzA+vzK2O0fLYKhm1DZPwFFet52405TrI5uDx+GsIqgySsMQ5EECdnyAYAlw2vYXNIix/k0kWTVNxI7MvO4M1ET/bwktyVBOYV0CgeX7MsixH0a9XDi4rA9Zxz4DOiHkDHn8DLjFno2MHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
