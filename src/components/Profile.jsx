import { useState } from "react"

const Profile = (props) => {
    const [favColor, setFavColor] = useState('TBD')
    // let favColor = 'TBD'
    console.log("Profile.jsx", props)
    return(
        <div>
            <p>First name: {props.info.firstName}</p>
            <p>Last name: {props.info.lastName}</p>
            <p>Favorite Color: {favColor}</p>
            <input placeholder="Enter your favorite color here" onChange={e => setFavColor(e.target.value)}/>
        </div>
    )
}

export default Profile