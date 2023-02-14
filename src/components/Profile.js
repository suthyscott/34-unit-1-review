
const Profile = (props) => {
    console.log(props)
    return(
        <div>
            {props.isMe && 'this is my profile'}
            <p>First name: {props.info.firstName}</p>
            <p>Last name: {props.info.lastName}</p>
            <p>Favorite Color: {props.info.favColor}</p>
        </div>
    )
}

export default Profile