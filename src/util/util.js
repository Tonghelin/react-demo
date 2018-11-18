/*工具类*/

export function getRedirectionPath({type, avatar}) {
  // 根据用户信息 返回跳转地址
  // suer.type  boss/ genius
  // user.avatar  bossinfo / geniusinfo
  console.log('type======',type)
  let url = (type==='boss')?'/boss':'/genius';
  if (!avatar) {
    url += 'info'
  }
  return url;
}