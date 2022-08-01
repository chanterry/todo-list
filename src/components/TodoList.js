import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Cards from './Cards';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList") //fetch the tasklist from localstorage
       
        if(arr){
            let obj = JSON.parse(arr) //convert json string back to an array
            setTaskList(obj) //check if the object is undefined,  because if it's not undefined (no tasklist item available in localstorage), we update the tasklist
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1) //delete one element
        localStorage.setItem("taskList", JSON.stringify(tempList)) //update localStorage
        setTaskList(tempList) //update tasklist
        window.location.reload() //refresh the page
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => { //toggle function set the modal to the opposition of previous state
        setModal(!modal);
    }

    const saveTask = (taskObj) => { //initially it takes an obj to push into the tasklist array
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList)) //store tasklist in local storage and convert array to json string
        setTaskList(taskList) //when temporary list is updated, we update initial task list array
        setModal(false) //to close the modal
    }


    return (
        <>
            <div className="header text-center">
                <h3>Todo List App</h3>
                <button className="btn btn-dark mt-2" onClick = {() => setModal(true)}>+</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj , index) => //callback function have access to all the objects inside the array
                    <Cards 
                        taskObj={obj} 
                        index={index} 
                        deleteTask={deleteTask} 
                        updateListArray={updateListArray}
                    />
                )}
            </div>
            <CreateTask 
                toggle={toggle} 
                modal={modal} 
                save={saveTask} // we pass the saveTask function to the modal so that the modal is able to use the function and push the task in the array
            />
        </>
    );
};

export default TodoList;