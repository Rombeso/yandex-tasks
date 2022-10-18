// type Indexed<T = any> = {
//     [key in string]: T;
// };
// function merge(lhs: Indexed, rhs: Indexed): Indexed {

// https://playcode.io/874524

export function merge(lhs,  rhs) {
    for (let n in rhs) {
        if (!rhs.hasOwnProperty(n)) {
            continue;
        }
        if (typeof lhs[n] != 'object') {
            lhs[n] = rhs[n];
        } else if (typeof rhs[n] == 'object') {
            lhs[n] = merge(lhs[n], rhs[n]);
        }
    }
    console.log(lhs)
    return lhs;
}
// for (let n in rhs) {
//     if (typeof lhs[n] != 'object') {
//         lhs[n] = rhs[n];
//     } else if (typeof rhs[n] == 'object') {
//         lhs[n] = merge(lhs[n], rhs[n]);
//     } else {
//         lhs[n] = rhs[n];
//     }
// }
// console.log(lhs)
// return lhs;

merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
/*
{a: {b: {a: 2, c: 1,} }, d: 5,}
*/

