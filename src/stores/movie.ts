import { create } from 'zustand'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create<{
  searchText: string
  movies: Movies
  setSearchText: (searchText: string) => void
  fetchMovies: () => Promise<void>
}>((set, get) => ({
  searchText: '',
  movies: [],
  setSearchText: searchText => {
    set({ searchText })
  },
  fetchMovies: async () => {
    const { searchText } = get()
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const { Search: movies } = await res.json()
    set({ movies })
  }
}))
