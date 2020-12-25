import HttpRequest from './axios'
const request = new HttpRequest()
/**
 * 登录请求
 * 判断是否登录以及获取保存Token路径
 */
export const getUserLogin = () => request.get('/user/index/profile')
/**
 * 获取二级仓库信息
 */
export const getHouseTwoLevel = () => request.post('/warehouse/one-level')
