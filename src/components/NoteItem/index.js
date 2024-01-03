import {
  ListItem,
  NameAndCommentContainer,
  NameText,
  CommentText,
} from './styledComponents'

const NoteItem = props => {
  const {commentDetails} = props
  const {title, comment} = commentDetails
  return (
    <>
      <ListItem>
        <NameAndCommentContainer>
          <NameText>{title}</NameText>
          <CommentText>{comment}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
    </>
  )
}

export default NoteItem

/*
 <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotes>No Notes Yet</EmptyNotes>
          <EmptyNotes>Notes you add will appear here</EmptyNotes>
*/
