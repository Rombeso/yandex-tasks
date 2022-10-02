// https://playcode.io/880113/



function rangeRight(start, end, step) {
    console.log('start', start, end, step);
    if (end === undefined) {
        end = start;
        start = 0;
    }
    step = step === undefined ? (start < end ? 1 : -1) : step;

    return range(start, end, step, true);
}

function range(start, end, step, isRight = false) {
    if (!isRight) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        step = step === undefined ? (start < end ? 1 : -1) : step;
    }
    console.log('total', start, end, step);
    let ind = -1;
    let amountItems = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    let total = new Array(amountItems);

    while (amountItems--) {
        total[isRight ? amountItems : ++ind] = start;
        start += step;
    }
    console.log(total);
    return total;
}