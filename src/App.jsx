import "./App.css"
import Profile from "./components/Profile"
import { useState } from "react"

const App = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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

    const addNewProfile = e => {
        e.preventDefault()
        const newProfile = {
            firstName,
            lastName
        }

        setProfiles([...profiles, newProfile])
        setFirstName('')
        setLastName('')
    }

    const profilesDisplay = profiles.map((profileObj) => {
      return <Profile info={profileObj}/>
    })

    console.log(firstName)
    return (
        <div>
            {profilesDisplay}
            {/* {profiles.map(profileObj => {
                console.log(profileObj)
                return <Profile info={profileObj} />
            })} */}

            <form onSubmit={e => addNewProfile(e)}>
                <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                <button>Add Profile</button>
            </form>
        </div>
    )
}

export default App
