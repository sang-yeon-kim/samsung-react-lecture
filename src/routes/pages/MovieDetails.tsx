import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '@/stores/movie'

// 리액트 훅 => 리액트 컴포넌트 함수 안에서 호출!
// /movies/tt4154756

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)

  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [])

  return <></>
}
