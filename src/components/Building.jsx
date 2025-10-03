import Floor from './Floor'
import Car from './Car'
import Shaft from './Shaft'
import Up from './Up'
import '../styles.css'

export default function Building({ floors, carPosition }) {
  const height = 400;
  const floorHeight = height / floors;

  return (
    <div className="building">
      {Array.from({ length: floors }).map((_, i) => (
        <Floor key={i} position={i * floorHeight} />
      ))}
      <Up floor={0} />
      <Shaft>
        <Car position={carPosition * floorHeight} />
      </Shaft>
    </div>
  );
}
