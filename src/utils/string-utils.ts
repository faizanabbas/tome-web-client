export const generateCommaSeparatedString = (strArray: string[]): string => {
  let str = ''
  strArray.forEach((item, i) => {
    if (i < strArray.length - 1) {
      str += item + ', '
    } else {
      str += item
    }
  })
  return str
}
