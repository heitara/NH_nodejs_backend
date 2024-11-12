process.on('message', (message) => {
    console.log('User:', message.user);
    console.log('Message from parent:', message.message);
    process.send({ reply: 'Hello parent' });
});
  