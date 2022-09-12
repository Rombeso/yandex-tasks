function range(start , end, step) {
    let result = []
    if (arguments.length == 1) {
        if (start >= 0) {
            return [...new Array(start).keys()]
        }
        let count = start + 1
        while(count <= 0) {

            result.push(count)
            ++count
        }
        return result
    }
}

console.log(range(-1 ))
