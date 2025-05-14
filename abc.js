// 1) pending - 대기
// 2) fulfilled - 이행
// 3) rejected - 거부
// new Promise(콜백)
// new Promise(resolve => resolve()) // 이행

function fetchMovies(searchText) {
  const promise = new Promise((resolve, reject) => {
    if (!searchText || !searchText.trim()) {
      reject(new Error('검색어가 없어요~')) // 거부
      return
    }
    resolve([{ title: '어벤져스' }]) // 이행
    setTimeout(() => {}, 1000)
  })
  return promise
}

try {
  const res = await fetchMovies()
  console.log(res) // 123
} catch (error) {
  console.log(error.message) // '거부해요~'
}

// C:\Project\Day 3
