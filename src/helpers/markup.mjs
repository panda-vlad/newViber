import { KeyboardGenerator } from './KeyboardGenerator.mjs'

export const commands = {
    // to use function Factory2 params should like:
    // commandName: 'commandName',
}

export const buttons = {
    // initialKeyboard: () => [
    //     {
    //       text: 'text',
    //       actionBody: commands.commandName,
    //       cols: 6,
    //     },
    //   ],

    // Example
    goBack: () => [
        {
          text: '◀️Go back',
          actionBody: commands.goBack,
          cols: 6,
        },
      ],
}
// keybord that will user see
export const menus = {
    // Example
    goBack: KeyboardGenerator(buttons.goBack())
}