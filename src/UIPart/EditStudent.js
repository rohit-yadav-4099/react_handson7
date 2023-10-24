import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent } from "../Slice/Slice";

function EditStudent() {
    const index = useParams().id
    const data = useSelector((state) => state.Student);
    const Navi = useNavigate();
    const dispatch = useDispatch();
    const [info, setinfo] = useState({
        name: data[index].name,
        age: data[index].age,
        course: data[index].course,
        batch: data[index].batch
    })

    const handleChange = (e) => {
        setinfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        dispatch(editStudent({ info, index }))
        Navi('/student')
    }

    return (
        <>
            <h1 className="newstudent">Edit Student</h1>
            <div className="parentDivAddstudent">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder={data[index].name} onChange={handleChange}></input><br />
                    <label>Age:</label>
                    <input type="text" name="age" placeholder={data[index].age} onChange={handleChange}></input>
                </div>
                <div className="cb">
                    <label>Course:</label>
                    <input type="text" name="course" placeholder={data[index].course} onChange={handleChange}></input><br />
                    <label>Batch:</label>
                    <input type="text" name="batch" placeholder={data[index].batch} onChange={handleChange}></input>
                </div>
            </div>
            <button className="addsubmit" onClick={() => Navi('/student')}>Back</button>
            <button className="addsubmit" onClick={handleSubmit}>Update</button>
        </>
    )
}

export default EditStudent