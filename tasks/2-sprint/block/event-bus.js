class EventBus {
    constructor() {
        this.listeners = {};
    }
// Методы on и off принимают название события, на которое необходимо подписаться,
// а также функцию-обработчик, которая будет вызвана, когда придёт оповещение
// о событии.
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
        console.log('on', this.listeners)
    }
// Здесь и воспользуемся тем, что функции передаются по ссылке, — отфильтруем массив
// обработчиков, просто сравнив каждый из них с переменной callback.
// То есть, чтобы отписать обработчик от события, нужно передать в метод off ту же
// самую ссылку.
    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback

        );
        console.log('off', this.listeners)
    }

// Этот метод принимает название события, о котором нужно оповестить подписчиков,
// а также дополнительные данные. Если события не существует (то есть никто ещё на
// него не подписывался), выбросим ошибку. Если у события есть подписчики,
// пробежимся по ним и вызовем каждый, передав данные.
    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function (listener) {
            listener(...args);
        });
        console.log('emit', this.listeners)
    }
}