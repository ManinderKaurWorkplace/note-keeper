/**
 * @method getUniqueId : To get unique id value
 * @returns {string}
 */
export const getUniqueId = () => {
    return Math.random().toString(36).slice(2);
};

export default getUniqueId;
