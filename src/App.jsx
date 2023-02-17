import "./App.css"
import Profile from "./components/Profile"
import { useState } from "react"

const App = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
        setFirstName("")
        setLastName("")
    }

    const deleteProfile = index => {
        console.log("hit deleteProfile", index)
        profiles.splice(index, 1)
        //This works because if you set a state value to be itself it won't register that any change has taken place, even if you've altered that array. You have to set it to be a new array and then spread in the spliced profiles array.
        setProfiles([...profiles])
    }
    console.log("its a render")
    const profilesDisplay = profiles.map((profileObj, index) => {
        return (
            <Profile
                info={profileObj}
                key={profileObj.lastName}
                deleteFunction={deleteProfile}
                index={index}
            />
        )
    })

    return (
        <div>
            <div className="profiles-container">
                {profilesDisplay}
            </div>

            {/* {profiles.map(profileObj => {
                console.log(profileObj)
                return <Profile info={profileObj} />
            })} */}

            <form onSubmit={e => addNewProfile(e)}>
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <button>Add Profile</button>
            </form>
        </div>
    )
}

export default App
