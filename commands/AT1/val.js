const Command = require('../../main/command');

module.exports = class ValCommand extends Command {
  constructor(main) {
    super(main, {
      name: "val",
      category: "AT1",
      help: "List of Enemies/Friends in Valorant"
    });
  }
  run(message, args, prefix) {
    message.channel.send('', {file: {attachment: "https://docs.google.com/spreadsheets/d/1KKne3VydVrIa782_Gzlx4p9DmvaXrDt4bcQoG52G0S8/edit?usp=sharing", name: 'INT LIST'}});
  }
}