import { useState } from 'react'

export const useDisclosure = (defaultState = false) => {
  const [open, setOpen] = useState(defaultState)

  const onToggle = () => setOpen((state) => !state)

  return { open, onToggle }
}
