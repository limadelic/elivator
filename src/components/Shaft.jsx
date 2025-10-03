export default function Shaft({ label, children, highlighted, selected, onMouseEnter, onMouseLeave, onFloorSelect }) {
  const color = selected ? '#ff4500' : (highlighted ? '#ff4500' : '#fff')
  return (
    <div className="shaft" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <button
        className="shaft-label"
        data-testid={label}
        style={{color}}
        onClick={onFloorSelect}
      >
        {label}
      </button>
    </div>
  )
}
