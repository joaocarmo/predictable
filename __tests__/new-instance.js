import Predictable from '..'

const predictableObj = new Predictable({
  firstName: 'Homer',
  lastName: 'Simpson',
})

predictableObj.set('age', 42)

const firstName = predictableObj.get('firstName')
const lastName = predictableObj.get(['lastName'])
const middleName = predictableObj.get('middleName', 'J.')

console.log(`Hello ! My name is ${firstName} ${middleName} ${lastName} and I'm ${predictableObj.age} years old.`)

console.log(predictableObj.toPlainObject({ types: true }))

console.log(predictableObj.toPlainObject())

console.log(predictableObj.stringify())
