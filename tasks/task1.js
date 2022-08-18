// Инверсия объекта
// Напишите функцию, которая принимает объект и возвращает новый объект, где:
// ключи — значения исходного объекта,
// значения — ключи исходного объекта.
// Поля исходного объекта — строки или числа.

// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

// Превратите ключи или пары ключ-значение исходного объекта в массив.
// Нужно пройти по массиву, переставить местами ключи значения исходного объекта и аккумулировать их в новый объект.
// Подумайте, какой метод массива даёт возможность вернуть одно результирующее значение.

function invert(obj) {

    // let keys = [];
    // let values = [];
    // for (let key in obj) {
    //     keys.push(key);
    //     values.push(obj[key]);
    // }

    let keys = Object.keys(obj);
    let values = Object.values(obj);


    let result = {};

    for (let key in keys) {
        result[values[key]] = keys[key]
    }

    return result

}

// Самое котроткое решение

// function invert(obj) {
//     return Object
//         .entries(obj)
//         .reduce((acc, [key, item]) => ({ ...acc, [item]: key }), {});
// }


// invert({a: '1', b: '2', c: '3'})
console.log(invert({a: 'va', b: 'vb', c: 'vc'}))