import {useState} from 'react'
import Floor from './Floor'
import Shaft from './Shaft'
import Up from './Up'
import Down from './Down'
import Car from './Car'

export default function Building({floors}) {
  const [hoverUp, setHoverUp] = useState(null)
  const [hoverDown, setHoverDown] = useState(null)
  const [hoverShaft, setHoverShaft] = useState(null)
  const height = 400;
  const floorHeight = height / floors;
  const label = (i) => i === 0 ? 'L' : i

  return (
    <div className="building">
      {Array.from({length: floors}).map((_, i) => (
        <Floor key={i} number={i} height={floorHeight}>
          <div
            className="left-wall"
            onMouseEnter={() => setHoverUp(i)}
            onMouseLeave={() => setHoverUp(null)}
            onClick={() => {}}
          />
          <Up floor={i} onClick={() => {}} highlighted={hoverUp === i} />
          <Shaft
            label={label(i)}
            highlighted={hoverShaft === i}
            onMouseEnter={() => setHoverShaft(i)}
            onMouseLeave={() => setHoverShaft(null)}
          >
            {i === 0 && <Car doorsOpen={true} />}
          </Shaft>
          <div
            className="right-wall"
            onMouseEnter={() => setHoverDown(i)}
            onMouseLeave={() => setHoverDown(null)}
            onClick={() => {}}
          />
          {i === 0 ? (
            <div className="down-button" style={{color: hoverDown === i ? '#ff4500' : '#333'}}>▲</div>
          ) : (
            <Down floor={i} onClick={() => {}} highlighted={hoverDown === i} />
          )}
        </Floor>
      ))}
    </div>
  );
}
