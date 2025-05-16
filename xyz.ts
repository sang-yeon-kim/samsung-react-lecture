import abc, { num1, num2 as n2, num3 } from './abc'
import type { User } from './abc'

console.log(abc) // 123
console.log(num1) // 456
console.log(n2) // 789
console.log(num3) // 100

const user: User = {
  name: 'Neo',
  age: 22
}
console.log(user)
