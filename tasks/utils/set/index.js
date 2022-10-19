function namespace(arg, value) {
    const arr = arg.split('.')
    return arr.reduceRight((acc, el, index) => {
        let newObj = {}
        if (value && index === 1) {
            newObj[el] = value
        } else {
            newObj[el] = acc
        }
        return newObj
    },{})
}

function merge(lhs,  rhs) {
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

    return lhs;
}

export function set(object, path, value) {
    if (typeof object != 'object') {
        object
        return object
    }
    const pathObject = namespace(path, value);

    return merge(object, pathObject)

}



/**
 * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
 * set(3, 'foo.bar', 'baz'); // 3
 */
console.log()
set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
