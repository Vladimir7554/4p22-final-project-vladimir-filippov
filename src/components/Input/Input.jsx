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
    } = props

    const isTextArea = type === 'textarea'
    const Component = isTextArea ? 'textarea' : 'input'
    const onlyInputProps = { type }
    const onlyTextAreaProps = {}
    const extraProps = isTextArea ? onlyTextAreaProps : onlyInputProps

    return (
        <>
            <label className={`${isLabelHidden ? 'visually-hidden' : ''}`} htmlFor={id}>
                {label}
            </label>

        <Component
            className={`${className} input`}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
            {...extraProps}
        />
        </>
    )
}

export default Input