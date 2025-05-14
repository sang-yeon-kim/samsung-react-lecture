import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      isLoading: false,
      message: '',
      movies: [] as Movies // 타입 단언!
    },
    (set, get) => ({
      setSearchText: (searchText: string) => {
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
        try {
          const {
            data: { Search: movies = [], Response, Error }
          } = await axios(`https://omdbapi.com?apikey=7035c60c&s=${searchText}`)
          if (Response === 'False') {
            set({
              message: Error,
              isLoading: false
            })
            return
          }
          set({
            movies,
            isLoading: false
          })
          if (!movies.length) {
            set({ message: '검색된 결과가 없습니다.' })
          }
        } catch (error) {
          if (error instanceof Error) {
            set({
              message: error.message
            })
          }
        } finally {
          set({
            isLoading: false
          })
        }
      }
    })
  )
)

// create(
//   combine(
//     {
//       상태1: 데이터,
//       상태2: 데이터
//     },
//     (set, get) => {
//       return {
//         액션1: 함수,
//         액션2: 함수
//       }
//     }
//   )
// )
