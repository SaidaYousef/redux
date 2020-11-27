import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { editTask } from "../JS/actions/actionTask";


const EditTask = ({Item}) => {
  const [show, setShow] = useState(false);
  const [Edit, setEdit] = useState(Item.text);
  
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  //adding edit button 
  return (
    <>
      <Button variant="primary" onClick={()=>{handleShow();setEdit(Item.text)}}>
        Edit
        
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       
        <Modal.Body>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={Edit}
            onChange={(e)=>setEdit(e.target.value)}


          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={
              handleClose
            }
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={()=>{dispatch(editTask(Item.id,Edit));handleClose()}}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;