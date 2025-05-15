import type { Movie } from '@/stores/movie'

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    <div>
      {movie.Title} / {movie.Year}
    </div>
  )
}
