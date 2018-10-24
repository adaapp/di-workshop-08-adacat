var readlineSync = require('readline-sync')
var AdaCat = require('./AdaCat')

class CommandLineApp {
  constructor() {
    this.cat = null
  }

  start() {
    this.setup()

    var shouldContinue = true
    while (shouldContinue) {
      this.showCatStatus()
      shouldContinue = this.runCommand()
    }
  }

  setup() {
    var owner = readlineSync.question('What is your name? ')
    var name = readlineSync.question('What would you like to name your cat? ')

    this.cat = new AdaCat(name, owner)
  }

  runCommand() {
    var commandIndex = readlineSync.keyInSelect(
      ['Feed cat', 'Play with cat', 'Tell cat to nap', 'Wake up cat'],
      'What would you like to do?'
    )

    if (commandIndex === -1) {
      console.log('byeeeee')
      return false
    } else if (commandIndex === 0) {
      console.log('You feed your cat.')
      this.cat.feed()
    } else if (commandIndex === 1) {
      console.log('You play with your cat.')
      this.cat.play()
    } else if (commandIndex === 2) {
      console.log('Your cat curls up to sleep.')
      this.cat.nap()
    } else if (commandIndex === 3) {
      console.log('Your cat wakes up, yawns, and stretches.')
      this.cat.wakeUp()
    } else {
      console.log("I don't understand :(")
    }

    return true
  }

  showCatStatus() {
    console.log('')
    console.log(' /\\___/\\')
    console.log('( o   o )')
    console.log('(  =^=  )')
    console.log('(        )')
    console.log('(         )')
    console.log('(          ))))))))))) ')
    console.log('')
    var catDescription = this.cat.getDescription()
    console.log(catDescription)
  }
}

module.exports = CommandLineApp
