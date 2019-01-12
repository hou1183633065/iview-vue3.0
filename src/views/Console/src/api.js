
import http from '@/httpConfig/index'

export function getTableList (page) {
  return http.post('/tableList', {
    page: page,
    size: 10
  })
}
