// https://lodash.com/docs/4.17.15#last
// Gets the last element of array.

export function last(list) {
    if (Array.isArray(list)) {
        let arrLength = list.length == null ? 0 : list.length;
        return arrLength ? list[arrLength - 1] : undefined;
    } return undefined

}