class MyArray {
    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }

        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = allocate(initialSize);
        this.length = 0;
    }

    // Возвращает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    get(index){
        if (checkIndex(index, this.size)) {
            return this.size[index];
        }
    }

    // Устанавливает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    set(index, value) {
        if (checkIndex(index, this.size)) {
            this.memory[index] = value;
        }
    }

    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    // В противном случае — добавляет по индексу со сдвигом
    // всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Увеличивает выделенную память вдвое, если необходимо.
    // Возвращает новую длину массива.
    add(value, index) {
        // Если index не определён — добавляет в конец массива.
        if (index === undefined) {
           // debugger
            const additionMemory = addAllocate(this.size);
            this.memory = {...this.memory, ...additionMemory};
            this.memory[this.size] = value;
            this.size = countObj(this.memory)
            this.length = this.size;
        } else {
            // Увеличивает выделенную память вдвое, если необходимо.
            // Возвращает новую длину массива.
            // Добавляем по индексу
            if (index < 0) {
                throw new Error('Индекс не может быть меньше нуля');
            }
            else if (index >= this.size) {
                let additionMemory = {};
                for (let i = this.size; i < index; i = i * 2) {
                    console.log('i', i)
                    additionMemory = {...additionMemory, ...addAllocate(i)};
                }
                this.memory = {...this.memory, ...additionMemory};
                this.memory[index] = value;
                this.size = countObj(this.memory)
                this.length = this.size;
            } else {
                // В противном случае — добавляет по индексу со сдвигом
                // всех последующих элементов.
                let result = {};
                Object.entries(this.memory).forEach(([key, item]) => {
                    if (+key >= index) {
                        result[+key+1] = item
                    } else {
                        result[+key] = item
                    }
                    result[index] = value
                })
                this.memory = result
                this.size = countObj(this.memory)
                this.length = this.size;
            }
        }
    }

    // Удаляет элемент по индексу со сдвигом всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Возвращает новую длину массива.
    delete(index) {
        if (checkIndex(index, this.size)) {
            let result = {};
            Object.entries(this.memory).forEach(([key, item]) => {
                if (+key > index) {
                    result[+key-1] = item
                }
                if (+key < index){
                    result[+key] = item
                }
            })
            this.memory = result
            this.size = countObj(this.memory)
            this.length = this.size;
        }
    }
}




function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}

function checkIndex(index, size) {
    if (index < size && index >= 0) {
        return true
    } throw new Error('Индекс за пределами');
}

function addAllocate(size) {
    const memory = {};

    for (let i = size; i < size * 2; i++) {
        memory[i] = undefined;
    }

    return memory;
}

function countObj(object) {
    let count = 0;
    for (let key in object) {
        count++
    }
    return count
}


let myArray = new MyArray(5);
// console.log(myArray.get(1))

// myArray.set(1, 12)
// console.log('set:', myArray)

myArray.add(111)
console.log('add:',myArray)
// myArray.add(222,)
// console.log('add:',myArray)

// myArray.delete(1)
// console.log('del:',myArray)
