export default function Shaft({ label, highlighted, selected, onMouseEnter, onMouseLeave, onFloorSelect }) {
  const color = selected ? '#ff4500' : (highlighted ? '#ff4500' : '#fff')
  return (
    <div className="shaft" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onFloorSelect} data-testid={label}>
      <div className="shaft-label" style={{color}}>
        {label}
      </div>
    </div>
  )
}
