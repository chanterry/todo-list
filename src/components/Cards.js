import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const colors = [
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#A14DA0",
            secondaryColor : "#F3F0FD"
        }
    ]

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index) //update the index of the array with the obj
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <>
            <div className="card-wrapper mr-5">
                <div className="card-top" style={{backgroundColor: colors[index%4].primaryColor}}></div>
                <div className="task-holder">
                    <span className="card-header" style={{backgroundColor: colors[index%4].secondaryColor,borderRadius: "10px"}}>{taskObj.Name}</span>
                    <p className="mt-3">{taskObj.Description}</p>

                    <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                        <i 
                            className="far fa-edit mr-3" 
                            style={{color: colors[index%4].primaryColor, cursor: "pointer", marginRight: "10px"}} 
                            onClick = {() => setModal(true)}
                        ></i>
                        <i 
                            className="fas fa-trash-alt" 
                            style= {{color: colors[index%4].primaryColor, cursor: "pointer"}} 
                            onClick= {handleDelete}
                        ></i>
                    </div>
                </div>
                <EditTask
                    modal= {modal} 
                    toggle= {toggle} 
                    updateTask= {updateTask} 
                    taskObj= {taskObj}
                />
            </div>
        </>
    );
};

export default Card;