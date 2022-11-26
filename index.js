function receivesAFunction(callback) {
    return callback();
}

function returnsAnAnonymousFunction() {
    return function() {
        return "Hello ," + "world"
    }
}

function returnsANamedFunction() {
    return function add(num1, num2) {
        return num1 + num2;
    }
}