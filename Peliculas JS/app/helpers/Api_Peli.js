const APIGenerosCine =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE",
  APIGenerosTv =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE",
  APIPelPopularesCine =
    "https://api.themoviedb.org/3/movie/popular?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&with_genres=",
  APIPelTendencias =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE",
  APIPelRecientes =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE", //en cartelera hoy
  APIPelProximamente =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE", //proximamente
  APIPelMCTMDBEl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE", //mejor valoradas cine
  APIPelMCTMDBElTv =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE", //mejor valoradas tv
  APIEnTelevision =
    "https://api.themoviedb.org/3/tv/on_the_air?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE", //en television
  APIPelPopularesTv =
    "https://api.themoviedb.org/3/tv/popular?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&with_genres=",
  APIBuscarCine =
    "https://api.themoviedb.org/3/search/multi?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&page=1&include_adult=false&query="
  
    let Carrito=[]

export default {} = {
  APIGenerosCine,
  APIGenerosTv,
  APIPelPopularesCine,
  APIPelTendencias,
  APIPelRecientes,
  APIPelProximamente,
  APIPelMCTMDBEl,
  APIPelMCTMDBElTv,
  APIEnTelevision,
  APIPelPopularesTv,
  APIBuscarCine,
  Carrito
};
