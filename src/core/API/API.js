import { makeObservable, observable, action } from 'mobx'

class API {
    constructor () {
        this.loading = true
        this.error = false
        this.errorMessage = null
        this.response = null
        makeObservable(this, {
            loading: observable,
            setLoading: action.bound
        })
    }

    /* loading */
    getLoading = () => this.loading
    setLoading = flag => { this.loading = flag }

    /* error */
    getError = () => this.error
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
    })

    call = (url, init = null, defaultValue = '', type = 'json') => {
        this.setResponse(null)
        if (!this.getLoading()) {
            this.setLoading(true)
        }
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