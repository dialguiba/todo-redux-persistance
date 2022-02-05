import moment from "moment";
import React from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addTodo, todoSetActives } from "../../actions/todos";
import { useForm } from "../../hooks/useForm";

export const FormModal = (props) => {
  const dispatch = useDispatch();

  const { currentDate } = useSelector((state) => state.content);

  const [formTodoValues, handleTodoInputChange] = useForm({
    name: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    description: "",
  });

  const { name, date, description } = formTodoValues;

  const handleCreateTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo({ name, date, id: new Date().getTime(), description }));
    dispatch(todoSetActives(currentDate));
    props.onHide();
    Swal.fire({
      icon: "success",
      title: "created",
      text: "Todo created successfully",
    });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Añadir Tarea</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleCreateTodo}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre de Tarea</Form.Label>
            <Form.Control type="text" placeholder="Ingresa nombre de la tarea" value={name} name="name" onChange={handleTodoInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Descripción de Tarea</Form.Label>
            <Form.Control type="text" placeholder="Ingresa nombre de la tarea" value={description} name="description" onChange={handleTodoInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="Ingrese fecha" value={date} name="date" onChange={handleTodoInputChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
