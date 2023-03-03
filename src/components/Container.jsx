/*-------------------------------------------------------------------
|  🐼 React FC Container
|
|  🐯 Purpose: Configurable container component.
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

export const Container = ({
  as: Element = 'div',
  children,
  className = 'bg-secondary',
  ...rest
}) => {
  return (
    <Element {...rest} className={`custom-container ${className}`}>
      {children}
      <p>and this is a default text !</p>
    </Element>
  )
}
