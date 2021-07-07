/**
 * @method cloneArrayOfObjects : To clone simple array of objects
 *
 * @param {Array} data : Array type data input
 *
 * @return {Array} : Clone of given array input
 */
export const cloneArrayOfObjects = (data) => {
    return (Array.isArray(data) && data.map((val) => Object.assign({}, val))) || [];
};

export default cloneArrayOfObjects;
