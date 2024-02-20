import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getBuyOrder, getUserOrder } from '../../../API/ApiCall';

const BuyNowDatas = () => {
  const [datas, setDatas] = useState([])
  const [item, setItem] = useState([])
  const id = useParams()
  console.log('++++', id.id);
  var PrdctId = id.id
  console.log("#@#@#@", PrdctId);

  const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
  console.log('values', values);
  const loginId = values._id
  console.log('njd', loginId);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const getValue = await getBuyOrder(PrdctId)
        setItem(getValue)
        console.log('valuesss**', getValue);
      } catch (error) {
        console.log(error);
      }
    }
    getOrder()
    const buyedOrderDetails = async () => {
      try {
        const getDetails = await getUserOrder(loginId)
        console.log('getDetails', getDetails);
        setDatas([getDetails.data[0]])
      } catch (error) {
        console.log(error);
      }
    }
    buyedOrderDetails()
  }, [])
  console.log("**********", item&&item);

  return (
    <div className='buynowdats'>
      <div className='buynow-cntnr1'>
        {datas.map((li) => (
          <div className=''>
            <p className='addrs-p1'>Your Address : <span className='p-span'>{li.address},</span><span className='p-span'>{li.pincode},</span><span className='p-span'>{li.city}</span></p>
            <p className='addrs-p2'>{li.phone}<Link to='/buyupdate'><button className='change-address-btn'>change</button></Link></p>
          </div>
        ))}
      </div>
      <div className='vhhh'>
        hhi
        {/* <div>{item.price}</div> */}
        {item && item.email}
        {item && item.title}
      </div>
    </div>
  )
}

export default BuyNowDatas