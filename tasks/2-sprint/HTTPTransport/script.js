const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    let result = '?'
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            result += `${key}=${value.join(',')}&`
        } else {
            result += `${key}=${value}&`
        }
    }
    return result.substring(0, result.length - 1);
}

console.log(queryStringify({a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}))

class HTTPTransport {
    get = (url, options = {}) => {

        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options, timeout = 5000) => {
        const {method, data} = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHOD.GET) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}