class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
  }

  getDescription() {
    return this.name + ' is a cat. they belong to ' + this.owner + '.'
  }
}

module.exports = AdaCat
