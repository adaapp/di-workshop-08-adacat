class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
  }

  getDescription() {
    return this.name + ' is a cat. they belong to ' + this.owner + '.'
  }

  feed() {
    var hunger = this.hunger - 1
    if (hunger < 0) {
      hunger = 0
    }
    this.hunger = hunger
  }
}

module.exports = AdaCat
