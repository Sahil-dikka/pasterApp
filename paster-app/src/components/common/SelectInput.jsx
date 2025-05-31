import React from 'react'

const SelectInput = ({
    label,
    name,
    value,
    onChange,
    options = [],
    className = '',
    error = '',
    ...rest 
}) => {
  return (
    <div className='mb-3'>
        <select
            className={`form-select shadow-sm rounded-3 ${error ? 'is-invalid' : ''} ${className}`}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            {...rest}
            >
            
            </select>
    </div>

  )
}

export default SelectInput