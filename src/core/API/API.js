class API {

    static callAPI = (url, init = null, defaultValue = '', type = 'json') => {
        return fetch(url, init)
            .then(response => {
                return response.status === 200
                    ? type === 'json'
                        ? response.json()
                        : response.text()
                    : defaultValue
            })
            .then(response => response)
            .catch(error => console.error(error.message));
    }
}

export default API;