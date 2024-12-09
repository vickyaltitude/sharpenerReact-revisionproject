
import './UsersList.css'
const UsersList = (props) => {
    return (
        <ul className='users' >
            {props.users.map(user => {
                return <li key={user.id}>{`${user.name} (${user.age} years old)`}
                </li>
        })}
        </ul>
    )
}

export default UsersList