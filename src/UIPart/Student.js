import React from "react";
import { useSelector, } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Student() {
    const stuData = useSelector((state) => state.Student);
    const Navi = useNavigate();
    return (
        <>
            <div className="studentpage">
                <h1 className="S">Student Detail</h1>
                <button className="addbtn" onClick={() => Navi('/addstudent')}>Add New Student</button>
            </div>
            <div className="table">
                <table align="center" width='100%'>
                    <thead>
                        <tr>
                            <th>S.NO.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Batch</th>
                            <th>Course</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stuData.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.batch}</td>
                                    <td>{item.course}</td>
                                    <td><Link to={`/editstudent/${index}`}>Edit</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Student;