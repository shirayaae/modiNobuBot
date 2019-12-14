const Command = require('../../main/command');

module.exports = class GangnamCommand extends Command {
  constructor(main) {
    super(main, {
      name: "gangnam1",
      category: "AT1",
      help: "lmoa gangnam "
    });
  }
  run(message, args, prefix) {
    message.channel.send('', {file: {attachment: "http://i.imgur.com/Cks4eRP.gif", name: 'GANGNAM1'}});
  }
}