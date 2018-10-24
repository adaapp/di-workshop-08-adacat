var chai = require('chai')
var expect = chai.expect

var AdaCat = require('./AdaCat')

describe('AdaCat', function() {
  it('is a class', function() {
    var myCat = new AdaCat('jeff', 'alex')
    expect(myCat).to.be.an.instanceOf(AdaCat)
  })

  describe('#constructor', function() {
    it('takes name and sets it as an attribute', function() {
      var myCat = new AdaCat('taffy', 'alex')
      expect(myCat.name).to.equal('taffy')
    })

    it('takes owner and sets it as an attribute', function() {
      var myCat = new AdaCat('buttons', 'alex')
      expect(myCat.owner).to.equal('alex')
    })

    it('sets the hunger attribute to 5', function() {
      var myCat = new AdaCat('greg', 'alex')
      expect(myCat.hunger).to.equal(5)
    })

    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('denim', 'alex')
      expect(myCat.isSleeping).to.equal(false)
    })

    it('sets the size attribute to 30', function() {
      var myCat = new AdaCat('toyota', 'alex')
      expect(myCat.size).to.equal(30)
    })
  })

  describe('#getDescription', function() {
    it('includes the name and owner', function() {
      var myCat = new AdaCat('decking', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[0]).to.equal('decking is a cat. they belong to alex.')
    })

    it('includes the hunger level', function() {
      var myCat = new AdaCat('socks', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[1]).to.equal('their hunger level is 5/10.')
    })

    it('tells you if the cat is awake', function() {
      var myCat = new AdaCat('marmite', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[4]).to.equal('marmite is awake.')
    })

    it('tells you if the cat is asleep', function() {
      var myCat = new AdaCat('mc splinters', 'alex')
      myCat.nap()
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[4]).to.equal('Shh! mc splinters is sleeping.')
    })

    it('includes the cat size', function() {
      var myCat = new AdaCat('oak', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[2]).to.equal('they weigh 30 tonnes.')
    })

    it('includes the health level', function() {
      var myCat = new AdaCat('professor dangle', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[3]).to.equal('their health is 25/30.')
    })
  })

  describe('#feed', function() {
    it('decreases the hunger attribute by 1', function() {
      var myCat = new AdaCat('mittens', 'alex')
      myCat.feed()
      expect(myCat.hunger).to.equal(4)
    })

    it('does not decrease hunger below 0', function() {
      var myCat = new AdaCat('leggy', 'alex')
      myCat.hunger = 0
      myCat.feed()
      expect(myCat.hunger).to.equal(0)
    })

    it('increases size when hunger is less than three', function() {
      var myCat = new AdaCat('pencil', 'alex')
      myCat.hunger = 2
      myCat.feed()
      expect(myCat.size).to.equal(31)
    })
  })

  describe('#nap', function() {
    it('sets the isSleeping attribute to true', function() {
      var myCat = new AdaCat('apple', 'alex')
      myCat.nap()
      expect(myCat.isSleeping).to.equal(true)
    })
  })

  describe('#wakeUp', function() {
    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('brick', 'alex')
      myCat.isSleeping = true
      myCat.wakeUp()
      expect(myCat.isSleeping).to.equal(false)
    })
  })

  describe('#play', function() {
    it('increases hunger by 3', function() {
      var myCat = new AdaCat('zebra', 'alex')
      myCat.play()
      expect(myCat.hunger).to.equal(8)
    })

    it('will not increase hunger above 10', function() {
      var myCat = new AdaCat('jorts', 'alex')
      myCat.hunger = 9
      myCat.play()
      expect(myCat.hunger).to.equal(10)
    })

    it('decreases size when hunger is above 7', function() {
      var myCat = new AdaCat('ada', 'alex')
      myCat.hunger = 8
      myCat.play()
      expect(myCat.size).to.equal(29)
    })
  })

  describe('#getHealth', function() {
    it('is 30 when size = 30, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(30)
    })

    it('is 25 when size = 25, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })

    it('is 25 when size = 35, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })

    it('is 5 when size = 5, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })

    it('is 5 when size = 55, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })

    it('is 0 when size = 65, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 65
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })

    it('is 23 when size = 30, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(23)
    })

    it('is 18 when size = 25, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })

    it('is 18 when size = 35, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })

    it('is 2 when size = 5, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })

    it('is 2 when size = 55, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })

    it('is 0 when size = 1, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 1
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })
  })
})
