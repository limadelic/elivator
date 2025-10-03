export default function Down({ floor, side, onClick, highlighted }) {
  const label = floor === 0 ? 'L' : floor
  return (
    <button
      className={`${side}-button`}
      data-testid={`${label}DOWN`}
      onClick={onClick}
      style={{color: highlighted ? '#ff4500' : '#333'}}
    >
      ▼
    </button>
  )
}
