export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element {...rest} className={`test ${className}`}>
      {children}
    </Element>
  )
}
