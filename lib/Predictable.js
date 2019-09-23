class Predictable {
  constructor(object) {
    Object.keys(object).forEach((key) => {
      this[key] = object[key]
    })
  }
}

export default Predictable
