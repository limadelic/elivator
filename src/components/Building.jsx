import {useState, useEffect} from 'react'
import Floor from './Floor'
import Shaft from './Shaft'
import Up from './Up'
import Down from './Down'
import Car from './Car'
import Wall from './Wall'
import { DOOR_CLOSE, FLOOR_TRAVEL } from '../constants'

export default function Building({floors}) {
  const [hoverUp, setHoverUp] = useState(null)
  const [hoverDown, setHoverDown] = useState(null)
  const [hoverShaft, setHoverShaft] = useState(null)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [selectedFloor, setSelectedFloor] = useState(null)
  const [currentFloor, setCurrentFloor] = useState(0)
  const [position, setPosition] = useState(0)
  const height = 400
  const floorHeight = height / floors
  const label = (i) => i === 0 ? 'L' : i === floors - 1 ? 'PH' : i
  const openDoors = () => setDoorsOpen(true)

  useEffect(() => {
    if (doorsOpen && !selectedFloor) {
      const timer = setTimeout(() => setDoorsOpen(false), DOOR_CLOSE * 1000)
      return () => clearTimeout(timer)
    }
  }, [doorsOpen, selectedFloor])

  useEffect(() => {
    if (selectedFloor === null) {
      setPosition(currentFloor)
    }
  }, [currentFloor, selectedFloor])

  useEffect(() => {
    if (selectedFloor !== null && selectedFloor !== currentFloor) {
      let animationId
      const closeTimer = setTimeout(() => {
        setDoorsOpen(false)
        const distance = Math.abs(selectedFloor - currentFloor)
        const startTime = Date.now()
        const startPos = currentFloor
        const direction = selectedFloor > currentFloor ? 1 : -1

        const animate = () => {
          const elapsed = (Date.now() - startTime) / 1000
          const progress = Math.min(elapsed / (distance * FLOOR_TRAVEL), 1)
          setPosition(startPos + progress * distance * direction)

          if (progress < 1) {
            animationId = requestAnimationFrame(animate)
          } else {
            setCurrentFloor(selectedFloor)
            setDoorsOpen(true)
            setSelectedFloor(null)
          }
        }

        animationId = requestAnimationFrame(animate)
      }, DOOR_CLOSE * 1000)
      return () => {
        clearTimeout(closeTimer)
        if (animationId) cancelAnimationFrame(animationId)
      }
    }
  }, [selectedFloor, currentFloor])

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
            selected={i === selectedFloor}
            onMouseEnter={() => setHoverShaft(i)}
            onMouseLeave={() => setHoverShaft(null)}
            onFloorSelect={() => setSelectedFloor(i)}
          />
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
      <div className="car-container" style={{height: floorHeight, bottom: position * floorHeight}}>
        <Car doorsOpen={doorsOpen} />
      </div>
    </div>
  )
}
