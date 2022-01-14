import React from 'react'
import Error from '../../components/Error'
import Field from '../../components/Field'
import Button from '../../components/Button'
import PropTypes from 'prop-types'
import Validation from '../../validation'

class Form extends React.Component {
    static propTypes = {
        fields: PropTypes.array,
        name: PropTypes.string,
        formClassName: PropTypes.string,
        hasError: PropTypes.bool,
        api: PropTypes.func
    }
    state = {
        fieldsHasError: {}
    }

    componentDidMount = () => {
        const { fields } = this.props
        let result = {}

        fields.forEach(field => { result[field.name] = false })
        this.setState({ fieldsHasError: result })
    }

    isEmpty = (object) => Object.keys(object).length === 0

    getFormValues = (event) => {
        const { fields } = this.props
        let result = {}

        fields.forEach(field => { result[field.name] = event.target[field.name].value })
        return result
    }

    isValidationSuccess = (values) => {
        const { fields } = this.props
        let success = true
        let result = {}

        fields.forEach(field => {
            const isFieldValidateSuccess = Validation[field.name](values[field.name]).success

            if (!isFieldValidateSuccess) success = false
            result[field.name] = !isFieldValidateSuccess
        })

        this.setState({ fieldsHasError: result })

        return success
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { api } = this.props
        const values = this.getFormValues(event)

        if (!this.isValidationSuccess(values)) {
            return
        }

        api(values)
    }

    get showError () {
        const { fieldsHasError } = this.state
        const { fields, hasError } = this.props
        let result = false

        if (this.isEmpty(fieldsHasError)) return false

        fields.forEach(field => {
            if (!result) {
                result = fieldsHasError[field.name] ? fieldsHasError[field.name] : false
            }
        })

        return hasError && !result
    }

    showWarning = (name) => {
        const { fieldsHasError } = this.state

        return this.isEmpty(fieldsHasError) ? false : fieldsHasError[name]
    }

    render () {
        const { fields, name, formClassName } = this.props
        const { showError } = this

        return (
            <div className={formClassName}>
                <form onSubmit={this.onSubmit}>
                    <Error show={showError} errorCode={1} />
                    <div className='Form'>
                        {fields.map(field => <Field key={field.id} type={field.type} name={field.name} showWarning={this.showWarning(field.name)} value={field.value || ''} />)}
                    </div>

                    <div className='Buttons'>
                        <Button type='submit' className='primary' name={name} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form