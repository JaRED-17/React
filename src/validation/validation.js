class Validation {
    static checkEmpty = (field) => !field || field === ''

    static emptyError = () => {
        return {
            success: false,
            error: 'empty',
            errorCode: 1
        }
    }

    static email = (email) => this.checkEmpty(email) ? this.emptyError() : { success: true }

    static password = (password) => this.checkEmpty(password) ? this.emptyError() : { success: true }

    static firstName = (firstName) => this.checkEmpty(firstName) ? this.emptyError() : { success: true }

    static lastName = (lastName) => this.checkEmpty(lastName) ? this.emptyError() : { success: true }
}

export default Validation