const repeatString = function(sentence, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let res = '';
    for (let i = 0; i < num; i++) {
        res += sentence;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
