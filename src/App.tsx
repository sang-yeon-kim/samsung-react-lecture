import { useMovieStore } from './stores/movie'
import Loader from './components/Loader'
import Image from './components/Image'

export default function App() {
  const movies = useMovieStore(state => state.movies)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const isLoading = useMovieStore(state => state.isLoading)
  const message = useMovieStore(state => state.message)

  return (
    <>
      <div>
        <input
          value={searchText}
          className="rounded-md border-1 border-gray-400"
          type="text"
          onChange={event => setSearchText(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <button onClick={fetchMovies}>Search!</button>
      </div>
      {isLoading && (
        <div className="relative h-[30px]">
          <Loader />
        </div>
      )}
      {message && <div>{message}</div>}
      <div>
        {movies.map(movie => {
          return <div key={movie.imdbID}>{movie.Title}</div>
        })}
      </div>
      <Image
        src="https://picsum.photos/1000/500"
        width={1000}
        height={500}
      />
      <Image
        src="https://picsum.photo/500/300"
        width={500}
        height={300}
      />
    </>
  )
}
