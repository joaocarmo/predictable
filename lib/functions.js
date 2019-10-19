const getType = (object) => ({
  type: typeof object,
  isArray: Array.isArray(object),
  isNull: object === null,
})

const validateKey = (key, type = 'string') => {
  const keyType = typeof key
  if (keyType !== type) {
    throw new Error(`Expected 'string', but received '${keyType}'`)
  }
}

export { getType, validateKey }
