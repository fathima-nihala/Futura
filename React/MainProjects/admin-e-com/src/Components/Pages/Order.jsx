import React, { useEffect, useState } from 'react'
import { getOrderDatas } from '../../API/ApiCall'
import './orderadmin.css'

const OrderList = (props) => {
  const products = [props.products]
  console.log(products);
  const item = products.map((li) => li.item)
  const user = products.map((li) => li.userData)
  return (
    <div>
      {item.map((li) => (
        <div className='order-main'>
          <div className='order-admin'>
            <div className='order-admin-left'>
              <img src={`/Images/${li.image}`} alt="" className='cartmapimg' />
            </div>
            <div className='order-admin-right'>
              <div className='order-admin-right-block'>
                <p><span className='order-span'>TiTle:</span>{li.title}</p>
                <p><span className='order-span'>Description:</span>{li.description}</p>
                <p><span className='order-span'>Price:</span>{li.price}</p>
              </div>
              <div>
                {user.map((li) => (
                  <div className='order-admin-right-block'>
                    <p><span className='order-span'>Address:</span>{li.address}</p>
                    <p><span className='order-span'>Pincode:</span>{li.pincode}</p>
                    <p><span className='order-span'>City:</span>{li.city}</p>
                    <p><span className='order-span'>Phone:</span>{li.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Order = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    const getDatasHandle = async () => {
      const res = await getOrderDatas()
      console.log(res);
      setItem(res)
    }
    getDatasHandle()
  }, [])
  return (
    <div>
      {item.map((li) => (
        <OrderList products={li.products} />
      ))}
    </div>
  )
}

export default Order