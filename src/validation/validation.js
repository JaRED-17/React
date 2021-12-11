class Validation {

    static email = (email) => {
        if (email === '') return {success: false, error: 'empty'}

        return {success: true}
    }

    static password = (password) => {
        if (password === '') return {success: false, error: 'empty'}

        return {success: true}
    }

}

export default Validation;