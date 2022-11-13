const obj = { x: 15 };

function first() {
   return this.x; // 15
}

function second() {
		return first.bind(obj)(); // Вернёт undefined, а нужно 15
}

//console.log(first())
console.log(second())