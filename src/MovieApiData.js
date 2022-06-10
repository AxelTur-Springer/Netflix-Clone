const API_KEY = "076a8aeadc245f1cbc3779685ceb3a1d";



export async function originalSeriesapi() {
    try{
      let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
      let data = await response.json();
      return  await data
    }catch(err){
      console.error(err);
    }
  }

