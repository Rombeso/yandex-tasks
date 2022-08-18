// Zip
// Напишите функцию zip. Она принимает любое число объектов, а возвращает единственный объект, который содержит
// все поля исходных объектов. Если один и тот же ключ встречается в нескольких объектах, следует оставить то значение,
// что встретилось первым.

// Чтобы обойти все элементы массива и вернуть результирующее значение, используйте метод reduce.

function zip() {
    // Ваш код
    return [...arguments].reduce((acc, item) => {
        for (key in item){
            if (key in acc === false) {
                return {...acc, ...item}
            }
}})}

// Пример работы
const objects = [
    {foo: 5, bar: 6},
    {foo: 13, baz: -1} // foo - повторяющийся ключ
];

console.log(zip(...objects));
// { foo: 5, bar: 6, baz: -1 }

// .reduce((acc, [key, item]) => ({ ...acc, [item]: key }), {});


// Решение от Яндекса

// беглое решение из банка, но проверку хорошо бы другую точно
// const isObject = (checkValue) => {
//     return String(checkValue) === '[object Object]';
// };

// const zip = (...args) => {
//     return args.reduce((accumulator, object) => {
//         if (isObject(object)) {
//             for (const [key, value] of Object.entries(object)) {
//                 if (!accumulator.hasOwnProperty(key)) {
//                     accumulator[key] = value;
//                 }
//             }
//         }
//         return accumulator;
//     }, {});
// };