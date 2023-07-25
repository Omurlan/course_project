import { useEffect } from 'react'

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string | number | readonly string[] | undefined
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = 'auto'
      const scrollHeight = textAreaRef.scrollHeight

      textAreaRef.style.height = `${scrollHeight}px`
    }
  }, [textAreaRef, value])
}

export default useAutosizeTextArea
