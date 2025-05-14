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
  isLoading: boolean
  message: string
  movies: Movies
  setSearchText: (searchText: string) => void
  fetchMovies: () => Promise<void>
}>((set, get) => ({
  searchText: '',
  isLoading: false,
  message: '',
  movies: [],
  setSearchText: searchText => {
    set({ searchText })
  },
  fetchMovies: async () => {
    const { searchText, isLoading } = get()
    if (!searchText.trim()) return
    if (isLoading) return
    set({
      isLoading: true,
      message: ''
    })
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const { Search: movies } = await res.json()
    set({
      movies,
      isLoading: false
    })
    if (!movies.length) {
      set({ message: '검색된 결과가 없습니다.' })
    }
  }
}))
