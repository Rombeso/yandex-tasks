
function canGetCount(n){
    let count = n;

    function some() {
        if (count > 0) {
            console.log('yes')
        } else {
            console.log('no')
        }
        count--
    }
    return some
}

const getOne = canGetCount(2);



getOne()  // yes
getOne()  // yes
getOne()  // no