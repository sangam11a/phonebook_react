import {useState} from 'react';
import ListItems from './ListItems';
import Form1 from './Form1';
import SearchBar from './SearchBar';
const Key=()=>{
    const key1=[
        { id:1, name1:"sangam",checked:false},
        {id:2,name1:"thapa",checked:false},
        {id:3,name1:"ram",checked:false}
        
    ]//Static JSON data
    

    const handleCheckbox=(id)=>{
        const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        //console.log("id is "+id)
        changeItems(listItems)
    }

    const handleDelete=(id)=>{
        const listItems=items.filter((item)=>item.id!=id)
        //console.log(listItems)
        changeItems(listItems)
        //console.log(id)
    }

    const changeItems=(listItems)=>{
        setItems(listItems)
        localStorage.setItem('phonebook',JSON.stringify(listItems))
    }
    // const [items,setItems]=useState(key1) //JSON.parse garnu agadi ko static
    const [items,setItems]=useState(JSON.parse(localStorage.getItem("phonebook")))

    const handleForm=(e)=>{
        console.log(e)
        e.preventDefault()
        if(!newValue) return;
        // alert(newValue)
        addNewValue(newValue)
        setNewValue("")
    }
    const addNewValue=(x)=>{
        const id12=items.length?items[items.length-1].id+1:1;        
        const myNewItem={"id":id12,"name1":x,checked:false}
        const listItems=[...items,myNewItem]
        console.log(id12,listItems)
        changeItems(listItems)
    }
    const [newValue,setNewValue]=useState('')
    const [searchValue,setSearch]=useState('')
    const handleSearch=(e)=>{
        console.log(e.target.value)
    }
    const items1=items.filter((item)=>((item.name1).toLowerCase()).includes(searchValue.toLowerCase()))
    return(
        <div>
            <SearchBar setSearch={setSearch} handleSearch={handleSearch} />
            <Form1 handleForm={handleForm} newValue={newValue} setNewValue={setNewValue}/>
           {<ul>
                {
                   <ListItems items={items1} handleCheckbox={handleCheckbox} handleDelete={handleDelete}/>
                }
            </ul>}
        </div>
    )
}
export default Key;