import { useHouses } from '../../hooks/use-houses';
import { Spinner } from '../spinner';
import { HouseCard } from './house-card';

const HouseList = () => {
  const { houses, loading, error } = useHouses();

  let content;

  if (loading) {
    content = (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    content = <p className="font-bold">Something bad happened...</p>;
  }

  if (houses.length > 0) {
    content = (
      <>
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            animal={house.animal}
            founder={house.founder}
            name={house.name}
            colors={house.houseColours}
          />
        ))}
      </>
    );
  }

  return <div className="grid gap-3 mx-auto max-w-80">{content}</div>;
};

export { HouseList };
