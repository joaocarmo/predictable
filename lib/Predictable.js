import defaultSettings from './default-settings'
import { getType } from './functions'

class Predictable {
  constructor(object, settings = defaultSettings) {
    const { throwOnValidation } = settings

    this.__throw_on_validation__ = throwOnValidation
    this.__predictable_types__ = {}
    Object.keys(object).forEach((key) => {
      this[key] = object[key]
      this.__predictable_types__[key] = getType(object[key])
    })
  }
}

export default Predictable
