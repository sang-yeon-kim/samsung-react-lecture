interface Obj {
  abc: () => Promise<number>
}

const obj: Obj = {
  abc: async () => {
    return 123
  }
}

console.log(obj.abc()) // promise
