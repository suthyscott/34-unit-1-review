import "./App.css"
import Profile from "./components/Profile"
import { useState } from "react"

const App = () => {
    const [profiles, setProfiles] = useState([
        {
            firstName: "Scott",
            lastName: "Sutherland"
        },
        {
            firstName: "Kyle",
            lastName: "Baugh"
        },
        {
            firstName: "Joely",
            lastName: "Vernier"
        }
    ])

    const profilesDisplay = profiles.map((profileObj) => {
      console.log(profileObj)
      return <Profile info={profileObj}/>
    })

    return (
        <div>
            {profilesDisplay}
            {/* {profiles.map(profileObj => {
                console.log(profileObj)
                return <Profile info={profileObj} />
            })} */}
        </div>
    )
}

export default App
