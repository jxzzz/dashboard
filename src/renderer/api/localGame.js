import request from '@/utils/request'

export function getLocalGame (query) { // 已下载游戏
  return request({
    url: '/v1/local_game/search' + query,
    method: 'get'
  })
}
export function localMultiSync (id) { // 已下载批量同步
  const data = {
    'Ids': id
  }
  return request({
    url: '/v1/local_game/multiSync',
    method: 'post',
    data
  })
}
export function localMultiDelete (id) { // 已下载批量删除
  const data = {
    'Ids': id,
    'IsDeleteFile': true
  }
  return request({
    url: '/v1/local_game/multiDelete',
    method: 'post',
    data
  })
}
export function localEdit (clientStartPath, isAutoUpdate, localId, runExe, serverSavePath, starterScheme) { // 已下载编辑
  const data = {
    ClientStartPath: clientStartPath,
    IsAutoUpdate: isAutoUpdate,
    LocalId: localId,
    RunExe: runExe,
    ServerSavePath: serverSavePath,
    StarterScheme: starterScheme
  }
  return request({
    url: '/v1/local_game/edit',
    method: 'post',
    data
  })
}
// netBar
export function getNetbarGame (query) { // 本吧游戏
  return request({
    url: '/v1/netbar/search' + query,
    method: 'get'
  })
}
export function netbarMultiSync (id) { // 本吧批量同步
  const data = {
    ids: id
  }
  return request({
    url: '/v1/netbar/multiSync',
    method: 'post',
    data
  })
}
export function netbarMultiDelete (id, isDeleteFile) { // 本吧批量删除
  const data = {
    Ids: id,
    IsDeleteFile: isDeleteFile
  }
  return request({
    url: '/v1/netbar/multiDelete',
    method: 'post',
    data
  })
}
// export function uploadIcon (id, isDeleteFile) { // 本吧批量删除
//   const data = {
//     Ids: id,
//     IsDeleteFile: isDeleteFile
//   }
//   return request({
//     url: '/v1/netbar/upload',
//     method: 'post',
//     data
//   })
// }
// 本吧批量编辑
export function netbarEdit (clientStartPath, displayChoice, exeName, gameName, gamePath, iconPath, id, isServerSync) { // 本吧批量添加
  const data = {
    ClientStartPath: clientStartPath,
    DisplayChoice: displayChoice,
    ExeName: exeName,
    GameName: gameName,
    GamePath: gamePath,
    IconPath: iconPath,
    Id: id,
    IsServerSync: isServerSync
  }
  return request({
    url: '/v1/netbar/edit',
    method: 'post',
    data
  })
}
export function netbarAdd (name, icondata, path, exepath, exename, isEnableSync) { // 本吧批量添加
  const data = {
    name,
    icondata,
    path,
    exepath,
    exename,
    is_enable_sync: isEnableSync
  }
  return request({
    url: 'v1/localresource/addLocalGame',
    method: 'post',
    data
  })
}

/**
 * 获取全部游戏
 */
export function getAllGame () { // 本吧批量添加
  const data = {}
  return request({
    url: '/v1/centerresource/getAllCenterGames',
    method: 'get',
    data
  })
}
/**
 * 获取盘符
 */
export function getLogicalDrives () { // 本吧批量添加
  const data = {}
  return request({
    url: '/v1/sysbase/getLogicalDrives',
    method: 'get',
    data
  })
}
export function setDownGame (info) { // 本吧批量添加
  return request({
    url: `/v1/centerresource/downloadGame?CenterGameId=${info.CenterGameId}&DiskSymbol=${info.DiskSymbol}`,
    method: 'post'
  })
}

/*
获取游戏队列
*/

export function getLoad (info) {
  const data = {}
  return request({
    url: `/v1/centerresource/getDownloadProgress?PageSize=${info.PageSize}&CurrentPage=${info.CurrentPage}`,
    method: 'get',
    data
  })
}

/**
 * 获取今日更新游戏

*/

export function getTodayUpdateGames () {
  const data = {}
  return request({
    url: `/v1/centerresource/getTodayUpdateGames`,
    method: 'get',
    data
  })
}

/**
 * 获取所有本地游戏

*/

export function getAllLocalGames () {
  const data = {}
  return request({
    url: `/v1/localresource/getAllLocalGames`,
    method: 'get',
    data
  })
}

/**
 * 添加游戏

*/
export function addLocalGame ({ name, path, exepath, exename, isEnableSync }, icondata) {
  const data = {
    name,
    icondata,
    path,
    exepath,
    exename,
    is_enable_sync: isEnableSync
  }
  return request({
    url: `/v1/localresource/addLocalGame`,
    method: 'post',
    data
  })
}
