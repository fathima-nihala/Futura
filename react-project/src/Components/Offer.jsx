import React, { useState } from 'react'
import off1 from '../images/bgimg.png'
import off2 from '../images/sayloreimg2.jpg'
import OrdrerMessage from './OrdrerMessage';


const Offer = () => {
    const [order, setOrder] = useState(false);
    // const [orderSuccess, setOrderSuccess] = useState(false);

    // const dispatch = useDispatch();
   const handleOrderItem = () => {
      setOrder(true);

    };
    return (
        <div className='offersss'>
            <div className='offers-head'>
                <div className='offers-text'>
                    &#128525;
                </div>
                <div classNameName='offers-img'>
                    <img src={off1} alt="" />
                </div>
            </div>
            <div className='wrapper'>
                <div className='product-img'>
                    <img src={off2} alt="" />
                </div>
                <div className='product-info'>
                    <div className='product-text'>
                        <h1>HYPE</h1>
                        <h2>Saffron AloeVera Gel</h2>
                        <p>Alovera is  found to be extremely beneficial for the skin. Packed with antioxidants like flavonoid, resveratrol, and tannin, it protects the skin from aging by restoring collagen and elastic fibers. Red wine is found to contain natural AHAs, anti-inflammatory and antiseptic properties that cleanses the pores, clears acne and reduces the chance of future breakouts. • </p>
                    </div>
                    <div className='product-price-btn'>
                        <div className='product-price-btn p'><p><span className='offer-span'>₹</span>104</p></div>
                        <div className='product-price-btn button'><button type="button" onClick={handleOrderItem}>buy now</button></div>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='product-img'>
                    <img src="https://images-static.nykaa.com/media/catalog/product/f/5/f51ee97CGGCO00000060.jpg?tr=w-500,pr-true" alt="" />
                </div>
                <div className='product-info'>
                    <div className='product-text'>
                        <h1>CGG</h1>
                        <h2>Watermelon Body Scrub</h2>
                        <p>"CGG Cosmetics Watermelon Sugar Exfoliating Body Scrub is made with natural ingredients which can remove dead skin cells, blackheads, tan, and impurities from the skin. This scrub is free from additives and is suitable for all skin types. The pure plant extracts are sourced from organic farming and are free from preservatives and chemicals.</p>
                    </div>
                    <div className='product-price-btn'>
                        <div className='product-price-btn p'><p><span className='offer-span'>₹</span>199</p></div>
                        <div className='product-price-btn button'><button type="button" onClick={handleOrderItem}>buy now</button></div>
                    </div>
                </div>
            </div>
            {order && <OrdrerMessage />} 
        </div>
    )
}

export default Offer