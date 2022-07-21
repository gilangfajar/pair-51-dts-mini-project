const APIKEY = "c84afbcbd2c819a89068cd6309f16692";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchPopular: `/movie/popular?api_key=${APIKEY}&language=en-US`,
    fetchContinueWatching: `/movie/continue_watching?api_key=${APIKEY}&language=en-US`,
    fetchWatchAgain: `/movie/watch_again?api_key=${APIKEY}&language=en-US`,
    fetchMyList: `/movie/my_list?api_key=${APIKEY}&language=en-US`,

};

export default requests;