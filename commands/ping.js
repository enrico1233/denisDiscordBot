module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.send('Pong :ping_pong:');
    message.channel.send(`**${ping}**`);
	},
};