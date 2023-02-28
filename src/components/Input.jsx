export const Input = ({ label, type, value, id, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  )
}
