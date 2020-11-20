//是否有上一篇/下一篇
export function isHasNextPrev(contList, index) {
  const nextItem = contList[index + 1]
  const prevItem = contList[index - 1]
  let hasNext = true, hasPrev = true
  if (nextItem == undefined) {
    hasNext = false
  }
  if (prevItem == undefined) {
    hasPrev = false
  }
  return { hasNext, hasPrev }
}
// 获取当前播放列表 虚拟列表每次重新获取
export function getContList(component) {
  const { audioTab, selectNews, hotNews } = component
  let dealObj = {}
  if (audioTab == 0) {
    dealObj = selectNews
  } else {
    dealObj = hotNews
  }
  return dealObj.contList
}
