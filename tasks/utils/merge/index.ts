// https://playcode.io/880134

type Indexed<T = any> = {
    [key in string]: T;
};


function namespace(arg: string, value: unknown) {
    const arr = arg.split('.')
    return arr.reduceRight((acc, el, index) => {
        let newObj: Indexed = {}
        newObj[el] = acc
        return newObj
    }, value as any)
}

function merge(lhs: Indexed,  rhs: Indexed): Indexed {
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

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object') {
        object
        return object
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }
    const pathObject: Indexed = namespace(path, value);

    return merge(object as Indexed, pathObject)
}

export default set