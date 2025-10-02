import '../css/Cabin.css'

export default function Cabin({ position }) {
  return <div className="cabin" style={{ bottom: position }} />
}
