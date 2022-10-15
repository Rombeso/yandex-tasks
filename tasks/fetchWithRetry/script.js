const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};

function queryStringify(data) {
    let result = '?';

    Object.keys(data).forEach((key, i, arr) => {
        result += `${key}=${data[key]}`;
        if (arr.length > 1 && i !== arr.length - 1) {
            result += `&`;
        }
    });

    return result;
}

class HTTPTransport {
    get = (url, options = {}) => {
        let urlAddon = '';
        if (options.data) {
            urlAddon = queryStringify(options.data)
        }

        return this.request(`${url}${urlAddon}`, {...options, method: METHODS.GET}, options.timeout);
    };

    put = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    request = (url, options, timeout = 1000) => {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('Нет метода')
            }
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                resolve(xhr);
            }
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

function fetchWithRetry(url, options) {
    const {retries = 1} = options;
    function errorCatch(err) {
        const counter = retries - 1;
        if (counter > 0) {
            console.log('counter', counter)
            return fetchWithRetry(url, { ...options, retries: counter})
        } else {
            throw err
        }
    }

    return new HTTPTransport().get(url, options).catch(errorCatch)
}

const testUrl =  'https://chats.ru'
const testData = {
    retries: 3,
    data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
}

fetchWithRetry(testUrl, testData)