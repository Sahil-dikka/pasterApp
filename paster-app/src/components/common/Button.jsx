import React from 'react'

const Button = ({
  children,
  title = '',
  size = '',
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  ...rest
}) => {
  // Map size prop to Bootstrap class
  const sizeClass =
    size === 'small' ? 'btn-sm'
    : size === 'large' ? 'btn-lg'
    : '';

  return (
    <button
      type={type}
      className={`btn btn-primary shadow-sm px-4 rounded-3 fw-semibold ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children || title}
    </button>
  )
}

export default Button