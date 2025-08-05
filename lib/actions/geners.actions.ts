"use server";

export const getMovieGenres = async () => {
    const url = `${process.env.TDM_URI!}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}&language=en-US`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch genres: ${res.statusText}`);
        }
        const data = await res.json();
        return data.genres; // Array of { id, name }
    } catch (error) {
        console.error("Error fetching genres:", error);
        return [];
    }
};

export const getTvGenres = async () => {
    const url = `${process.env.TDM_URI!}/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY!}&language=en-US`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch genres: ${res.statusText}`);
        }
        const data = await res.json();
        return data.genres; // Array of { id, name }
    } catch (error) {
        console.error("Error fetching genres:", error);
        return [];
    }
}