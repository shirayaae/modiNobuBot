const Command = require('../../main/command');

module.exports = class ConchCommand extends Command {
  constructor(main) {
    super(main, {
      name: "Conch",
      category: "General",
      help: "Ask the Magic Conch™",
      args: [
        {
          name: "Text",
          desc: "ALL HAIL THE MAGIC CONCH™ "
        }
      ]
    });
	const responses = [
		"Yes",
		"No",
		"Maybe someday",
		"I don't think so",
		"Try asking again",
		"Sure",
		"Probably not",
		" It is certain",
		"Outlook not so good",
		"Outlook good",
		"Doubtful",
		"Without a doubt",
		"Don't"
	];
	var rand = Math.floor(Math.random() * list.length);
    const randomIndex = Math.floor(Math.random() * responses.length);
	 message.channel.send(responses[randomIndex]);
}