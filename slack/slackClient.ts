import * as request from 'request';

const gifs = [
  'https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif',
  'https://media.giphy.com/media/E5jCN5tsN21Ec/giphy.gif',
  'https://media.giphy.com/media/l2QZZMUmvtFYYBUWY/giphy.gif',
  'https://media.giphy.com/media/arGdCUFTYzs2c/giphy.gif',
  'https://media.giphy.com/media/arGdCUFTYzs2c/giphy.gif'
];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomGif(): string {
  return gifs[getRandomInteger(0, gifs.length)];
}

export function sendToSlack(name: string) {
  const slackUrl = process.env['SlackUrl'];

  var options = {
    uri: slackUrl,
    method: 'POST',
    json: {
      text: `It is ${name}'s birthday today!`,
      attachments: [
        {
          fallback: `A fun gif for ${name}'s birthday!`,
          color: '#9F255A',
          title: 'Birthday gif',
          image_url: getRandomGif()
        }
      ]
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      throw `Request to slack failed: ${error}`;
    }
  });
}
