// https://lodash.com/docs/4.17.15#head
// Gets the first element of array.

export function first(list) {
    if (!Array.isArray(list)) {
        return undefined
    }
    return list.length ? list[0] : undefined;
}