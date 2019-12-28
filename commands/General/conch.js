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
      ], 
      caseSensitive: false
    })
  }
   run(message, args, prefix) {
	const responses = [
		"Yes",
		"No",
		"Maybe someday",
		"I don't think so",
		"Try asking again",
		"Sure",
		"Probably not",
		"It is certain",
		"Outlook not so good",
		"Outlook good",
		"Doubtful",
		"Without a doubt",
		"Go ahead",
		"Don't"
	]; 
    const randomIndex = Math.floor(Math.random() * responses.length);
    if (args != '') message.channel.send(responses[randomIndex]);
    else message.channel.send("Please ask a question");
  }
}
