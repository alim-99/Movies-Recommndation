export const getAll = async (url: string): Promise<any> => {
  try {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmM0ZDFmOTFiNzJlZDJkZTAyNDc3MzM0MDg0MWRmNyIsIm5iZiI6MTczODY3NTQxMS4yMDg5OTk5LCJzdWIiOiI2N2EyMTRkM2VlYTg5YWRmMDkwMmZjNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vdMpBt5tXR_y9FWcucEJnbm9wtthadzztEw2Ty_YFto'
      }
    });

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    return await req.json();

  } catch(error: any) {
    console.error('Failed to fetch data:', error.message);
    throw error; // Re-throw the error to allow calling code to handle it
  }
}