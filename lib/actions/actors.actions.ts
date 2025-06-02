"use server";

export const getPopularPeople = async (page: number) => {
  const url = `${process.env.TDM_URI}/person/popular?page=${page}&limit=10&order=popularity`;

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