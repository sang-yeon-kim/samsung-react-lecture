import { useState, useEffect } from 'react'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movies>([])

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
    const { Search } = await res.json()
    setMovies(Search)
  }

  return (
    <>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}
