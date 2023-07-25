import React, { type ChangeEvent, useCallback } from 'react'
import styles from './AddCommentForm.module.scss'
import cn from 'classnames'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const onTextChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addCommentFormActions.setText(event.target.value))
  }, [])

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '')
    dispatch(addCommentFormActions.setText(''))
  }, [text])

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <div className={cn(styles.addCommentForm, className)}>
        <TextArea
            onChange={onTextChange}
            placeholder="Введите текст комментария"
            value={text}
         />
        <Button onClick={onSendHandler} className={styles.submit}>Отправить</Button>
      </div>
    </AsyncReducer>
  )
}

export default AddCommentForm
