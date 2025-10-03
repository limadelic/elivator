export default function Car({ position, doorsOpen }) {
  return (
    <div className="car" style={{
      bottom: position,
      background: doorsOpen ? 'yellow' : '#555'
    }}>
      {doorsOpen ? (
        <>
          <div className="car-door-left" style={{ left: '2px' }} />
          <div className="car-door-right" style={{ right: '2px' }} />
        </>
      ) : (
        <div className="car-door-line" />
      )}
    </div>
  )
}
