import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code above with your phone.');
});

client.on('ready', () => {
  console.log('Client is ready!');
  const numbers = ['6281229990696@c.us', '6282243768419@c.us', '6287835000107@c.us'];
  const message = 'Hello, this is an automated message! | Testing ES6 Format';
  numbers.forEach((number) => sendMessage(number, message));
});

const sendMessage = (to, message) => {
  client
    .sendMessage(to, message)
    .then((response) => console.log('Message sent successfully:', response))
    .catch((error) => console.error('Error sending message:', error));
};

client.initialize();
