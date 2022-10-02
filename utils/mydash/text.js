var value = new Map();// тут может быть Map / WeakSet / WeakMap

// let value = '123';



function test(value) {
    value.set("1", "str1");

    if (typeof value === 'object') {
    if (Object.getPrototypeOf(value) === Object.getPrototypeOf(new Map())) {
        console.log(value.size)
        return false

    }
}

return true
}

console.log(test(value))

