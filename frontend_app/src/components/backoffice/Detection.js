import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detectFacesByNet, getDetectImage, getDetectImageError, getDetections, resetDetections, setDetectImage, setDetectImageError, setDetectTime } from "../../features/dashboard/detectSlice"
import { LoaderSlim } from "../LoaderSlim"
import * as faceapi from 'face-api.js'
import { ExecTime } from "./ExecTime"
import { getUserDetails } from "../../features/auth/authSlice";

const grades= [
    { subject: 'Operating System', gpa: '7.3' },
    { subject: 'DBMS', gpa: '8.1' },
    { subject: 'Data Structure And Algorithms', gpa: '8.5' },
  ]


const timeTable= [
    { subject: 'Operating System', time: '11:00 AM' },
    { subject: 'DBMS', time: '12:00 PM' },
    { subject: 'Data Structure And Algorithms', time: '01:00 PM' },
  ]

export const Detection = () => {
    const user = useSelector(getUserDetails);


    // Conditionally render based on userType
    if (user.userType === "student") {
        return (
            <div className="col-12 my-box mb-4">
                <div className="heading">
                    <h2>Student Grades</h2>
                </div>
                <div className="row info">
                    <div className="col-sm-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {grades.map((grade, index) => (
                                    <tr key={index}>
                                        <td>{grade.subject}</td>
                                        <td>{grade.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="col-12 my-box mb-4">
                <div className="heading">
                    <h2>Faculty TimeTable</h2>
                </div>
                <div className="row info">
                    <div className="col-sm-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timeTable.map((timeTable, index) => (
                                    <tr key={index}>
                                        <td>{timeTable.subject}</td>
                                        <td>{timeTable.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
