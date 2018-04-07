const huejay = require('huejay');

function createUser(ip) {
  console.log(`Hue found at: ${ip}`);
  const client = new huejay.Client({
    host: ip,
    port: 80, // Optional
    username: 'macbook', // Optional
    timeout: 15000, // Optional, timeout in milliseconds (15000 is the default)
  });
  const user = new client.users.User();
  client.users
    .create(user)
    .then((user) => {
      console.log(`New user created - Username: ${user.username}`);
    })
    .catch((error) => {
      if (error instanceof huejay.Error && error.type === 101) {
        return console.log('Link button not pressed. Try again...');
      }

      console.log(error.stack);
    });
}

huejay
  .discover({
    strategy: 'all',
  })
  .then(bridges => createUser(bridges[0].ip));
