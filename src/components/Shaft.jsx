export default function Shaft({ label, children, highlighted, onMouseEnter, onMouseLeave }) {
  return (
    <div className="shaft" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <div className="shaft-label" style={{color: highlighted ? '#ff4500' : '#fff'}}>{label}</div>
    </div>
  )
}
