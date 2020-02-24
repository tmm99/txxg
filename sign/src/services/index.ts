import flyio from '../utils/request';

// 登陆接口
export function login(code): Promise<any>{
  return flyio.post('/user/code2session', {code});
}

//这个是添加面试的接口
export function addSign(params){
  // console.log(params,"传的参数")
  return flyio.post('/sign',params)
}
//获取面试列表
export function getSignList(params){
  console.log(params,"params")
  return flyio.get('/sign',params)
}