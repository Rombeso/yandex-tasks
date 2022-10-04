console.log(namespace('a.b.c.d.e')) // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

function namespace(arg) {
    const arr = arg.split('.')
    return arr.reduceRight((acc, el, index) => {
       let newObj = {}
         newObj[el] = acc
        return newObj
    },{})
}
// export default namespace

// const namespace = (str: string): object =>
//     str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});