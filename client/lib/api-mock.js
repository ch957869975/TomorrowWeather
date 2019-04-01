/*
 * @Author: chenghao
 * @Date: 2019-03-05 20:13:40
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-04-01 21:56:58
 */
const QQ_MAP_KEY = 'ZVXBZ-D6JKU-4IRVY-2OHZB-RCSVK-LQFU6'
const HOST = 'http://192.168.1.104'
const PORT = 3000
export const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${HOST}:${PORT}/api/he-weather`,
      data: {
        lat,
        lon
      },
      success: res => {
        resolve({ result: res.data })
      },
      fail: reject
    })
  })
}

export const getAir = city => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${HOST}:${PORT}/api/he-air`,
      data: {
        city
      },
      success: res => {
        resolve({ result: res.data })
      },
      fail: e => {
        reject(e)
      }
    })
  })
}
/**
 *  逆经纬度查询
 * @param {*} lat
 * @param {*} lon
 */
export const geocoder = (lat, lon, success = () => {}, fail = () => {}) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success: success,
    fail: () => {
      wx.showLoading({
        title: '3333',
        mask: true
      })
      fail()
    }
  })
}
