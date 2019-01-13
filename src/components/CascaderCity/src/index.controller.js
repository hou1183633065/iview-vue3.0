// 将拿到的地区列表格式化到组件可用数据
// cityDataformatter (data, grade, lastGrade)
// grade, lastGrade值可以为：province、city、county
// data数据来源， grade当前格式化数据的等级, lastGrade格式化的最低等级
export function cityDataformatter (data, grade, lastGrade) {
  data.map((item) => {
    item.grade = grade
    if (grade !== lastGrade) {
      item.children = []
      item.loading = false
    }
    return item
  })
  return data
}
