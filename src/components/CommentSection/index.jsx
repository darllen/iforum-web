import React from 'react';
import { Comment, Header, Icon } from 'semantic-ui-react';
import IconUser from '../iconUser'; // Certifique-se de que o caminho está correto

const CommentSection = ({ comments }) => (
  <Comment.Group>
    <Header as='h3' dividing>
      Respostas
    </Header>

    {comments.map((comment, index) => (
      <Comment key={index}>
        <Comment.Avatar as={() => <IconUser user={comment.user} type={comment.type} />} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.user}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.date}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <Icon name="heart" /> {comment.likes}
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    ))}
  </Comment.Group>
);

export default CommentSection;
