const TelegramApi = require('node-telegram-bot-api');
const token = '5910319940:AAGmyCDpIfUafT7yVD8OBlFVFs38ha8J_Eg';
const bot = new TelegramApi(token, {polling: true});

const bd = [
    {
      card_title: 'Маникюр классический/аппаратный',
      card_time: 'время - 1 час',
      card_coast: 'стоимость - 1 500'
    },
    {
      card_title: 'Педикюр классический/аппаратный',
      card_time: 'время - 2 часа',
      card_coast: 'стоимость - 3 500'
    },
    {
      card_title: 'Медицинскиий маникюр',
      card_time: 'время - 1 час',
      card_coast: 'стоимость - 3 000'
    },
    {
      card_title: 'Медицинскиий педикюр',
      card_time: 'время - 1 час 30 минут',
      card_coast: 'стоимость - 5 000'
    },
];

const start = () => {

    bot.setMyCommands([
        { command: '/start', description: 'Приветствие' },
        { command: '/name', description: 'Как меня зовут?' },
        { command: '/price', description: 'Стоимость услуг' },
    ])

    bot.on('message', async msg => {
   
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text == '/start') {
            await bot.sendPhoto(chatId, './img/bot_img1.png'); 
            return bot.sendMessage(chatId, `Привет, ${msg.from.first_name} ${msg.from.last_name ? msg.from.last_name : ''}! Добро пожаловать в телеграм бот мастера мужского маникюра и педикюра`)
        }

        if (text == '/price') {
            return bot.sendMessage(chatId, `Прайс лист услуг мужского маникюра и педикюра: 

        ${bd[0].card_title}: 
        ${bd[0].card_time}
        ${bd[0].card_coast}

        ${bd[1].card_title}: 
        ${bd[1].card_time}
        ${bd[1].card_coast}

        ${bd[2].card_title}: 
        ${bd[2].card_time}
        ${bd[2].card_coast}

        ${bd[3].card_title}: 
        ${bd[3].card_time}
        ${bd[3].card_coast}

        `);
        }

        if (text == '/name') {
            return bot.sendMessage(chatId,
            `Тебя зовут ${msg.from.first_name} ${msg.from.last_name ? msg.from.last_name : ''}! Очень приятно.`)
        }

        return bot.sendMessage(chatId, `Я тебя пока что не понимаю, но я учусь быть умной!`)
    })
}

start();