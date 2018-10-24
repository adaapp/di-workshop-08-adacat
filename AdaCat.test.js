var chai = require('chai')
var expect = chai.expect

var AdaCat = require('./AdaCat')

describe('AdaCat', function() {
  it('is a class', function() {
    var myCat = new AdaCat()
    expect(myCat).to.be.an.instanceOf(AdaCat)
  })

  describe('#constructor', function() {
    it('takes name and sets it as an attribute', function() {
      var myCat = new AdaCat('taffy')
      expect(myCat.name).to.equal('taffy')
    })

    it('takes owner and sets it as an attribute', function() {
      var myCat = new AdaCat('buttons', 'alex')
      expect(myCat.owner).to.equal('alex')
    })
  })

  describe('#getDescription', function() {
    it('returns the name and owner in a nicely formatted string', function() {
      var myCat = new AdaCat('decking', 'alex')
      var result = myCat.getDescription()
      expect(result).to.equal('decking is a cat. they belong to alex.')
    })
  })
})
