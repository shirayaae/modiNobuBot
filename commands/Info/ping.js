const Command = require('../../main/command');

module.exports = class PingCommand extends Command {
  constructor(main) {
    super(main, {
      name: "ping",
      category: "Bot Info",
      help: "Poke the bot, see if it's alive"
    });
  }
  run(message, args, prefix) {
    message.channel.send('Ping...').then(msg => {
      message.channel.send(`Pong! It took ${msg.createdTimestamp - message.createdTimestamp}ms. Hearbeat ping is ${Math.round(this.main.client.ping)}ms`);
    });
  }
}
