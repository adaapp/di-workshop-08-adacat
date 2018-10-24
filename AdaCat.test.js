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
  })

  describe('#getDescription', function() {
    it('returns the name and owner in a nicely formatted string', function() {
      var myCat = new AdaCat('decking', 'alex')
      var result = myCat.getDescription()
      expect(result).to.equal('decking is a cat. they belong to alex.')
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
  })
})
