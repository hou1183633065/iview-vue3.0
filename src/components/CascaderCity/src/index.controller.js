export function cityDataformatter (option, grade, hasNext) {
  hasNext = hasNext || false
  option.map((item) => {
    item.grade = grade
    if (hasNext) {
      item.children = []
      item.loading = false
    }
    return item
  })
  return option
}
