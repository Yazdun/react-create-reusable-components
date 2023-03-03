/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: Configurable input component.
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

export const Input = ({ label, placeholder, type, value, id, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
