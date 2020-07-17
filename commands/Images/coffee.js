const Command = require('../../main/command');

module.exports = class CoffeeComand extends Command {
  constructor(main) {
    super(main, {
      name: "coffee",
      category: "Image Generation",
      help: "Da Vinci or Dr. Roman needs coffee!"
    });
  }
  run(message, args, prefix) {
      if (this.main.util.rand(0, 1)) {
          message.channel.send('', {file: {attachment: "https://i.imgur.com/K3KfZ91.jpg", name: 'Dr Roman'}});
      } else message.channel.send('', {file: {attachment: "https://i.imgur.com/HFs9ORR.jpg", name: 'Da Vinci'}});
   }
}
