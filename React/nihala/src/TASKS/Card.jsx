import React , { useEffect,useState } from "react"
import axios from "axios"
// import './Card.css'

function Card(){
     const [state,setstate] = useState([]);
     useEffect(() => {
        async function display(){
        const res=await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log(res.data);
        setstate(res.data)
        }
        display()
},[])

console.log('state data',state)
const a=state.filter((data)=>{
return data.id<=10
})
console.log('88888',a);

  return (
    <div className="card">
        <div className="card1">

          {/* <table border={2}> */}
            {a.map((user)=>(
                <div className="main" key={user.id}>
                    <img src="{user.thumbnailUrl}" alt="" />
                    <h5>{user.title}</h5>
                    <button onClick={()=>window.open(user.url) }>Click</button>
                    </div>         
      
    
            ))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
 
    {/* </table> */}
        </div>
    </div>
  )
}
export default Card