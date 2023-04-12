import { useCallback, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { clearTime, eachOfInterval, inRange } from '../date'
import { Day, Month } from '../../types'

export interface Options {
  /**
   * What day a week starts on within the calendar matrix.
   *
   * @default Day.SUNDAY
   */
  weekStartsOn?: Day

  /**
   * The initial viewing date.
   *
   * @default new Date()
   */
  viewing?: Date

  /**
   * The initial date(s) selection.
   *
   * @default []
   */
  selected?: Date[]

  /**
   * The number of months in the calendar.
   *
   * @default 1
   */
  numberOfMonths?: number
}

export interface Returns {
  /**
   * Returns a copy of the given date with the time set to 00:00:00:00.
   */
  clearTime: (date: Date) => Date

  /**
   * Returns whether or not a date is between 2 other dates (inclusive).
   */
  inRange: (props: { date: Date; min: Date; max: Date }) => boolean

  /**
   * The date represented in the calendar matrix. Note that
   * the month and year are the only parts used.
   */
  viewing: Date

  /**
   * Set the date represented in the calendar matrix. Note that
   * the month and year are the only parts used.
   */
  setViewing: React.Dispatch<React.SetStateAction<Date>>

  /**
   * Set the viewing date to today.
   */
  viewToday: () => void

  /**
   * Set the viewing date to the given month.
   */
  viewMonth: (month: Month) => void

  /**
   * Set the viewing date to the month before the current.
   */
  viewPreviousMonth: () => void

  /**
   * Set the viewing date to the month after the current.
   */
  viewNextMonth: () => void

  /**
   * Set the viewing date to the given year.
   */
  viewYear: (year: number) => void

  /**
   * Set the viewing date to the year before the current.
   */
  viewPreviousYear: () => void

  /**
   * Set the viewing date to the year after the current.
   */
  viewNextYear: () => void

  /**
   * The dates currently selected.
   */
  selected: Date[]

  /**
   * Override the currently selected dates.
   */
  setSelected: React.Dispatch<React.SetStateAction<Date[]>>

  /**
   * Reset the selected dates to [].
   */
  clearSelected: () => void

  /**
   * Determine whether or not a date has been selected.
   */
  isSelected: (date: Date) => boolean

  /**
   * Select one or more dates.
   */
  select: (date: Date | Date[], replaceExisting?: boolean) => void

  /**
   * Deselect one or more dates.
   */
  deselect: (date: Date | Date[]) => void

  /**
   * Toggle the selection of a date.
   */
  toggle: (date: Date, replaceExisting?: boolean) => void

  /**
   * Select a range of dates (inclusive).
   */
  selectRange: (start: Date, end: Date, replaceExisting?: boolean) => void

  /**
   * Deselect a range of dates (inclusive).
   */
  deselectRange: (start: Date, end: Date) => void

  /**
   * A matrix of days based on the current viewing date.
   */
  calendar: Date[][][]
}

const clearTimeToDate = (date: Date) => clearTime(date).toDate()

export const useCalendar = ({
  weekStartsOn = Day.SUNDAY,
  viewing: initialViewing = new Date(),
  selected: initialSelected = [],
  numberOfMonths = 1
}: Options = {}): Returns => {
  const [viewing, setViewing] = useState<Date>(initialViewing)
  const viewToday = useCallback(() => setViewing(dayjs().startOf('day').toDate()), [setViewing])
  const viewMonth = useCallback((month: Month) => setViewing((v) => dayjs(v).set('month', month).toDate()), [])
  const viewPreviousMonth = useCallback(() => setViewing((v) => dayjs(v).subtract(1, 'month').toDate()), [])
  const viewNextMonth = useCallback(() => setViewing((v) => dayjs(v).add(1, 'month').toDate()), [])
  const viewYear = useCallback((year: number) => setViewing((v) => dayjs(v).set('year', year).toDate()), [])
  const viewPreviousYear = useCallback(() => setViewing((v) => dayjs(v).subtract(1, 'year').toDate()), [])
  const viewNextYear = useCallback(() => setViewing((v) => dayjs(v).add(1, 'year').toDate()), [])
  const [selected, setSelected] = useState<Date[]>(initialSelected.map(clearTimeToDate))
  const clearSelected = () => setSelected([])
  const isSelected = useCallback(
    (date: Date) => selected.findIndex((s) => dayjs(s).isSame(date, 'day')) > -1,
    [selected]
  )

  const select = useCallback((date: Date | Date[], replaceExisting?: boolean) => {
    if (replaceExisting) {
      setSelected(Array.isArray(date) ? date : [date])
    } else {
      setSelected((selectedItems) => selectedItems.concat(Array.isArray(date) ? date : [date]))
    }
  }, [])

  const deselect = useCallback(
    (date: Date | Date[]) =>
      setSelected((selectedItems) =>
        Array.isArray(date)
          ? selectedItems.filter((s) => !date.map((d) => d.getTime()).includes(s.getTime()))
          : selectedItems.filter((s) => !dayjs(s).isSame(date, 'day'))
      ),
    []
  )

  const toggle = useCallback(
    (date: Date, replaceExisting?: boolean) => (isSelected(date) ? deselect(date) : select(date, replaceExisting)),
    [deselect, isSelected, select]
  )

  const selectRange = useCallback((start: Date, end: Date, replaceExisting?: boolean) => {
    if (replaceExisting) {
      setSelected(eachOfInterval({ start, end, unit: 'day' }))
    } else {
      setSelected((selectedItems) => selectedItems.concat(eachOfInterval({ start, end, unit: 'day' })))
    }
  }, [])

  const deselectRange = useCallback((start: Date, end: Date) => {
    setSelected((selectedItems) =>
      selectedItems.filter(
        (s) =>
          !eachOfInterval({ start, end, unit: 'day' })
            .map((d) => d.getTime())
            .includes(s.getTime())
      )
    )
  }, [])

  const calendar = useMemo<Date[][][]>(
    () =>
      eachOfInterval({
        start: dayjs(viewing).startOf('month').toDate(),
        end: dayjs(viewing)
          .add(numberOfMonths - 1, 'months')
          .endOf('month')
          .toDate(),
        unit: 'month'
      }).map((month) =>
        eachOfInterval({
          start: dayjs(month).startOf('month').toDate(),
          end: dayjs(month).endOf('month').toDate(),
          unit: 'week'
        }).map((week) =>
          eachOfInterval({
            start: dayjs(week).startOf('week').toDate(),
            end: dayjs(week).endOf('week').toDate(),
            unit: 'day'
          })
        )
      ),
    [viewing, weekStartsOn, numberOfMonths]
  )

  return {
    clearTime: clearTimeToDate,
    inRange,
    viewing,
    setViewing,
    viewToday,
    viewMonth,
    viewPreviousMonth,
    viewNextMonth,
    viewYear,
    viewPreviousYear,
    viewNextYear,
    selected,
    setSelected,
    clearSelected,
    isSelected,
    select,
    deselect,
    toggle,
    selectRange,
    deselectRange,
    calendar
  }
}
