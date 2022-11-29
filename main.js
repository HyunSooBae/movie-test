async function searchMovies() {
    const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
    const json = await res.json()
    console.log(json);
}
searchMovies();