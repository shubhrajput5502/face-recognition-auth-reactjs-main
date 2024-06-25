import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../features/auth/authSlice"
import { detectFacesForMatching, getPhotoA, getPhotoB, resetMatchState, setMatchError, setMatchImage } from "../../features/dashboard/matchSlice"
import { MatchingChart } from "./MatchingChart"
import * as faceapi from 'face-api.js'
import { LoaderSlim } from "../LoaderSlim"
import { getUserDetails } from "../../features/auth/authSlice";

const timetable = [
    {
        "subject": "Mathematics",
        "date": "2024-06-15",
        "time": "10:00 AM - 12:00 PM"
    },
    {
        "subject": "Physics",
        "date": "2024-06-17",
        "time": "1:00 PM - 3:00 PM"
    },
    {
        "subject": "Chemistry",
        "date": "2024-06-19",
        "time": "10:00 AM - 12:00 PM"
    },
    {
        "subject": "Biology",
        "date": "2024-06-21",
        "time": "2:00 PM - 4:00 PM"
    }
]

const professorDetails = [{
    "salary": "$10,000",
    "designation": "Associate Professor"
},
]




export const Matching = () => {
    const user = useSelector(getUserDetails);
    const ExamTimetable = (timetable) => (
        <div className="exam-timetable">
            <h3>Exam Time Table</h3>
            {timetable.map((exam, index) => (
                <div key={index}>
                    <p><strong>Subject:</strong> {exam.subject}</p>
                    <p><strong>Date:</strong> {exam.date}</p>
                    <p><strong>Time:</strong> {exam.time}</p>
                </div>
            ))}
        </div>
    );
    const ProfessorDetails = ({ user }) => (
        <div className="professor-details">
            <p><strong>Salary:</strong> {user.salary}</p>
            <p><strong>Designation:</strong> {user.designation}</p>
        </div>
    );


    // Conditionally render based on userType
    if (user.userType === "student") {
        return (
            <div className="col-12 my-box mb-4">
                <ExamTimetable />
            </div>)
    }
    else {
        return (
            <div className="col-12 my-box mb-4">
                <ProfessorDetails />
            </div>)
    }
}