export default function Car({ position }) {
  return (
    <div className="car" style={{ bottom: position }}>
      <div className="car-door-line" />
    </div>
  )
}
