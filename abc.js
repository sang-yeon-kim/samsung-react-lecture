function getProps({ name, ...rest }) {
  console.log(name) // 'Neo'
  console.log(rest) // {age: 85, isValid: true, emails: ['abc@gmail.com', 'xyz@gmail.com']}
}

getProps({
  name: 'Neo',
  age: 85,
  isValid: true,
  emails: ['abc@gmail.com', 'xyz@gmail.com']
})
