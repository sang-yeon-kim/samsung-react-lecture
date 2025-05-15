import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)

  return (
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
  )
}
