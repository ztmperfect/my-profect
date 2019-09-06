

import cookie from "../static/js/cookie";

let defaultUserName = ''

try {
  if (localStorage.name) {
    // 把username存在本地
    defaultUserName = localStorage.name  
  }
} catch (e) { }

export default {

  UserName: defaultUserName,
  userId:cookie.getCookie('userid') || '',
  token: cookie.getCookie('token') || '',
  // token: cookie.getCookie('token')? cookie.getCookie('token'):'',
}