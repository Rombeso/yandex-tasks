type PlainObject<T = unknown> = {
    [k in string]: T;
}

function isObject(value: unknown): value is PlainObject {
    let result = (typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]'
    )
    return result
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
    return isArray(value) || isObject(value)
}

function getKey(key: string, parentKey?: string) {
    return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: PlainObject | [], parentKey?: string) {
    const result: [string, string][] = [];

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

function queryStringify(data: PlainObject): string | never {
    if (!isObject(data)){
        throw Error('input must be an object')
    }
    let result =  getParams(data).map(arr => arr.join('=')).join('&');
    console.log('queryStringify:', result)
    return result
}