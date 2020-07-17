const MQ = require('amqplib');

const config = {
  host: '127.0.0.1',
  port: '5672',
  username: 'cyw',
  password: '123456',
  heartbeat: 30,
  vhost: '/'
}

let client = await MQ.connect(config);
client.on('error', () => { });
client.on('close', () => { });


let channel = await client.createConfirmChannel();

let isExistsEx = await channel.checkExchange('exchange:time')

if (!isExistsEx) await channel.assertExchange('exchange:time', 'direct', { durable: true });

channel.bindQueue()

let isExistsQ = await channel.checkQueue('queue:time');
if (!isExistsQ) await channel.assertQueue('queue:time', { durable: true });

