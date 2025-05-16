// Export / 모듈 내보내기
// 1) Default Export / 기본 내보내기
//    - 가져오는 곳에서 이름을 만듬!
//    - 1개 데이터 내보내기 가능
// 2) Named Export / 이름 내보내기
//    - 내보내는 곳에서 이름을 필수로 만듬!
//    - 여러개 데이터를 내보내기 가능

// export default 데이터
// export default function () {}
export default 123

export const num1 = 456
export const num2 = 789
export const num3 = 100

export interface User {
  name: string
  age: number
}
