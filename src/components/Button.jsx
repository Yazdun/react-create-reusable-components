/*-------------------------------------------------------------------
|  🐼 React FC Button
|
|  🐯 Purpose: Configurable button component.
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

export const Button = ({
  onClick,
  disabled,
  className,
  primary,
  danger,
  children,
}) => {
  return (
    <button
      className={`${danger && 'bg-danger'} ${
        primary && 'bg-primary'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
