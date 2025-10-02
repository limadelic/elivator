import Floor from './Floor'
import Cabin from './Cabin'
import Shaft from './Shaft'
import '../css/Building.css'

export default function Building({ floors, cabinPosition }) {
  const height = 400;
  const floorHeight = height / floors;

  return (
    <div className="building">
      {Array.from({ length: floors }).map((_, i) => (
        <Floor key={i} position={i * floorHeight} />
      ))}
      <Shaft>
        <Cabin position={cabinPosition * floorHeight} />
      </Shaft>
    </div>
  );
}
