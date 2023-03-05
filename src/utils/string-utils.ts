export const generateCommaSeparatedString = (strArray: string[]): string => {
  let str = ''
  strArray.forEach((author, i) => {
    if (i < strArray.length - 1) {
      str += author + ', '
    } else {
      str += author
    }
  })
  return str
}
