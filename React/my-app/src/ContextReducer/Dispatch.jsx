import React from 'react'
import { useContext } from 'react'
import { userContext } from './context'

const Dispatch = () => {
    const {dispatch}=useContext(userContext)
    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users') //axios is a package used to fix API.
            console.log(res.data);
            setstate(res.data)

            dispatch({type:'LoginSuccess',payload:(res.data)}) //useRedux.js ile function lek data access cheyyunnu.
        }
        display()
        console.log('state data',state);
    },[])

  return (
    <div>Dispatch</div>
  )
}

export default Dispatch