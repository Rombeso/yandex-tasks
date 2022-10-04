// https://lodash.com/docs/4.17.15#range
// Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
// A step of -1 is used if a negative start is specified without an end or step. If end is not specified,
// it's set to start with start then set to 0.
// https://playcode.io/880110/
function range(start, end, step = 1) {
    if (end === undefined && start !== undefined) {
        end = start;
        start = 0;
    }
    if (end < start && step > 0) {
        step = step * -1
    }
    const sizeStep = (step === 0) ? 1 : step
    const size = Math.abs(Math.ceil((end - start) / sizeStep))
    if (size === Infinity) {
        return []
    }
    const amountStep = (item, index) =>
        (step === 0) ? start : item + index * step

    return Array(size).fill(start).map(amountStep)
}

export { range };
// Не работает
// // 1. Получаем значение шагов с округлением и создаем массив из 5 пустых эл-тов
// const amountItems = Array(Math.ceil((end - start) / step));
// // 2. Заполняем массив одним и темже значением - start
// const filling = amountItems.fill(start);
// // 3. Преобразует каждое значение с использованием мат. шаг умножаем на индекс и вычитаем и больщего значения.
// const result = filling.map((item, index) => item + index * step)
// console.log(start, end, step)
// console.log(result)
// return result
// --- it works
// console.log(range(4))
// console.log(range(-4))
// console.log(range(1, 5))
// console.log(range(0, 20, 5))
// console.log(range(0))


// return Array(Math.ceil((end - start) / step)).fill(start).map((x, y) => x + y * step)

// Мой дурацкий метод который не прошёл проверку
// let result = [];
// if (arguments.length === 1) {
//     if (start >= 0) {
//         return [...new Array(start).keys()];
//     }
//     let count = start + 1;
//     while(count <= 0) {
//         result.push(count);
//         ++count;
//     }
//     return result
// } else if (arguments.length === 2) {
//     let count = start;
//     if (start === end) {
//      return result[0] = start;
//     } else if (start > end) {
//         while(count > end) {
//             result.push(count);
//             --count;
//         }
//         return result
//     } while(count < end) {
//         result.push(count);
//         ++count;
//     }
//     return result
// } else {
//     let count = start;
//     if (start === end) {
//         return result[0] = start;
//     } else if (start > end) {
//         while(count > end) {
//             result.push(count);
//             count = count-step;
//         }
//         return result
//     } while(count < end) {
//         result.push(count);
//         count = count+step;
//     }
//     return result
// }



