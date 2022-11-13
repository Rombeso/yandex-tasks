// Рекурсия

function sum(a) {
    debugger
    return function (b) {
        return a + b;
    }
}

const plus = sum(3)
console.log(plus(6))
console.log(sum(3))