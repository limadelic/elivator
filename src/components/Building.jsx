import {useState, useEffect} from 'react'
import Floor from './Floor'
import Shaft from './Shaft'
import Up from './Up'
import Down from './Down'
import Car from './Car'
import Wall from './Wall'
import { DOOR_CLOSE } from '../constants'

export default function Building({floors}) {
  const [hoverUp, setHoverUp] = useState(null)
  const [hoverDown, setHoverDown] = useState(null)
  const [hoverShaft, setHoverShaft] = useState(null)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const height = 400
  const floorHeight = height / floors
  const label = (i) => i === 0 ? 'L' : i
  const openDoors = () => setDoorsOpen(true)

  useEffect(() => {
    if (doorsOpen) {
      const timer = setTimeout(() => setDoorsOpen(false), DOOR_CLOSE * 1000)
      return () => clearTimeout(timer)
    }
  }, [doorsOpen])

  const isTop = (i) => i === floors - 1
  const isLobby = (i) => i === 0

  return (
    <div className="building">
      {Array.from({length: floors}).map((_, i) => (
        <Floor key={i} number={i} height={floorHeight}>
          {isTop(i) ? (
            <Down floor={i} side="left" onClick={() => {}} highlighted={hoverUp === i} />
          ) : (
            <Up floor={i} side="left" onClick={openDoors} highlighted={hoverUp === i} />
          )}
          <Wall
            side="left"
            hover={() => setHoverUp(i)}
            unhover={() => setHoverUp(null)}
            click={(e) => e.currentTarget.previousSibling.click()}
          />
          <Shaft
            label={label(i)}
            highlighted={hoverShaft === i}
            onMouseEnter={() => setHoverShaft(i)}
            onMouseLeave={() => setHoverShaft(null)}
            onClick={openDoors}
          >
            {isLobby(i) && <Car doorsOpen={doorsOpen} />}
          </Shaft>
          {isLobby(i) ? (
            <Up floor={i} side="right" onClick={() => {}} highlighted={hoverDown === i} />
          ) : (
            <Down floor={i} side="right" onClick={() => {}} highlighted={hoverDown === i} />
          )}
          <Wall
            side="right"
            hover={() => setHoverDown(i)}
            unhover={() => setHoverDown(null)}
            click={(e) => e.currentTarget.previousSibling.click()}
          />
        </Floor>
      ))}
    </div>
  )
}
