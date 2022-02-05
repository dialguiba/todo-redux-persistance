import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useState } from "react";

import "react-calendar/dist/Calendar.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, setCurrentDate, todoSetActives } from "./actions/todos";

import { FormModal } from "./components/FormModal";

export const TodoApp = () => {
  const [modalShow, setModalShow] = useState(false);

  const { currentTodos, currentDate } = useSelector((state) => state.content);

  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    dispatch(setCurrentDate(e.target.value));
    dispatch(todoSetActives(e.target.value));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    dispatch(todoSetActives(currentDate));
  };

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Form.Control type="date" placeholder="Ingrese fecha" onChange={handleDateChange} value={currentDate} />
        </Col>
        <Col xs="auto">
          <Button onClick={() => setModalShow(true)}>Crear Tarea</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {React.Children.toArray(
              currentTodos.map((todo) => (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Col className="col-auto me-auto">{todo.name}</Col>
                      <Col className="col-auto text-muted ">{todo.description}</Col>
                    </Col>
                    <Col className="col-auto">
                      <Button type="button" className="btn-close" aria-label="Close" onClick={() => handleDeleteTodo(todo.id)}></Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};
