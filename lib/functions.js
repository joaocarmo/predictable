const getType = (object) => ({
  type: typeof object,
  array: Array.isArray(object),
  null: object === null,
})

export { getType }
