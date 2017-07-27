var exports = module.exports = {};

exports.isOneKeyword = (word, keys) => {
    if (keys.length == 0) return false;
    return keys.includes(word);
}