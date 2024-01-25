import './usrpopproducts.css'
import popular from '../../UserComponent/UserApi/popular.json'
import UserItem from '../UserItem/UserItem'


const UserPopularProducts = () => {
 
  return (
    <div className='popular'>
        <h3 className='popular-h3'>Popular Product</h3>
        <p className='popular-p'>Fragrance of Love with Perfume</p>
      <div className='pop-cntnts'>
        
        {popular.map((data,i)=>{
          return <UserItem key={i} id={data.id} title={data.title} image={data.image} price={data.price} description={data.description}/>
        })}
      </div>
    </div>
  )
}

export default UserPopularProducts
