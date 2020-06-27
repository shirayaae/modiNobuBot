const Command = require('../../main/command');
const Canvas = require('canvas');
const snek = require('snekfetch');

module.exports = class IWCommand extends Command {
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
    args = message.mentions.users.first() || message.author;
    message.guild.fetchMember(args).then(i => {
      let avatar = i.user.avatarURL.split('?')[0];
      if (this.main.util.rand(0, 1)) {
        this.main.util.dust(avatar).then(attachment => {
          message.channel.send('', {file: {attachment: "https://i.imgur.com/K3KfZ91.jpg", name: 'Dr Roman'}});
        });
      } else message.channel.send('', {file: {attachment: "https://i.imgur.com/HFs9ORR.jpg", name: 'Da Vinci'}});
    });
  }
}
