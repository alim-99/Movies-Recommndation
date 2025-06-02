import React, { createContext, useContext, useEffect, useState } from 'react';
import { getMoviesGenres } from '@/lib/actions/movies.actions';

interface Genre {
  id: number;
  name: string;
}

interface GenresContextType {
  genres: Genre[];
  isLoading: boolean;
  error: Error | null;
}

const GenresContext = createContext<GenresContextType>({
  genres: [],
  isLoading: true,
  error: null,
});

export const useGenres = () => useContext(GenresContext);

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getMoviesGenres();
        setGenres(response.genres);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <GenresContext.Provider value={{ genres, isLoading, error }}>
      {children}
    </GenresContext.Provider>
  );
}; 