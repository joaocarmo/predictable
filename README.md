# Predictable.js
[![npm version](https://badge.fury.io/js/predictable.svg)][1]
[![jest](https://jestjs.io/img/jest-badge.svg)][2]

Predictable objects with consistent keys and default values

## Usage

**Code**

```javascript
const predictableObj = new Predictable({
  firstName: 'Homer',
  lastName: 'Simpson',
})

predictableObj.set('age', 42)

const firstName = predictableObj.get('firstName')
const lastName = predictableObj.get(['lastName'])
const middleName = predictableObj.get('middleName', 'J.')

console.log(`Hello ! My name is ${firstName} ${middleName} ${lastName} and I'm ${predictableObj.age} years old.`)
```

**Output**

```
Hello ! My name is Homer J. Simpson and I'm 42 years old.
```

[1]: https://badge.fury.io/js/predictable
[2]: https://github.com/facebook/jest
