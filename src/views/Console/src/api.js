
import http from '@/httpConfig/index'

export function getUser (page) {
  return http.post('/user', {
    page: page,
    size: 10
  })
}
