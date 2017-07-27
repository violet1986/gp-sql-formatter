var exports = module.exports = {};

exports.Convert = (inputArray, keywordsArray, compFunc, doFunc) => {
    return inputArray.map(word => {
        return compFunc(word.toUpperCase(), keywordsArray) ? doFunc(word) : word;  
    });
}

