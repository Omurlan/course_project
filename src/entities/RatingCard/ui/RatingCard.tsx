import React, { type ChangeEvent, memo, useCallback, useState } from 'react'
import styles from './RatingCard.module.scss'
import cn from 'classnames'
import { Rating } from '@/shared/ui/Rating/Rating'
import { Typography } from '@/shared/ui/Typography/Typography'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Card } from '@/shared/ui/Card/Card'
import Modal from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { TextArea } from '@/shared/ui/TextArea/TextArea'

interface RatingCardProps {
  hasFeedback?: boolean
  feedbackTitle?: string
  title: string
  onRate: (value: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { hasFeedback, onRate, feedbackTitle, title } = props

  const [value, setValue] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleRate = (value: number) => {
    setValue(value)

    if (hasFeedback) {
      setIsOpen(true)
    } else {
      onRate(value)
    }
  }

  const handleFeedbackSubmit = (text: string) => {
    onRate(value, text)
    setIsOpen(false)
  }

  const handleFeedbackCancel = () => {
    setIsOpen(false)
    onRate(value)
  }

  const handleChangeFeedback = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value)
  }, [])

  return (
    <VStack>
      <Card>
        <Typography variant="subheading">{title}</Typography>
        <Rating value={value} onRate={handleRate} />
      </Card>

      <Modal isOpen={isOpen} onClose={handleFeedbackCancel}>
        <VStack gap={4}>
          {feedbackTitle && (
            <Typography variant="subheading">{feedbackTitle}</Typography>
          )}

          <TextArea value={feedback} onChange={handleChangeFeedback} />

          <HStack justify="between">
            <Button onClick={handleFeedbackCancel} variant="ghost">Закрыть</Button>
            <Button>Отправить</Button>
          </HStack>
        </VStack>
      </Modal>
    </VStack>

  )
})
