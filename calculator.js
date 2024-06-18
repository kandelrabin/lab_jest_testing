const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const modulus = function(a, b) {
    return a%b;
}

const isEven = (a) => {
    return a % 2 === 0;
};

const isOdd = (a) => {
    if (Number.isInteger(a)) {
        return a % 2 !== 0;
    } else{
        return false;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    isEven, 
    isOdd 
};
