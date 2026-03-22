const findTheOldest = function(ages) {
    const oldest = ages.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    });
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
