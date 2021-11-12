import axios from 'axios'

const instace = axios.create({
    baseURL: 'http://192.168.33.8:8848',   //请求根路径
    timeout: 5000, //请求超时时间
})

// 请求拦截器
instace.interceptors.request.use(config => {
    console.log('进入请求拦截器')
    console.log(config)
    return config
}, err => {
    console.log('请求失败')
    return Promise.reject(err)  //返回错误
})

// 响应拦截器
instace.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)  //返回错误
})
export default instace;
