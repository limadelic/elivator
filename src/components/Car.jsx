import '../css/Car.css'

export default function Car({ position }) {
  return <div className="car" style={{ bottom: position }} />
}
