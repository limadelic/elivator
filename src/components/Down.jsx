export default function Down({ floor, onClick, highlighted }) {
  return (
    <button
      className="down-button"
      data-testid="DOWN"
      onClick={onClick}
      style={{color: highlighted ? '#ff4500' : '#333'}}
    >
      ▼
    </button>
  )
}
