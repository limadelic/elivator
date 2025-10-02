import '../css/Floor.css'

export default function Floor({ position }) {
  return <div className="floor" style={{ bottom: position }} />
}
