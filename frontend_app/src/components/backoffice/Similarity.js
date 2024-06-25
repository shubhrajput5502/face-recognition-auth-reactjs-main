import { useDispatch, useSelector } from "react-redux"
import { getActiveDistance, getEuclideanSimilarity, getEuclideanValue, getManhattanSimilarity, getManhattanValue, setActiveDistance, setEuclideanValue, setManhattanValue } from "../../features/dashboard/similaritySlice"
import { Threshold } from "./Threshold"
import { SimilarityResult } from "./SimilarityResult"
import { getUserDetails } from "../../features/auth/authSlice";

export const Similarity = () => {

    const user = useSelector(getUserDetails);
    console.log(user)

    const dispatch = useDispatch()
    const activeTab = useSelector(getActiveDistance)
    const euclideanSimilarity = useSelector(getEuclideanSimilarity)
    const manhattanSimilarity = useSelector(getManhattanSimilarity)
    const euclideanTollerance = useSelector(getEuclideanValue)
    const manhattanTollerance = useSelector(getManhattanValue)


    return (
        <div className="col-12 my-box mb-4 similarity-test">
            <div className="heading">
                <h2>Welcome! You have sucessfully logged in...</h2>
            </div>
            <div className="row info mb-3">
                <div className="col-sm-12">
                    <p>Further details are available in the report attached to the project.</p>
                </div>
            </div>
            <div className="col-12 my-box mb-4 similarity-test">
            <div className="heading">
                <h2>User Details</h2>
            </div>
            <div className="row info mb-3">
                <div className="col-sm-12">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>User Type:</strong> {user.userType}</p>
                </div>
            </div>
        </div>
        </div>
    )
}