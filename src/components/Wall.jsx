export default function Wall({ side, hover, unhover, click }) {
  return (
    <div
      className={`${side}-wall`}
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onClick={click}
    />
  )
}
