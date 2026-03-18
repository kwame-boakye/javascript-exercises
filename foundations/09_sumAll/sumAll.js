const sumAll = function(num1, nums2) {
    sum = 0;
    mini = Math.min(num1, nums2);
    maxi = Math.max(num1, num2);

    if (mini < 0 || !Number.isInteger(mini) || !Number.isInteger(maxi)) {
        return 'ERROR';
    }

    for (let i = mini; i <= maxi; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
