class API {

    static fetchData = (url, init, defaultValue) => {
        return fetch(url, init)
            .then(response => response.status === 200 ? response.json() : defaultValue)
            .then(response => response)
            .catch(error => console.error(error.message));
    }
}

export default API;