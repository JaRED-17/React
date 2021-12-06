class API {

    static loading = false;
    static error = false;
    static errorMessage = '';

    /* loading */
    static getLoading = () => this.loading;
    static setLoading = flag => this.loading = flag;

    /* error */
    static getError = () => this.error;
    static setError = flag => this.error = flag;

    /* errorMessage */
    static getErrorMessage = () => this.errorMessage;
    static setErrorMessage = message => this.errorMessage = message;

    static callAPI = (url, init = null, defaultValue = '', type = 'json') => {
        this.setLoading(true);
        this.setError(false);
        this.setErrorMessage('');
        return fetch(url, init)
            .then(response => {
                return response.status === 200
                    ? response[type]()
                    : defaultValue
            })
            .then(response => {
                this.setLoading(false);
                return response;
            })
            .catch(error => {
                this.setLoading(false);
                this.setError(true);
                this.setErrorMessage(error.message);
                console.error(error.message);
            });
    }
}

export default API;