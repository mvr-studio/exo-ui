import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export interface InRangeProps {
  date: Date
  min: Date
  max: Date
}

export const inRange = ({ date, min, max }: InRangeProps) => {
  const selectedDate = dayjs(date)
  return selectedDate.isBetween(min, max, 'day', '[]')
}

export const clearTime = (date: Date) =>
  dayjs(date).set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0)

export const eachOfInterval = ({ start, end, unit }: { start: Date; end: Date; unit: string }) => {
  const clearStart = clearTime(start)
  const clearEnd = clearTime(end)
  const diffOfUnit = clearEnd.diff(clearStart, unit as any)
  const diffSanitized = unit === 'week' ? Math.max(4, diffOfUnit) : diffOfUnit
  const diffArray = [...Array(diffSanitized + 1).keys()]
  return diffArray.map((diff) => clearStart.add(diff, unit as any).toDate())
}
