import React, {useState} from 'react';
import './todoApp.css'
function TodoApp(){
 const[listInput, setlistInput] = useState('');
 const[Items, setItems] = useState([]);
 const itemE=(e)=>{
     setlistInput(e.target.value);
 };
 const listOfItem=()=>{
     setItems((oldItems)=>{
         return [...oldItems,listInput]
     })
     setlistInput("")
 }
 const removeItem = (index)=>{
    setItems((oldItems)=>{
        return oldItems.filter((arr , id)=>{
            return index !==id;
        })
    })
}
 return(
     <>
     <div className='main_content'>
     <div className='container'>
         <h1>Things To Do</h1>
         <br/>
         <input className='input' type="text" placeholder='Add Item' onChange={itemE} value={listInput}/>
         <button className='btn' onClick={listOfItem}>Add</button>
         <br/>
         <br/>
         <ol className='list_item'>
             {Items.map((itemValue, index)=>{
                 return(<>
                 <div className='todo_list'>
                    <span> <li key={index}>
                         {itemValue}
                         
                         <button className='btn' onClick={()=>removeItem(index)}>Delete</button>
                    </li>
                    </span>
                 </div>
                 </>)
             })}
         </ol>
     </div>
   </div>  </>
 )
}

export default TodoApp;