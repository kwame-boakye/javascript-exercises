const getTheTitles = function(books) {
    let ans = [];
    for (let i = 0; i < books.length; i++) {
        ans.push(books[i].title)
    }
    return ans
};

// Do not edit below this line
module.exports = getTheTitles;
