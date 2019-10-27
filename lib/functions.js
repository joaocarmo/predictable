const isString = (str) => typeof str === 'string' || str instanceof String

const isArray = (obj) => Array.isArray(obj)

const isObject = (obj) => obj && typeof obj === 'object' && obj.constructor === Object

const isEmpty = (obj) => {
  if (isArray(obj)) return !obj.length
  if (isObject(obj)) return !Object.keys(obj).length
  return false
}

const isFunction = (fn) => typeof fn === 'function'

const isNumber = (num) => typeof num === 'number' && Number.isFinite(num)

const isUndefined = (undef) => typeof undef === 'undefined'

const getTypeOf = (obj) => typeof obj

const getType = (object) => ({
  type: getTypeOf(object),
  isArray: isArray(object),
  isString: isString(object),
  isNull: object === null,
  isUndefined: isUndefined(object),
  isFunction: isFunction(object),
  isNumber: isNumber(object),
  isNaN: Number.isNaN(object),
})

const validateKey = (key, type = 'string') => {
  const keyType = typeof key
  if (keyType !== type) {
    throw new Error(`Expected 'string', but received '${keyType}'`)
  }
}

const getNestedObject = (nestedObj, pathArr) => {
  if (isObject(nestedObj) && !isEmpty(nestedObj)) {
    let path = []
    if (isString(pathArr)) {
      path.push(pathArr)
    } else if (isArray(pathArr)) {
      path = pathArr
    }
    const reducerFn = (obj, key) => (
      (obj && !isUndefined(obj[key])) ? obj[key] : undefined
    )
    return path.reduce(reducerFn, nestedObj)
  }
  return null
}

export { getType, validateKey, getNestedObject }
