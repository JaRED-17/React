class Validation {
    static isEmpty = (field) => !field || field === ''

    static emptyError = () => {
        return {
            success: false,
            error: 'empty',
            errorCode: 1
        }
    }

    static email = (email) => this.isEmpty(email) ? this.emptyError() : { success: true }

    static password = (password) => this.isEmpty(password) ? this.emptyError() : { success: true }

    static firstName = (firstName) => this.isEmpty(firstName) ? this.emptyError() : { success: true }

    static lastName = (lastName) => this.isEmpty(lastName) ? this.emptyError() : { success: true }
}

export default Validation