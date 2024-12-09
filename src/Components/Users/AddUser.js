const AddUser = () => {

    function addUserHandler(event) {
      event.preventDefault()
   }
    return (

        <form onSubmit={(e) => addUserHandler(e)}>
        <div>
           <label for="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label for="age">Age</label>
                <input type="text" id="age" />
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
           
        </form>
    )
}

export default AddUser;