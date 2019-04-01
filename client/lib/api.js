/*
 * @Author: chenghao
 * @Date: 2019-03-05 20:08:50
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-03-10 16:54:08
 */
const QQ_MAP_KEY = 'ZVXBZ-D6JKU-4IRVY-2OHZB-RCSVK-LQFU6'
wx.cloud.init({
  env: 'weather-dev-018b86'
})
/**
 * 获取和风天气
 * @param {*} lat
 * @param {*} lon
 */
export const getWeather = (lat, lon) => {
  return wx.cloud.callFunction({
    name: 'he-weather',
    data: {
      lat,
      lon
    }
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
    success,
    fail
  })
}

/**
 * 获取和风空气质量
 * @param {*} city
 */
export const getAir = city => {
  return wx.cloud.callFunction({
    name: 'he-air',
    data: {
      city
    }
  })
}
