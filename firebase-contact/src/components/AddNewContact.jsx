import React from 'react'

const AddNewContact = () => {
  return (
    <div className=" ">
        <form>
            <label>Name</label>
            <input name='name' type='text'></input>
            <label>Email</label>
            <input name='name' type='email'></input>
        </form>
    </div>
  )
}

export default AddNewContact