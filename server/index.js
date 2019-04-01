/*
 * @Author: chenghao
 * @Date: 2019-03-05 19:42:29
 * @Last Modified by: chenghao
 * @Last Modified time: 2019-03-10 16:59:10
 */
const express = require('express')
const path = require('path')
const { PORT, HOST } = require('./../config.server.json')
const weather = require('./cloud-functions/he-weather/').main
const air = require('./cloud-functions/he-air').main
const app = express()

app.listen(PORT, () => {
  console.log(`开发服务器启动成功：${HOST}:${PORT}`)
})

// 添加static
app.use(
  '/static',
  express.static(path.join(__dirname, 'static'), {
    index: false,
    maxage: '30d'
  })
)

app.get('/api/he-weather', (req, res, next) => {
  // 将 req.query 传入
  weather(req.query)
    .then(res.json.bind(res))
    .catch(e => {
      next(e)
    })
})

app.get('/api/he-air', (req, res, next) => {
  // 将 req.query 传入
  air(req.query)
    .then(res.json.bind(res))
    .catch(e => {
      next(e)
    })
})
