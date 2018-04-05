/**
* Calculates products of all other values in a number array
* The function works by calculating the product of all the values in the array
* and then by dividing that product by each number in the array.
* @param {Array <number>} input - the number array for which the products of other values are to be calculated
* @return {Array <number>} a new number array which contains the product of all other values except for the current index
*/

const getProductOfAllIntsExceptAtIndex = (input) => {
  let productOfAllOtherNumbers = []

  /* Will only work if the input array has atleast two values */
  if (input && input.length > 1) {
    const productOfAllNumbers = productOfValues(input)
    const hasAZeroValue = productOfAllNumbers === 0

    /* If there is a zero value in the array, calculate the product of non zero values as well */
    const productOfNonZeroNumbers = hasAZeroValue ? productOfValues(input.filter((number) => number !== 0)) : 0

    /* Create the resultant array by dividing the product of all array values by each value */
    /* If a value is zero, the product value set for all other values in the resultant array will be zero */
    productOfAllOtherNumbers = input.map((number) => number !== 0 ? (productOfAllNumbers / number) : productOfNonZeroNumbers)
  }

  return productOfAllOtherNumbers
}

/**
* Helper function which reduces an integer array to product of it elements
* @param {Array <number>} arr - array to be reduced
* @return {number} the product value, 0 if the array is empty
*/
const productOfValues = (arr) => arr.length ? arr.reduce((product, number) => product * number) : 0

module.exports = getProductOfAllIntsExceptAtIndex
