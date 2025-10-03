export default function Floor({ number, height, children }) {
  return (
    <div className="floor" style={{ height }}>
      {children}
    </div>
  )
}
