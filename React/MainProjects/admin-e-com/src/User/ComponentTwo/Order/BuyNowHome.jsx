import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserOrder, postUserOrder } from '../../../API/ApiCall';
import { Link, useParams } from 'react-router-dom';

const BuyNowHome = () => {

    const value = useParams()
    const id = useParams()
    var Ids = value.id

    console.log('!@#$', Ids);

    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [continueState, setContinueState] = useState(false)
    const [datas, setDatas] = useState([])


    const values = useSelector((state) => state.userLogin.userLoginInfo[0]);
    console.log('values', values);
    const loginId = values._id

    useEffect(() => {
        const showHandler = async () => {
            const res = await getUserOrder(loginId)
            console.log(res)
            if (res && res.data && res.data.length > 0) {
                setContinueState(false)
                setDatas([res[0]])
            } else {
                setContinueState(true)
            }
        }
        showHandler()
    }, [])

    const handleGet = async () => {
        try {
            const dataget = await getUserOrder(loginId)
            console.log('dsdsds', dataget);
        } catch (error) {
            console.log(error);
        }
    }

    const display = async (e) => {
        e.preventDefault()
        try {
            const dataPost = await postUserOrder({ address, pincode, city, phone, loginId })
            console.log('dataPost', dataPost);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='buynowhome'>
            <h3>Your Address</h3>
            <div>
                <div>
                    {continueState &&
                        <div>
                            <div>
                                <input type="text" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" value={pincode} placeholder='Pincode' onChange={(e) => setPincode(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" value={city} placeholder='City' onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div>
                                <input type="text" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                    }
                    <div>
                        {!continueState && datas.map((li) => (
                            <>
                                <div>
                                    <p>{li.address}</p>
                                    <p>{li.pincode}</p>
                                    <p>{li.city}</p>
                                    <p>{li.phone}</p>

                                </div>
                            </>
                        ))}
                    </div>
                </div>
                {continueState &&
                    // <div><Link to={`/buynowdata`}><button onClick={(e) => display(e,id)}>continue</button></Link>
                    // </div>
                    <Link to={`/buynowdata/${Ids}`}><button>continue</button></Link>
                }
                <button onClick={() => handleGet(id)}>change</button>
                {!continueState &&
                    <div>
                        <Link to={`/buynowdata/${Ids}`}><button>continue</button></Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default BuyNowHome
