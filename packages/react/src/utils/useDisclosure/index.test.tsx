import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useDisclosure from '.'

test('initial state', () => {
  const { result } = renderHook(() => useDisclosure())

  expect(result.current.isOpen).toBe(false)
})

test('onOpen()', () => {
  const { result } = renderHook(() => useDisclosure())

  act(() => {
    result.current.onOpen()
  })

  expect(result.current.isOpen).toBe(true)
})

test('onClose()', () => {
  const { result } = renderHook(() => useDisclosure())

  act(() => {
    result.current.onOpen()
    result.current.onClose()
  })

  expect(result.current.isOpen).toBe(false)
})

test('onToggle()', () => {
  const { result } = renderHook(() => useDisclosure())

  act(() => {
    result.current.onToggle()
  })

  expect(result.current.isOpen).toBe(true)
})
