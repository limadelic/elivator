export default function Up({ floor, side, onClick, highlighted }) {
  const label = floor === 0 ? 'L' : floor
  return (
    <button
      className={`${side}-button`}
      data-testid={`${label}UP`}
      onClick={onClick}
      style={{color: highlighted ? '#ff4500' : '#333'}}
    >
      ▲
    </button>
  )
}
