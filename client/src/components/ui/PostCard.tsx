import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import type { PostTypeDb } from '../../types/postTypes';
import { usePostContext } from '../../context/PostContextProvider';

type PostCardPropsTypes = {
  post: PostTypeDb;
};

export default function PostCard({ post }: PostCardPropsTypes): JSX.Element {
  //
  const { deleteHandler } = usePostContext();

  return (
    <Col sm={3} md={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={post.url} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.desc}</Card.Text>
          <Button onClick={() => deleteHandler(post.id)} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
