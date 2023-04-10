import dayjs from 'dayjs'
import { inRange, clearTime, eachOfInterval } from './'

test('inRange()', () => {
  const min = dayjs().subtract(1, 'day').toDate()
  const max = dayjs().add(1, 'day').toDate()
  const dateInsideRange = dayjs().toDate()
  const dateOutsideRange = dayjs().subtract(7, 'days').toDate()
  expect(inRange({ date: dateInsideRange, min, max })).toBeTruthy()
  expect(inRange({ date: dateOutsideRange, min, max })).toBeFalsy()
})

test('clearTime()', () => {
  const dateNow = new Date()
  const cleanDate = clearTime(dateNow)
  expect(cleanDate.hour()).toEqual(0)
  expect(cleanDate.minute()).toEqual(0)
  expect(cleanDate.second()).toEqual(0)
  expect(cleanDate.millisecond()).toEqual(0)
})

test('eachOfInterval()', () => {
  const minDate = dayjs('2023-03-17').toDate()
  const maxDate = dayjs('2023-03-19').toDate()
  const yesterdayTomorrowTimeSpan = eachOfInterval({ start: minDate, end: maxDate, unit: 'day' })
  expect(yesterdayTomorrowTimeSpan.length).toEqual(3)
  expect(yesterdayTomorrowTimeSpan[0]).toBeInstanceOf(Date)
  expect(yesterdayTomorrowTimeSpan[1]).toBeInstanceOf(Date)
  expect(yesterdayTomorrowTimeSpan[2]).toBeInstanceOf(Date)
})
