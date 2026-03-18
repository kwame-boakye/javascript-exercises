const reverseString = function(reverse) {
    let res = '';
    for (let i = reverse.length - 1; i >=0; i--) {
        res += reverse[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
