import React, {useState}from 'react'


export default function Employee() {
    let btnCLick = function(event){
        event.preventDefault();
        alert("Button Clicked")
    }
    function onChangeName(event){
        event.preventDefault();
        setName(event.target.value);
    }


    let [name, setName] = useState("No Name");

    return (
        <div>
            <h1>Employee Component</h1>
            <button onClick={(e) => btnClick(e)}>Show Alert</button>
            <p>Name: {name}</p>
            <input type="text" placeholder='Enter name here' name='txtName'  onChange={(e) => onChangeName(e)}/>
        </div>
    )
}

function btnClick(event){
    event.preventDefault();
    alert("Button Clicked")
}
function onChangeName(event){
    event.preventDefault();
    this.setName(event.target.value);
}
