const TelegramApi = require('node-telegram-bot-api');
const token = '5910319940:AAGmyCDpIfUafT7yVD8OBlFVFs38ha8J_Eg';
const bot = new TelegramApi(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие' },
        { command: '/name', description: 'Как меня зовут?' },
        { command: '/price', description: 'Стоимость услуг' },
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendPhoto(chatId, '/img/NatashaKoshel_bot_sticker.png');
            return bot.sendMessage(chatId, `Привет, ${msg.from.first_name} ${msg.from.last_name ? msg.from.last_name : ''}! Добро пожаловать в телеграм бот мастера мужского маникюра и педикюра`)
        }
        if (text === '/price') {
            return bot.sendMessage(chatId, `Услуги мужского маникюра и педикюра: 1000$ бла-бла-бла`)
        }
        if (text === '/name') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name ? msg.from.last_name : ''}! А меня Наташа! Очень приятно.`)
        }
        return bot.sendMessage(chatId, `Я тебя пока что не понимаю, но я учусь быть умной!`)
    })
}

start();