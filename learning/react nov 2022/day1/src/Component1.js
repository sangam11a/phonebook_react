import {useState} from 'react';
const Component1=()=>{
    const [name,setName]=useState("Sangam")
    const [age,setAge]=useState("21")
    const[text1,setText1]=useState("")
    const[text2,setText2]=useState("")

    
    const changeName=()=>{        
        const names=["ram","sam","hari","khadka"]
        const ages=[22,45,56,77]
        const int=(Math.floor(Math.random()*names.length))
        setName(names[int])
        setAge(ages[int])
    }

    const getText=(e)=>{
        setText1(e.target.value)
        console.log(e.target.value)
    }
    const getText2=(e)=>{
        setText2(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <div>
            <div onClick={changeName}>
                <span> Hello! My name is {name}. I am {age} years old</span>            
            </div>
            <div id="input1">
                <form>
                    <input onChangeCapture={(e)=>getText(e)}/>
                    <input onChangeCapture={(e)=>getText2(e)}/>
                </form>
            </div>
            <div>
                <h2>
                My name is {text1}
                <br/>
                I am  {text2} years old
                </h2>
            </div>
        </div>
    )

}
export default Component1