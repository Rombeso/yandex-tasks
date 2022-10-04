// https://playcode.io/880130

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
    if (!data) {
        throw new Error('Не переданы данные!');
    }
    let result = '?'
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            result += `${key}=${value.join(',')}&`
        } else {
            result += `${key}=${value}&`
        }
    }
    return result.slice(0,-1)
}

class HTTPTransport {
    get = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.GET});
    };
    post = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT});
    };
    delete = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.GET});
    };
    put = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT});
    };

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options) => {

        const {method, timeout = 5000, data} = options;
        //---
        // console.log('timeout', timeout)
        // console.log('options', options)
        console.log('data', data)
        console.log('data', JSON.stringify(data))
        // console.log('queryStringify(data) ', queryStringify(data))
        // console.log('newData', data)
        // console.log('all:', method, data, url)
        // console.log('url:', url + data)
        //---
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (method === METHODS.GET || method === METHODS.DELETE) {
                xhr.open(method, !!data ? url + queryStringify(data) : url);
            } else {
                xhr.open(method, url);
            }
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.timeout = timeout;
            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data || method === METHODS.DELETE) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        })
    };
}

const transport = new HTTPTransport();

transport.get('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
    console.log(result.response);
});

transport
    .post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }},
    )
    .then((result) => {
        console.log(result.responseText);
    });

transport
    .put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        },
    })
    .then((result) => {
        console.log(result.responseText);
    });

transport.delete('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
    console.log(result.responseText);
});