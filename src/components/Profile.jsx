import { useState } from "react"
import './Profile.css'

const Profile = (props) => {
    const [favColor, setFavColor] = useState('TBD')
    // let favColor = 'TBD'
    // console.log("Profile.jsx", props)

    return(
        <div className="profile-container">
            {/* <p style={{color: 'green', backgroundColor: 'red'}}>First name: {props.info.firstName}</p> */}
            <p >First name: {props.info.firstName}</p>
            <p>Last name: {props.info.lastName}</p>
            <p>Favorite Color: {favColor}</p>
            <input placeholder="Enter your favorite color here" onChange={e => setFavColor(e.target.value)}/>
            <button onClick={() => props.deleteFunction(props.index)}>Delete Profile</button>
        </div>
    )
}

export default Profile