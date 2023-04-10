import { composeFlex, composeStack } from '../../Layout'
import { composeText } from '../../Typography'
import dayjs from 'dayjs'
import { ComponentFactory } from '../../../types'
import { useCalendar } from '../../../utils'
import composeButton from '../Button'
import { rgba } from 'polished'

const composeCalendar = ({ styled, theme, css }: ComponentFactory) => {
  const Flex = composeFlex({ styled, css })
  const Text = composeText({ styled, css })
  const Stack = composeStack({ styled, css })
  const Button = composeButton({ styled, css })

  return () => {
    const {
      calendar,
      clearSelected,
      clearTime,
      inRange,
      isSelected,
      select,
      selected,
      setViewing,
      toggle,
      viewing,
      viewNextMonth,
      viewPreviousMonth,
      viewToday
    } = useCalendar()

    return (
      <Stack css={{ gap: '$xs' }}>
        <Flex css={{ justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <Button onClick={viewPreviousMonth} scheme="ghost" css={{ width: '3rem' }}>
            &larr;
          </Button>
          <Text css={{ textAlign: 'center', flex: 1 }}>{dayjs(viewing).format('MMM YYYY')}</Text>
          <Button onClick={viewNextMonth} scheme="ghost" css={{ width: '3rem' }}>
            &rarr;
          </Button>
        </Flex>
        <Stack direction="horizontal" css={{ justifyContent: 'space-between', gap: '$xs' }}>
          {calendar[0][0].map((day) => (
            <Button
              key={`${day}`}
              css={{
                width: '3rem'
              }}
              scheme="ghost"
              disabled
            >
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayjs(day).day()]}
            </Button>
          ))}
        </Stack>
        {calendar[0].map((week) => (
          <Stack key={`week-${week[0]}`} direction="horizontal" css={{ justifyContent: 'space-between', gap: '$xs' }}>
            {week.map((day) => (
              <Button
                data-in-range={inRange({
                  date: day,
                  min: dayjs(viewing).startOf('month').toDate(),
                  max: dayjs(viewing).endOf('month').toDate()
                })}
                data-selected={isSelected(day)}
                data-today={dayjs(day).isSame(dayjs(), 'day')}
                key={`${day}`}
                onClick={() => toggle(day, true)}
                scheme="ghost"
                css={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '$full',
                  color: '$gray300',
                  '&[data-in-range="true"]': {
                    color: '$gray600'
                  },
                  '&[data-today="true"]': {
                    color: '$primary400',
                    border: '1px solid',
                    borderColor: 'transparent',
                    backgroundColor: '$primary50'
                  },
                  '&[data-selected="true"]': {
                    border: '1px solid',
                    borderColor: 'transparent',
                    backgroundColor: '$primary400',
                    color: 'white',
                    boxShadow: `0 0.25rem 1rem ${rgba(theme.colors.primary400.value, 0.4)}`
                  }
                }}
              >
                {dayjs(day).format('DD')}
              </Button>
            ))}
          </Stack>
        ))}
      </Stack>
    )
  }
}

export default composeCalendar
