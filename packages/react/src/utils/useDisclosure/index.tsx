import { useState } from 'react'

const useDisclosure = (defaultIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onToggle = () => setIsOpen(!isOpen)
  return {
    isOpen,
    onClose,
    onOpen,
    onToggle
  }
}

export default useDisclosure
