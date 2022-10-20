// https://playcode.io/874525

// 1. Проверяем что объект массив
function isArray(value) {
    return Array.isArray(value);
}

// 2. Проверяем, что это объект
function isObject(value) {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[Object Object]'
}

function isArrayOrObject(value) {
    return isArray(value) || isObject(value)
}

// Проверяем все дочерние значения объектов
function isEqual(left, right) {
// Сравниваем количество ключей объектов и масивов
    if (Object.keys(left).length !== Object.keys(right).length) {
        return false;
    }
    for (const [key, value] of Object.entries(left)) {
        const newValue = right[key];
        if (isArrayOrObject(value) && isArrayOrObject(newValue)) {
            if (isEqual(left, newValue)) {
                continue;
            }
            return false
        }
        if (value !== newValue) {
            return false
        }
    }

    return true
}


const a = {a: 1};
const b = {a: 1};
isEqual(a, b); // true

console.log(isEqual(a, b))