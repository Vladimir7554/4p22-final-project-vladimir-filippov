import React from 'react'
import './Input.css'

const Input = (props) => {
    const {
        className = '',
        placeholder,
        value,
        onChange,
        name,
        id = name,
        label,
        isLabelHidden = true,
        type = 'text',
        error = '',
    } = props

    const isTextArea = type === 'textarea'
    const Component = isTextArea ? 'textarea' : 'input'
    const onlyInputProps = { type }
    const onlyTextAreaProps = {}
    const extraProps = isTextArea ? onlyTextAreaProps : onlyInputProps

    const hasError = Boolean(error)

    return (
        <>
            <label className={`${isLabelHidden ? 'visually-hidden' : ''}`} htmlFor={id}>
                {label}
            </label>

        <Component
            className={`${className} input ${hasError ? 'is-invalid' : ''}`}
            placeholder={placeholder}
            id={id}
            value={value}
            error={error}
            onChange={onChange}
            name={name}
            {...extraProps}
        />
            {hasError && <div className="error">{error}</div> }
        </>
    )
}

export default Input