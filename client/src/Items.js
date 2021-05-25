import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Items() {

    const [items,setItem] = useState([]);

useEffect(() =>{
    axios.get('/api/post')
    .then(res=>{
        setItem(res.data) 
    })
    .catch(err =>console.log(err));
},[])
console.log(items);
    return (
        <div>
            {
                items.map((item)=>(
                    <h1>{item.title}</h1>
                ))
            }
        </div>
    )
}

export default Items
