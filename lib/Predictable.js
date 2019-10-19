import defaultSettings from './default-settings'
import { getType, validateKey } from './functions'

class Predictable {
  constructor(object = {}, settings = {}) {
    this.__settings__ = { ...defaultSettings, ...settings }
    this.__predictable_types__ = {}
    if (object) {
      const objectProps = getType(object)
      if (typeof object === 'object' && !objectProps.isNull) {
        Object.keys(object).forEach((key) => {
          this[key] = object[key]
          this.__predictable_types__[key] = getType(object[key])
        })
      } else {
        const receivedType = objectProps.isNull ? 'null' : objectProps.type
        throw new Error(`Expected 'object', but received '${receivedType}'`)
      }
    } else {
      throw new Error('No valid object supplied')
    }
  }

  set(key, value) {
    validateKey(key)
    if (this[key]) {
      if (this.__settings__.throwOnValidation) {
        const valueProps = getType(value)
        if (this.__predictable_types__[key].type !== valueProps.type) {
          throw new Error(`Expected 'object', but received '${valueProps.type}'`)
        }
      }
    } else {
      this.__predictable_types__[key] = getType(value)
    }
    this[key] = value
  }

  get(key, fallback = null) {
    validateKey(key)
    if (typeof this[key] !== 'undefined') {
      return this[key]
    }
    return fallback
  }
}

export default Predictable
