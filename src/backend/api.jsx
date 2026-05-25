const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2ZDJmOGE1ZTVhNTc0N2YzMWFlYjIyODJiZTRjYyIsIm5iZiI6MTc3OTU1MDExOC40NDk5OTk4LCJzdWIiOiI2YTExYzdhNjYwN2U3MmVjNWFmY2Q2MzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iP0Jg1TAHqbBbrxYSGcNrf0zvPkvBCgCW9iqezCVfbY'
  }
};

export default async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}