class API {
    constructor () {
        this.loading = false
        this.error = false
        this.errorMessage = ''
        this.getLoading = this.getLoading.bind(this)
        this.setLoading = this.setLoading.bind(this)
        this.getError = this.getError.bind(this)
        this.setError = this.setError.bind(this)
        this.getErrorMessage = this.getErrorMessage.bind(this)
        this.setErrorMessage = this.setErrorMessage.bind(this)
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

    getStatus = () => ({
        loading: this.getLoading(),
        error: this.getError(),
        errorMessage: this.getErrorMessage()
    });

    call = (url, init = null, defaultValue = '', type = 'json') => {
        this.setLoading(true)
        this.setError(false)
        this.setErrorMessage('')
        return fetch(url, init)
            .then(response => {
                return response.status === 200
                    ? response[type]()
                    : defaultValue
            })
            .then(response => {
                this.setLoading(false)
                return response
            })
            .catch(error => {
                this.setLoading(false)
                this.setError(true)
                this.setErrorMessage(error.message)
                console.error(error.message)
            })
    }
}

export default API