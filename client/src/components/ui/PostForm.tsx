import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { usePostContext } from '../../context/PostContextProvider';

export default function PostForm(): JSX.Element {
  //
  const { submitHandler } = usePostContext();

  return (
    <Form onSubmit={submitHandler} className="mb-3">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
        <Form.Control
          name="title"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Desc</InputGroup.Text>
        <Form.Control
          name="desc"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Url</InputGroup.Text>
        <Form.Control
          name="url"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button type="submit" variant="warning">
        Add
      </Button>
    </Form>
  );
}
