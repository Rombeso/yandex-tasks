// https://playcode.io/874531

const obj = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: {a: 1},
    key7: {b: {d: 2}},
};

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    let result = (typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]'
    )
    return result
}

function isArrayOrObject(value) {
    return isArray(value) || isObject(value)
}

function getKey(key, parentKey) {
    return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data, parentKey) {
    const result = []
    // for(const [key, value] of Object.entries(data))
    Object.entries(data).forEach(([key, value]) => {
        if (isArrayOrObject(value)) {
            result.push(...getParams(value, getKey(key, parentKey)))
        } else {
            result.push([getKey(key, parentKey), String(value)]);
        }
    })
    console.log('getParams:', result)
    return result
}

function queryStringify(data) {
    if (!isObject(data)){
        throw Error('input must be an object')
    }

  let result =  getParams(data).map(arr => arr.join('=')).join('&');
    console.log('queryStringify:', result)
    return result


}

export default queryStringify

queryStringify(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'