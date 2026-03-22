const getTheTitles = function(books) {
    let ans = [];
    for (let i = 0; i < books.length; i++) {
        ans.push(books[i].title)
    }
    return ans
};

// the method below is using the map() method to achieve the same logic as above
// const getTheTitles = function(books) {
//     return books.map(book => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;
