import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../Slice/Slice";

function AddStudent() {
    const dispatch = useDispatch();
    const Navi = useNavigate();
    const tempStudentobj = {
        name: '',
        age: '',
        course: '',
        batch: ''
    }

    const handleChange = (e) => {
        tempStudentobj[e.target.name] = e.target.value
    }

    const handleSubmit = () => {
        dispatch(addStudent(tempStudentobj))
        Navi('/student')
    }

    return (
        <>
            <h1 className="newstudent">New Student</h1>
            <div className="parentDivAddstudent">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Enter name" onChange={handleChange}></input><br />
                    <label>Age:</label>
                    <input type="text" name="age" placeholder="Enter age" onChange={handleChange}></input>
                </div>
                <div className="cb">
                    <label>Course:</label>
                    <input type="text" name="course" placeholder="Enter course" onChange={handleChange}></input><br />
                    <label>Batch:</label>
                    <input type="text" name="batch" placeholder="Enter batch" onChange={handleChange}></input>
                </div>
            </div>
            <button className="addsubmit" onClick={() => Navi('/student')}>Back</button>
            <button className="addsubmit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default AddStudent;