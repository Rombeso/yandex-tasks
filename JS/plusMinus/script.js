Number.prototype.plus = function (n) {
    return this + n;
}
Number.prototype.minus = function (n) {
    return this - n;
}

console.log((2).plus(3).minus(1))

// (2).plus(3).minus(1) // 4