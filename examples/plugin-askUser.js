const TeleBot = require('../');

const bot = new TeleBot({
    token: process.env.TELEGRAM_BOT_TOKEN,
    usePlugins: ['askUser']
});

//var a;
//var b;

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
    //a = name;

    // Ask user age
    console.log("id ", id);
    return bot.sendMessage(id, `Nice to meet you, ${ name }! What is your bitshare id?`, {ask: 'bitshare'});

});

// Ask age event
bot.on('ask.bitshare', msg => {

    const id = msg.from.id;
    const bitshareid = msg.text;
    //b = bitshareid;
    
        // Ask user age
    return bot.sendMessage(id, `Your bitshare id address, ${ bitshareid }! What is your Ethereum Wallet Address?`, {ask: 'erc20'});


});

// Ask age event
bot.on('ask.erc20', msg => {

    const id = msg.from.id;
    const address = msg.text;
    
        // Ask user age

    return bot.sendMessage(id, `your ethereum wallet address is, ${ address }! Please check all information and type confirm`, {ask: 'confirm'});
});

// Ask age event
bot.on('ask.confirm', msg => {

    const id = msg.from.id;
    const address = msg.text;
    
        // Ask user age

    return bot.sendMessage(id, `Your information is submitted, ${ a }, ${ b }!`);
});

//bot.start();
bot.polling()
