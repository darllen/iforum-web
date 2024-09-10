import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import IconUser from '../iconUser';

const CommentSection = ({ comments, user }) => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comentários
    </Header>

    {comments.map((comment) => (
      <Comment key={comment.id}>
        <Comment.Content>
          <Comment.Text>{comment.descricao}<p>{user.nome}</p></Comment.Text>
        </Comment.Content>
      </Comment>
    ))}
  </Comment.Group>
);

export default CommentSection;

