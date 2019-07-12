import { papyrus } from './papyrus.mjs'
import { commands, menus } from './markup.mjs'

const contextTree = [
    // Example of one of possible obj of context
    // {
    //     scope: commands.toShockingFacts,
    //     previousScope: commands.toShockingFacts,
    //     keyboard: menus.intro,
    //     papyrus: papyrus.getShokingFacts,
    //   },
]

class Context {
    constructor() {
      this.events = {}
      this.ctx = {
        scope: null,
        previousScope: null,
        question: null,
        name: null,
        phone: null,
        contactWay: null,
      }
      this.tree = contextTree
    }
  
    getContext(property = false) {
      if (property) {
        if (Reflect.has(this.ctx, property)) return this.ctx[property]
        return null
      }
      return this.ctx
    }
  
    setContext(obj) {
      Object.keys(obj).forEach(item => {
        if (Reflect.has(this.ctx, item)) return (this.ctx[item] = obj[item])
        return null
      })
    }
  
    clearContext() {
      Object.keys(this.ctx).forEach(item => (this.ctx[item] = null))
    }
  
    allowUserInput(textStatus = false) {
      this.ctx.commandsOnly = !textStatus
    }
  
    checkUserInputAvailability(scope) {
      if (!scope) return null
      const inputAvailability = this.tree.find(node => node.scope === scope).inputMethod
      return inputAvailability || null
    }
  
    getNode(scope) {
      if (!scope) return null
      return this.tree.find(node => node.scope === scope) || null
    }
  
    getParentNode() {
      if (!this.ctx.previousScope) return null
      return this.tree.find(node => node.scope === this.ctx.previousScope) || null
    }
  
    getAll() {
      return this.ctx
    }
  }
  export const ctxManager = new Context()
  