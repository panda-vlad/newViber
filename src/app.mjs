import dotenv from 'dotenv'
import express from 'express'
import ViberBot from 'viber-bot'

import {  definiteLogger } from './helpers/index.mjs'

dotenv.config()

// destructure when you use .mjs to take capabilities from viber-bot
const { Bot, Events, Message } = ViberBot

const app = express()
const bot = new Bot({
  definiteLogger,
  authToken: process.env.BOT_ACCOUNT_TOKEN,
  name: '<PRINT_NAME_HERE>',
  avatar: null,
})

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) => {
    try {
    //   scenarious.has('YOUR COMMAND') && scenarious.get('YOUR COMMAND')(onFinish, Message, userProfile.name)
    } catch (e) {
      logger.info('error ', e.stack())
    }
  })

  bot.on(Events.MESSAGE_RECEIVED, (message, response) => {
    try {
     // some keys 
    } catch (e) {
      definiteLogger(e)
    }
  })
  

app.use('/viber/webhook', bot.middleware())

app.listen(process.env.PORT, () => {
  bot.setWebhook(`${process.env.URL}/viber/webhook`)
})
