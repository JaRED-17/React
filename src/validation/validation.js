class Validation {
    static email = (email) => {
        if (!email || email === '') {
            return {
                success: false,
                error: 'empty',
                errorCode: 1
            }
        }

        return { success: true }
    }

    static password = (password) => {
        if (!password || password === '') {
            return {
                success: false,
                error: 'empty',
                errorCode: 1
            }
        }

        return { success: true }
    }
}

export default Validation