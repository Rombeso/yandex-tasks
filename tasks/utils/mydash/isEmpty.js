// https://playcode.io/880114/

function isEmpty(value) {
    console.log('value', value)
    if (value === null) {
        return true
    }

    if (typeof value === 'object') {
        if (Object.getPrototypeOf(value) === Object.getPrototypeOf(new Map()) ||
            Object.getPrototypeOf(value) === Object.getPrototypeOf(new Set())
        ) {
            return false
        }
    }

    const result =
        typeof (value) == 'boolean' ||
        typeof (value) == 'number' ||
        value === undefined ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
        ||
        (typeof value === 'object' && Object.keys(value).length === 0)

    console.log('result', result)
    return result
}