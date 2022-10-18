// https://playcode.io/874519

console.log(trim('  abc  ')); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
trim('\xA0foo'); // "foo"
trim('\xA0foo', ' '); // " foo"
trim('-_-ab c -_-', '_-'); // ab c

export function trim(str, arg) {
    let argum = '';
    if(arg) {
        argum = arg.split('').join('|');
    }

    let rtrim = `[\\s${argum}]`;

    let regexp = new RegExp(rtrim, 'g');
    let result = str.replace(regexp,'');

    return result;
}

['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']
