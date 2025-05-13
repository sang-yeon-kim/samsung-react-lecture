class Person {
  constructor(public name: string) {
    this.name = name
  }
}

const neo = new Person('Neo')
const evan = new Person('Evan')

function getName(person: Person) {
  return person.name
}
console.log(getName(neo)) // 'Neo'
console.log(getName(evan)) // 'Evan'
