import React from 'react';

const Select = (props) => {
    const  {
        className = '',
        name,
        options,
        onChange,
        value,
    } = props

    return (
        <div className="{`${className` select}">
            <select
                name={name}
                onChange={onChange}
                value={value}
            >
                {options.map(({value, isSelected, label}) => (
                    <option
                        value={value}
                        key={value}
                    >
                        {label}
                    </option>
                    ))}
            </select>
        </div>
    );
};

export default Select;