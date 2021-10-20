export const arrayifyObject = (arrayLikeObject) => {
  let array = []
  if (arrayLikeObject) {
    // But we want to preserve the fb id in the object
    Object.values(arrayLikeObject).forEach((value) => {
      array.push(value)
    })
  }
  return array
}
