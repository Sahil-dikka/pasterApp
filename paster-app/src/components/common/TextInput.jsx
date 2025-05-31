import React from 'react'

const TextInput = ({name,value,onChange,placeholder='',type='text',className='',error='',...rest}) => {
  return (
    <div>
    <input
        type={type}
        className={`form-control shadow-sm rounded-3 ${error ? 'is-invalid' : ''} ${className}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        {...rest}
      /></div>
  )
}

export default TextInput