import React, { useState } from "react";
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newTask } from "../JS/actions/actionTask";

const NewTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  

  const add = (e) => {
    e.preventDefault();
    dispatch(newTask({ text: text, isDone: false, id: Date.now() }));
    setText("");
  };

  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>My To Do List</h1>

        <Form onSubmit={add}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={add}>
                  Add New Task
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      
      </Card.Body>
    </Card>
  );
};

export default NewTask;