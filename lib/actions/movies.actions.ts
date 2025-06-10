'use server';

export const getAllTrending = async (page: number) => {
  const url = `${process.env.TDM_URI!}/trending/all/day?language=en-US?page=${page}&limit=10&order=popularity`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getPopularMovies = async (page: number) => {
  const url = `${process.env.TDM_URI!}/movie/popular?page=${page}&limit=10&order=popularity`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getNowplayingMovies = async (page: number) => {
  const url = `${process.env.TDM_URI!}/movie/now_playing?page=${page}&limit=10&order=popularity`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getUpcomingMovies = async (page: number) => {
  const url = `${process.env.TDM_URI!}/movie/upcoming?page=${page}&limit=10&order=popularity`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getTopratedMovies = async (page: number) => {
  const url = `${process.env.TDM_URI!}/movie/top_rated?page=${page}&limit=10&order=popularity`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}

export const getMoviesGenres = async () => {
  const url = `${process.env.TDM_URI!}/genre/movie/list`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_HEADER!
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data;

  } catch (error: unknown) {
    console.error('Failed to fetch data:', (error as Error).message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}