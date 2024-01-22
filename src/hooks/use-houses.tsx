import { useEffect, useState } from 'react';
import { House } from '../types/house';

const WIZARD_WORLD_API = 'https://wizard-world-api.herokuapp.com';

const useHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(`${WIZARD_WORLD_API}/houses`);

        if (!response.ok) {
          throw new Error('Something bad happened...');
        }

        const fetchedHouses: House[] = await response.json();

        setHouses(fetchedHouses);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchHouses();
  }, []);

  return { houses, loading, error };
};

export { useHouses };
