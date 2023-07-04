export const getBeforeDate = (dateString: string) => {
  const date = new Date(dateString)
  const today = new Date()
  const beforeYear = today.getFullYear() - date.getFullYear()
  if (beforeYear > 1) return `${beforeYear} 年前`
  const beforeMonth = today.getMonth() - date.getMonth()
  if (beforeYear === 1 && beforeMonth > 0) return `${beforeYear} 年前`
  if (beforeYear === 1 && beforeMonth === 0) return `11 個月前`
  if (beforeMonth > 0) return `${beforeMonth} 個月前`
  if (beforeMonth < 0) return `${beforeMonth+12} 個月前`
  const beforeDate = today.getDate() - date.getDate()
  if (beforeDate > 0) return `${beforeDate} 天前`
  const beforeHour = today.getHours() - date.getHours()
  if (beforeHour > 0) return `${beforeHour} 小時前`
  const beforeMin = today.getMinutes() - date.getMinutes()
  if (beforeMin > 0) return `${beforeMin} 分鐘前`
  const beforeSec = today.getSeconds() - date.getSeconds()
  return `${beforeSec} 秒前`
}