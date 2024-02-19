import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BuyNowDatas = () => {

  const [item, setItem] = useState([])
  const id = useParams()
  console.log('++++', id.id);
  var PrdctId = id.id

  const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
  console.log('values', values);
  const loginId = values._id
  console.log('njd', loginId);



  return (
    <div></div>
  )
}

export default BuyNowDatas