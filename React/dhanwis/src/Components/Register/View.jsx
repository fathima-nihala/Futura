import React from 'react'

const View = ({userData}) => {
    console.log('eeeeee',userData);
    return (
        <div>
             {userData ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Gender: {userData.gender}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Gender: {userData.gender}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    )
}

export default View