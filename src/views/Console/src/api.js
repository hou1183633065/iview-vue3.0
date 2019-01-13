
import http from '@/httpConfig/index'

export function getTableList (page) {
  return http.post('/tableList', {
    page: page,
    size: 10
  })
}

export function getProvince () {
  return http.post('/province')
}

export function getCity (zipCode) {
  return http.post('/city', {
    code: zipCode
  })
}

export function getCounty (zipCode) {
  return http.post('/county', {
    code: zipCode
  })
}
