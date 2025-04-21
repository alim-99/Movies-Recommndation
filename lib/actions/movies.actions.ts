interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  media_type: string;
}

export const getAll = async (url: string): Promise<MovieResponse> => {
  try {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    return await req.json();

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getPopular = async (url: string): Promise<MovieResponse> => {
  const req = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.AUTH_HEADER!
    }
  });

  if (!req.ok) {
    throw new Error(`HTTP error! status: ${req.status}`);
  }

  return await req.json();
}