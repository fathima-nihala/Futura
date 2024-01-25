import React from 'react'
import bstseller1 from '../Images/bstseller1.png'
import bstseller2 from '../Images/bstseller2.png'
import bstseller3 from '../Images/bstseller3.png'
import bstseller4 from '../Images/bstseller4.png'
import './usebstseller.css'

const BestSellerItem=[
    {id:1, title:"DIOR HOMME ", image:bstseller1, price:'6700'},
    {id:2, title:"SHALIMAR", image:bstseller2, price:'3400'},
    {id:3, title:"BURRERRY", image:bstseller3, price:'3999'},
    {id:4, title:"You", image:bstseller4, price:'5000'},
]
const UserBestSeller = () => {
  return (
    <div  className='UserBestSeller'>
        <h3>Hot Deals</h3>
        <p>Don't Miss Todeay's Featured Deals  </p>
        <div className='usr-bst-seller'>
        {BestSellerItem.map(item => (
        <div key={item.id} className='usr-bst-slr-item'>
         <div className='bst-slr-img'> <img src={item.image} className='bst-slr-pic'/></div>
          <div className='bst-slr-tit'><h4>{item.title}</h4></div>
          <div><p><span className='rs'> ₹</span>{item.price}</p></div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UserBestSeller