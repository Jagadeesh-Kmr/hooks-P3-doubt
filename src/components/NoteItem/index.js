import {
  ListItem,
  NameAndCommentContainer,
  NameText,
  CommentText,
  EmptyImage,
} from './styledComponents'

const NoteItem = props => {
  const {commentDetails} = props
  const {title, comment} = commentDetails
  const commentLength = commentDetails.length === 0
  return (
    <>
      {commentLength ? (
        <div>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NameText>No Notes Yet</NameText>
          <NameText>Notes you add will appear here</NameText>
        </div>
      ) : (
        <ListItem>
          <NameAndCommentContainer>
            <NameText>{title}</NameText>
            <CommentText>{comment}</CommentText>
          </NameAndCommentContainer>
        </ListItem>
      )}
    </>
  )
}

export default NoteItem
