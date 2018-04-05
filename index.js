const getProductOfAllIntsExceptAtIndex = require('./src/productOfAllOtherNumbers')
const args = process.argv.slice(2)

if (args.length > 1) {
  if (args[0] === 'q1') {
    const inputArray = args.slice(1).map((arg) => parseInt(arg))
    const result = getProductOfAllIntsExceptAtIndex(inputArray)
    const outputMessage = result.length ? result : 'Not enough values'

    console.log(outputMessage)
  }
} else {
  console.log('USAGE: q1 <space separated list of numbers>. Eg: q1 1 7 3 4')
}
