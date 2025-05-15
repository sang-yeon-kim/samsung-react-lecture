import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '@/stores/movie'
import Image from '@/components/Image'
import Loader from '@/components/Loader'

// 리액트 훅 => 리액트 컴포넌트 함수 안에서 호출!
// /movies/tt4154756

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const currentMovie = useMovieStore(state => state.currentMovie)
  const isLoading = useMovieStore(state => state.isLoading)

  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        currentMovie && (
          <div className="m-auto flex max-w-[1100px] gap-[20px]">
            <div>
              <Image
                src={currentMovie.Poster.replace('SX300', 'SX1000')}
                width={500}
                height={750}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{currentMovie.Title}</h1>
              <p>{currentMovie.Plot}</p>
              <p>{currentMovie.Actors}</p>
            </div>
          </div>
        )
      )}
    </>
  )
}
