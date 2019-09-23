import Predictable from '..'

const predictableObj = new Predictable({
  firstName: 'Johh',
  lastName: 'Doe',
  age: 42,
})

console.log(`Hello ! My name is ${predictableObj.firstName} ${predictableObj.lastName} and I'm ${predictableObj.age} years old.`)
