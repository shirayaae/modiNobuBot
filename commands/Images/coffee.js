const Command = require('../../main/command');
const Canvas = require('canvas');
const snek = require('snekfetch');

module.exports = class CoffeeComand extends Command {
  constructor(main) {
    super(main, {
      name: "coffee",
      category: "Image",
      args: [
        {
          name: "User Mention",
          desc: "Davinci or Dr. Roman needing coffee"
        }
      ],
      help: "Who needs coffee?"
    })
  }
  run(message, args, prefix) {
    message.guild.fetchMember(args).then(i => {
      if (this.main.util.rand(0, 1)) {
        {
          message.channel.send('', {file: {attachment: "https://i.imgur.com/K3KfZ91.jpg", name: 'Dr Roman'}});
        });
      } else message.channel.send('', {file: {attachment: "https://i.imgur.com/HFs9ORR.jpg", name: 'Da Vinci'}});
    });
  }
}
