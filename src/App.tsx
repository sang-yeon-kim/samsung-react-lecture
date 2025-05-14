import { useMovieStore } from './stores/movie'

export default function App() {
  const movies = useMovieStore(state => state.movies)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  return (
    <>
      <div>
        <input
          className="rounded-md border-1 border-gray-400"
          type="text"
          onKeyDown={event => {
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <button onClick={fetchMovies}>Search!</button>
      </div>

      <div>
        {movies.map(movie => {
          return <div key={movie.imdbID}>{movie.Title}</div>
        })}
      </div>
    </>
  )
}
