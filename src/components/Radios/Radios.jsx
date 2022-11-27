import React from 'react';

const Radios = (props) => {
    const {
        className = '',
        items = [],
        label,
        name,
        onChange,
    } = props

    return (
        <div className="radios">
            <div className="radios__label">{label}</div>
            <ul className="radios__list">
                {items.map(({ id, label, isChecked }) => (
                    <li className="radios__item" key={id}>
                        <label className="radios__radio">
                        <input
                            className="radios__control"
                            type="radio"
                            name={name}
                            id={id}
                            checked={isChecked}
                            onChange={() => onChange(id)}
                        />
                      <span className="radios__radio-label">{label}</span>
                    </label>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Radios;