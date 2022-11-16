import React from 'react'

const ListItems = ({handleCheckbox,handleDelete,items}) => {
    const elem=items.length?items.map((item)=>(
        <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={()=>handleCheckbox(item.id)}/>
            <label style={item.checked?{textDecoration:'line-through'}:null}>{item.name1}</label>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </li>
        )
    ):"You have nothing to display"
  return (
           <div>
                <ul>
                    {elem}
                </ul>
           </div>
        )
}

export default ListItems