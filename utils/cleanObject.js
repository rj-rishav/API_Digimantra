/**
 * @param {object} someObject 
 * @param {string[]} requiredArray
 * @return {object}
 */

export const cleanObject = (someObject, requiredArray) => {
    let returnObject = {}
    requiredArray?.map((item) => returnObject[item] = someObject[item])
    return returnObject;
}