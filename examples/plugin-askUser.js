const TeleBot = require('../');

const bot = new TeleBot({
    token: process.env.TELEGRAM_BOT_TOKEN,
    usePlugins: ['askUser']
});

// On start command
bot.on('/start', msg => {

    const id = msg.from.id;

    // Ask user name
    return bot.sendMessage(id, 'What is your email?', {ask: 'email'});

});

// Ask name event
bot.on('ask.email', msg => {

    const id = msg.from.id;
    const name = msg.text;

    // Ask user age
    return bot.sendMessage(id, `Nice to meet you, ${ name }! What is your bitshare id?`, {ask: 'bitshare'});

});

// Ask age event
bot.on('ask.bitshare', msg => {

    const id = msg.from.id;
    const age = Number(msg.text);
    
        // Ask user age
    return bot.sendMessage(id, `Nice to meet you, ${ name }! What is your Ethereum Wallet Address?`, {ask: 'erc20'});


});

// Ask age event
bot.on('ask.erc20', msg => {

    const id = msg.from.id;
    const age = Number(msg.text);
    
        // Ask user age
    return bot.sendMessage(id, `Nice to meet you, ${ name }! What is your Ethereum Wallet Address?`, {ask: 'erc20'});


});

bot.start();
