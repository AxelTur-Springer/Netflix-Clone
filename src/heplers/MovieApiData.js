const API_KEY = process.env.REACT_APP_API_KEY_TMDB;




 async function originalSeriesapi() {
    try{
      let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }
async function popularApi() {
    try{
      let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }
  async function topRatedMovies() {
    try{
      let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }
  async function PopularSeries() {
    try{
      let response = await fetch(`  https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }
  async function genresList() {
    try{
      let response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }
  

export {popularApi,originalSeriesapi,topRatedMovies, genresList,PopularSeries}


