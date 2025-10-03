export default function Car({ position }) {
  return (
    <div className="car" style={{ bottom: position, background: 'yellow' }}>
      <div className="car-door-left" style={{ left: '2px' }} />
      <div className="car-door-right" style={{ right: '2px' }} />
    </div>
  )
}
