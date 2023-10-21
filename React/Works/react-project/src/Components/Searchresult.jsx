import React from 'react'

const Searchresult = ({searchResult}) => {
    console.log('****',searchResult);

  return (
    <div>
         <div>
        <div className='b-card-container'>
          {searchResult.map((item) => (
            <div key={item.id} className="card-items">
              <div>
              <img src={item.thumbnail} alt={item.name} className='card-image' />
              </div>
              <div className="card-item-details">
                <span className='card-item-title'>{item.title}</span>
                <span className='card-item-description'>{item.description}</span>
                <span>₹{item.price}&nbsp;&nbsp;<span className='mrp'>₹{item.mrp}</span></span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Searchresult