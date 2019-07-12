// I think you will need it 
import { papyrus, logger, ctxManager, commands, menus } from '../helpers/index.mjs'


// One of the best practice to use it when you want to interactive with 'silly' buttons
// 'silly' buttons - use keys when user should no to write nothing but only press YOUR buttoms
const Factory2 = param => {
    try {
      // eslint-disable-next-line no-shadow
      return async (response, Message) => {
        await ctxManager.setContext({
          scope: commands[param],
          previousScope: ctxManager.getContext('scope'),
        })
        response.send(new Message.Text(papyrus[param], menus[param]))
      }
    } catch (e) {
      logger.info(e)
    }
  }
  export const scenarious = new Map()