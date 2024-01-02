import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BgContainer,
  NotesH1,
  TitleInput,
  CommentTextInput,
  AddButton,
  NotesInputForm,
  CommentsList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      comment,
    }

    setCommentsList(prevState => [...prevState, newComment])
    setTitle('')
    setComment('')
  }

  return (
    <>
      <BgContainer>
        <NotesH1>Notes</NotesH1>
        <NotesInputForm onSubmit={submitForm}>
          <TitleInput
            placeholder="Title"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <CommentTextInput
            placeholder="Take a Note..."
            row="6"
            value={comment}
            onChange={onChangeComment}
          />
          <AddButton type="submit">Add</AddButton>
        </NotesInputForm>
        <CommentsList>
          {commentsList.map(eachList => (
            <NoteItem kay={eachList.id} commentDetails={eachList} />
          ))}
        </CommentsList>
      </BgContainer>
    </>
  )
}
export default Notes
