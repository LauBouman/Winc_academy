const isAdult = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function (age) {
    if (isAdult(age)) {
        return "Hello there"
    } else {
        return "Hey Kiddo";
    }
};

console.log(greeting(55));
console.log(greeting(8));

//With arrows 

const isAdultShort = age => age >= 18;

const greetingShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetingShort(55));
console.log(greetingShort(8));

//vat excerise 1


const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21));
console.log(calculatePriceIncludingVAT(2, 9));

//vat excersize 2

const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
