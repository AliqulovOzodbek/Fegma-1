      TELEGRAM_BOT_TOKEN = '6505832273:AAH2jJ1gvhlZOhchMG2oSqUu15qc_24VOug';
      const TeleBot = require('telebot');
      const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
      // const chatIds = [];
      bot.on('text', (msg) => msg.reply.text('Kelgan habar: ' + msg.text));

      bot.start();


// const form = document.querySelector("#form");

//   form.addEventListener("submit",(e) => {
//     e.preventDefault();

//     vor Text1 = document.getElementById("Text1").value;
//     vor Text2 = document.getElementById("Text2").value;

//     var token = "6505832273:AAH2jJ1gvhlZOhchMG2oSqUu15qc_24VOug";

//     console.log(Text1,Text2)
//   })

