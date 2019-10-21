/*
 *   Copyright (c) 2019 Ford Motor Company
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

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
