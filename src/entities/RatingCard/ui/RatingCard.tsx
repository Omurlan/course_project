import React, { type ChangeEvent, memo, useCallback, useState } from 'react'
import { Rating } from '@/shared/ui/Rating/Rating'
import { Typography } from '@/shared/ui/Typography/Typography'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Card } from '@/shared/ui/Card/Card'
import Modal from '@/shared/ui/Modal/Modal'
import { Button } from '@/shared/ui/Button/Button'
import { TextArea } from '@/shared/ui/TextArea/TextArea'

interface RatingCardProps {
  hasFeedback?: boolean
  feedbackTitle?: string
  title: string
  disabled?: boolean
  initialRate?: number
  onRate: (value: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { hasFeedback, onRate, feedbackTitle, title, initialRate = 0, disabled = false } = props

  const [value, setValue] = useState(initialRate)
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleRate = useCallback((rate: number) => {
    setValue(rate)

    if (hasFeedback) {
      setIsOpen(true)
    } else {
      onRate(rate)
    }
  }, [hasFeedback])

  const handleFeedbackSubmit = useCallback(() => {
    onRate(value, feedback)
    setIsOpen(false)
  }, [feedback, value])

  const handleFeedbackCancel = useCallback(() => {
    setIsOpen(false)
    onRate(value)
  }, [value])

  const handleChangeFeedback = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value)
  }, [])

  return (
    <VStack>
      <Card>
        <VStack align="center">
          <Typography variant="subheading">{title}</Typography>
          <Rating disabled={Boolean(initialRate) || disabled} value={value} onRate={handleRate} />
        </VStack>
      </Card>

      <Modal isOpen={isOpen} onClose={handleFeedbackCancel}>
        <VStack gap={4}>
          {feedbackTitle && (
            <Typography variant="subheading">{feedbackTitle}</Typography>
          )}

          <TextArea value={feedback} onChange={handleChangeFeedback} />

          <HStack justify="between">
            <Button onClick={handleFeedbackCancel} variant="ghost">Закрыть</Button>
            <Button onClick={handleFeedbackSubmit}>Отправить</Button>
          </HStack>
        </VStack>
      </Modal>
    </VStack>

  )
})
