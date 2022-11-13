function Book() {
    this.name = 'foo';
}

Book.prototype = {
    getName: function() {
        return this.name;
    }
}

var book = new Book();

// В этой строке определить метод getUpperName


book.__proto__ = {
    getUpperName() {
        return this.name.toUpperCase()
    }
}

console.log(book.getUpperName()); // 'FOO'
// console.log(Object.getPrototypeOf(book))
// console.log(book.getName()); // 'FOO'

console.log('Book', Book.prototype)
console.log('book', book.__proto__)
