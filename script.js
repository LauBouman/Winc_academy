const bigNumber = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(bigNumber(700));
console.log(bigNumber(47));
console.log(bigNumber(0));
console.log(bigNumber(477));

//This is a funciton that produces something because it does not use console log. 

const bouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageVisitor
) {
    if (ageVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(bouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(bouncerReaction(2000, 1999, 50)); // "come in"
console.log(bouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(bouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"

const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); // -1000

