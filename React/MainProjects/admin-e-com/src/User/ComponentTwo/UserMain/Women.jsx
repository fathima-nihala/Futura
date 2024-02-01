import React, { useEffect, useState } from 'react'
import './women.css'
import { productView } from '../../../API/ApiCall'
import Wrap from '../All Wrap/Wrap'

const Women = () => {


    const [product, setProduct] = useState([])
    const womensDresses = product.filter(product => product.category === 'women');



    useEffect(() => {
        const getproduct = async (id) => {
            console.log('getproduct', id);
            try {
                const res = await productView();
                setProduct(res.data);
                console.log("dataaaa", res.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        getproduct()
    }, [])


    return (
        <div className='women'>
            <div className='women-cntnt'>
                {womensDresses.map((data) => (
                    <Wrap
                        key={data.id}
                        image={`${process.env.PUBLIC_URL}/Images/${data.image}`}
                        title={data.title}
                        description={data.description}
                        mrp={data.mrp}
                        price={data.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Women