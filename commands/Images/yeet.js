const Command = require('../../main/command');
const Canvas = require('canvas');
const snek = require('snekfetch');

module.exports = class YeetCommand extends Command {
  constructor(main) {
    super(main, {
      name: "yeet",
      category: "Image Generation",
      help: "Yeet someone!",
      args: [
        {
          name: "Target",
          desc: "The target of the yeet (he deserved it!)"
        }
      ],
      caseSensitive: false
    });
  }
  run(message, args, prefix) {
    snek.get("https://i.imgur.com/baA53vc.jpg").then(r => {
      const canvas = new Canvas(958, 670);
      const ctx = canvas.getContext('2d');
      const img_bg = new Canvas.Image();
      img_bg.onload = function () {
        if (message.mentions.members.first()) {
          let mentions = message.mentions.members.first();
          if (mentions.id == "184369428002111488") args = message.user.username;
          else args = mentions.displayName;
        } else {
          args = args.join(' ');
          if (args.toLowerCase() == "aister") args = message.author.username;
        }
        ctx.drawImage(img_bg, 0, 0, 958, 670);
        ctx.font = "bold 60px Arial";
        ctx.fillStyle = "white";
        let metrics = ctx.measureText(args);
        ctx.strokeStyle = "black";
        ctx.strokeText(args, 120, 175);
        ctx.fillText(args, 120, 175);
        message.channel.send("", {file: {attachment:canvas.toBuffer()}});
      };
      img_bg.src = r.body;
    });
  }
}
