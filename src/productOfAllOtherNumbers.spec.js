const chai = require('chai')
const expect = chai.expect

const getProductOfAllIntsExceptAtIndex = require('./productOfAllOtherNumbers')

describe('getProductOfAllIntsExceptAtIndex', () => {
  it('should calculate the products correctly', () => {
    expect(getProductOfAllIntsExceptAtIndex([1, 7, 3, 4])).to.have.ordered.members([84, 12, 28, 21])
    expect(getProductOfAllIntsExceptAtIndex([0])).to.have.ordered.members([])
    expect(getProductOfAllIntsExceptAtIndex([0, 0])).to.have.ordered.members([0, 0])
    expect(getProductOfAllIntsExceptAtIndex([0, 1])).to.have.ordered.members([1, 0])
    expect(getProductOfAllIntsExceptAtIndex([0, 1, 2])).to.have.ordered.members([2, 0, 0])
    expect(getProductOfAllIntsExceptAtIndex([-1, 2])).to.have.ordered.members([2, -1])
    expect(getProductOfAllIntsExceptAtIndex([-1, 0, 2])).to.have.ordered.members([0, -2, 0])
    expect(getProductOfAllIntsExceptAtIndex([-1, -2, -3])).to.have.ordered.members([6, 3, 2])
    expect(getProductOfAllIntsExceptAtIndex([-1, -7, 3, 4])).to.have.ordered.members([-84, -12, 28, 21])
  })
})
