import Mock from 'mockjs'
Mock.setup({
  timeout:2000
})
Mock.mock('/shebei',{
  name:'computer',
  "time":"@datetime",
  "score|1-300":200,
  "address":"@url",
  "img":"@image"
})
