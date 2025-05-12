const neo = {
  name: 'Neo',
  age: 20
}
function hello(user) {
  const { name } = user // 객체 구조 분해 할당
  console.log(name) // 'Neo'
  console.log(user.name) // 'Neo'
}
hello(neo)

const users = ['Neo', 'Evan', 'Lewis']
function getUser(users) {
  const [neo, evan, lewis] = users // 배열 구조 분해 할당
  console.log(neo, evan, lewis)
  console.log(users[0], users[1], users[2])
}
getUser(users)
