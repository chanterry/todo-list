import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){ //if name equals taskName
            setTaskName(value) //set task name so what is the value in input it is stored here
        }else{ //we update the description state so we can write set description and this will be value
            setDescription(value)
        }
    }

    const handleSave = (e) => { //we make one object and assign the value from the state
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj) //we call the save function (we create in TodoList component) that will pass the task object in the array taskList
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={taskName} 
                        onChange={handleChange} 
                        name="taskName"
                        placeholder="Task"
                    />
                </div>
                <div className = "form-group">
                    <textarea 
                        rows="5" 
                        className="form-control" 
                        value={description} 
                        onChange={handleChange} 
                        name="description"
                        placeholder="Description">
                    </textarea>
                </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;