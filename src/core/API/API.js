class API {
    constructor () {
        this.loading = false
        this.error = false
        this.errorMessage = null
        this.response = null
        this.getLoading = this.getLoading.bind(this)
        this.setLoading = this.setLoading.bind(this)
        this.getError = this.getError.bind(this)
        this.setError = this.setError.bind(this)
        this.getErrorMessage = this.getErrorMessage.bind(this)
        this.setErrorMessage = this.setErrorMessage.bind(this)
        this.getResponse = this.getResponse.bind(this)
        this.setResponse = this.setResponse.bind(this)
        this.getStatus = this.getStatus.bind(this)
        this.call = this.call.bind(this)
    }

    /* loading */
    getLoading = () => this.loading;
    setLoading = flag => { this.loading = flag }

    /* error */
    getError = () => this.error;
    setError = flag => { this.error = flag }

    /* errorMessage */
    getErrorMessage = () => this.errorMessage
    setErrorMessage = message => { this.errorMessage = message }

    /* response */
    getResponse = () => this.response
    setResponse = response => { this.response = response }

    getStatus = () => ({
        response: this.getResponse.bind(this),
        loading: this.getLoading.bind(this),
        error: this.getError.bind(this),
        errorMessage: this.getErrorMessage.bind(this)
    });

    call = (url, init = null, defaultValue = '', type = 'json') => {
        this.setLoading(true)
        this.setError(false)
        this.setErrorMessage(null)
        return fetch(url, init)
            .then(response => {
                return response.status === 200
                    ? response[type]()
                    : defaultValue
            })
            .then(response => {
                this.setResponse(response)
                this.setLoading(false)
                return response
            })
            .catch(error => {
                this.setResponse(null)
                this.setLoading(false)
                this.setError(true)
                this.setErrorMessage(error.message)
                console.error(error.message)
            })
    }
}

export default API