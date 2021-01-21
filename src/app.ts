/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { Telegraf } from 'telegraf';
import env from './.env';

const bot = new Telegraf(env.token);

bot.start((ctx) => {
  const { id } = ctx.update.message.from;
  if (id == '100287512') {
    ctx.reply('Ao seu dispor, mestre!');
  } else {
    ctx.reply('Sinto muito, mas eu só falo com meu mestre');
  }
});

bot.on('location', (ctx) => {
  const { location } = ctx.update.message;
  ctx.reply(`Entendido você está em Lat: ${location.latitude}, Lon: ${location.longitude}`);
});

bot.launch();
