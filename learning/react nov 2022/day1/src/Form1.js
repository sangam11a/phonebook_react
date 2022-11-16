import React from 'react'

const Form1 = ({handleForm,newValue,setNewValue}) => {
    
  return (
    <div>
        <form onSubmit={(e)=>handleForm(e)}>
            <label htmlFor='Name1'>
                Name
            </label>
            <input type="text" id="Name1" value={newValue} onChange={(e)=>setNewValue(e.target.value)}required/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form1;