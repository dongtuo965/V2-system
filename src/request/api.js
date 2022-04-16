import request from './request.js';
// get请求不传参时
export const getshebei = () => request.get('/scoreList')
// export const getshebei = () => request.get('/shebei')

// get请求传参时
// export const GetsearchData = (params) => request.get('/list',{params})
// post请求
export const logininfo = (params) => request.post('/list', params)
// export const checkcity = (params) => request.post('/list', params)


// getuserinfo().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

